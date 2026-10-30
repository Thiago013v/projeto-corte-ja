import Link from "next/link";

export default function Login() {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="flex flex-col">
        <h1 className="text-5xl text-secondary font-bold">Login</h1>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-2xl text-secondary font-bold">
            Email
          </label>
          {/* Aqui ficará o componente de Input do Shadcn */}
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-2xl text-secondary font-bold"
          >
            Senha
          </label>
          {/* Aqui ficará o componente de Input do Shadcn */}
        </div>

        <button className="p-4 bg-secondary text-surface font-bold text-3xl rounded-md">
          Entrar
        </button>

        <p className="text-zinc-400">
          Não tem uma conta?{" "}
          <Link className="text-secondary font-bold" href="/login">
            Cadastre-se
          </Link>
        </p>
      </div>
    </main>
  );
}
