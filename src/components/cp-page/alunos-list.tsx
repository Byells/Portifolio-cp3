"use client";
import { Aluno } from "@/types/types";
import { fetcher } from "@/utils/fetcher";
import { Loader } from "lucide-react";
import Link from "next/link";
import useSWR from "swr";
import { Button } from "../ui/button";

export const AlunosList: React.FC = () => {
  const {
    data: alunos,
    error,
    isLoading,
  } = useSWR<Aluno[]>("/api/alunos", fetcher, {
    suspense: true,
    fallbackData: [],
  });
  if (error || !alunos) throw new Error(error);
  if (isLoading) {
    return (
      <div className="inline-flex gap-4">
        <Loader className="animate-spin" />
        Carregando...
      </div>
    );
  }

  return (
    <div className="grid gap-2 md:justify-items-start">
      {alunos.map((aluno) => (
        <Button key={aluno.id} asChild variant="link" className="text-base">
          <Link href={`cp/${aluno.id}`}>
            <h2>{aluno.nome}</h2>
          </Link>
        </Button>
      ))}
    </div>
  );
};
