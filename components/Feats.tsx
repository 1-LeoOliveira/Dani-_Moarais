import Reveal from "./Reveal";

const NAMES = [
  "Gusttavo Lima",
  "Léo Santana",
  "Claudia Leitte",
  "Psirico",
  "Turma do Pagode",
  "Mano Walter",
  "Reinaldinho · Terra Samba",
  "Tuca Fernandes",
];

export default function Feats() {
  return (
    <section className="feats">
      <div className="wrap">
        <span className="eyebrow on-dark">Participações</span>
        <Reveal as="h2">Já dividiu o palco com os gigantes</Reveal>
        <Reveal as="p" className="sub">
          Participações ao lado de grandes nomes da música brasileira.
        </Reveal>
        <Reveal as="div" className="feat-names">
          {NAMES.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </Reveal>
        <Reveal as="div" className="video-cta">
          <a
            className="btn btn-pink"
            href="https://www.youtube.com/@DaniMoraisOficial"
            target="_blank"
            rel="noopener"
          >
            ▶ Assistir show no YouTube
          </a>
        </Reveal>
      </div>
    </section>
  );
}
