import { getShows } from "@/lib/agenda-store";
import { getStats } from "@/lib/stats-store";
import { addShowAction, updateShowAction, deleteShowAction, updateStatsAction } from "./actions";

export default async function AdminAgendaPage() {
  const shows = await getShows();
  const stats = await getStats();

  return (
    <main className="admin-content">
      <h1>Painel</h1>
      <p className="admin-hint">
        As alterações aqui aparecem no site assim que você salvar.
      </p>

      <section className="admin-card">
        <h2>Números (seção &quot;Sobre&quot;)</h2>
        <form action={updateStatsAction} className="admin-form">
          <div className="admin-form-row">
            <label>
              Seguidores no Instagram
              <input
                name="instagramFollowers"
                type="number"
                min="0"
                defaultValue={stats.instagramFollowers}
                required
              />
            </label>
            <label>
              Seguidores no Facebook
              <input
                name="facebookFollowers"
                type="number"
                min="0"
                defaultValue={stats.facebookFollowers}
                required
              />
            </label>
          </div>
          <div className="admin-form-row">
            <label>
              Vídeos no YouTube
              <input
                name="youtubeVideos"
                type="number"
                min="0"
                defaultValue={stats.youtubeVideos}
                required
              />
            </label>
            <label>
              Anos de carreira
              <input
                name="yearsOfCareer"
                type="number"
                min="0"
                defaultValue={stats.yearsOfCareer}
                required
              />
            </label>
          </div>
          <button className="btn btn-purple" type="submit">
            Salvar números
          </button>
        </form>
      </section>

      <section className="admin-card">
        <h2>Adicionar show</h2>
        <form action={addShowAction} className="admin-form">
          <div className="admin-form-row">
            <label>
              Dia
              <input name="day" placeholder="12" required />
            </label>
            <label>
              Mês
              <input name="month" placeholder="jul." required />
            </label>
            <label className="admin-grow">
              Turnê
              <input name="tour" placeholder="Turnê 2026" required />
            </label>
          </div>
          <label>
            Cidade
            <input name="city" placeholder="Belo Horizonte - MG" required />
          </label>
          <label>
            Link de detalhes (opcional — padrão é o WhatsApp)
            <input name="detailsUrl" placeholder="https://wa.me/..." />
          </label>
          <button className="btn btn-purple" type="submit">
            Adicionar show
          </button>
        </form>
      </section>

      <section className="admin-card">
        <h2>Shows cadastrados ({shows.length})</h2>
        {shows.length === 0 && <p className="admin-hint">Nenhum show cadastrado ainda.</p>}
        <div className="admin-list">
          {shows.map((show) => (
            <form action={updateShowAction} className="admin-form admin-row" key={show.id}>
              <input type="hidden" name="id" value={show.id} />
              <input name="day" defaultValue={show.day} className="admin-input-sm" aria-label="Dia" />
              <input name="month" defaultValue={show.month} className="admin-input-sm" aria-label="Mês" />
              <input name="tour" defaultValue={show.tour} aria-label="Turnê" />
              <input name="city" defaultValue={show.city} aria-label="Cidade" />
              <input name="detailsUrl" defaultValue={show.detailsUrl} aria-label="Link de detalhes" />
              <div className="admin-row-actions">
                <button className="btn btn-outline btn-sm" type="submit">
                  Salvar
                </button>
                <button className="btn btn-pink btn-sm" type="submit" formAction={deleteShowAction}>
                  Excluir
                </button>
              </div>
            </form>
          ))}
        </div>
      </section>
    </main>
  );
}
