import { login } from "./actions";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <main className="admin-login">
      <form action={login} className="admin-card admin-form">
        <h1>Painel Dani Morais</h1>
        <label>
          Senha
          <input type="password" name="password" required autoFocus />
        </label>
        {error && <p className="admin-error">Senha incorreta.</p>}
        <button className="btn btn-purple" type="submit">
          Entrar
        </button>
      </form>
    </main>
  );
}
