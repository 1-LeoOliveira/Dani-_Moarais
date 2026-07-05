import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifySessionToken, COOKIE_NAME } from "@/lib/admin-auth";
import { logoutAction } from "./actions";

export default async function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;

  if (!verifySessionToken(token)) {
    redirect("/admin/login");
  }

  return (
    <div className="admin-page">
      <div className="admin-topbar">
        <span>Painel — Dani Morais</span>
        <form action={logoutAction}>
          <button className="btn btn-outline btn-sm" type="submit">
            Sair
          </button>
        </form>
      </div>
      {children}
    </div>
  );
}
