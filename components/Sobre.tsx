import Reveal from "./Reveal";
import Counter from "./Counter";

const GENRES = ["Sertanejo", "Funk", "Axé", "Pagode", "Hits do momento"];

const MILESTONES = [
  { year: "2002", title: "Formação em Música", text: "Universidade Estadual de Montes Claros (Unimontes)." },
  { year: "2009", title: "Semifinalista do Ídolos", text: "Rede Record — projeção nacional na TV." },
  { year: "2012", title: "Semifinalista do The Voice Brasil", text: "Rede Globo — voz reconhecida em rede nacional." },
  { year: "2013", title: "Carnaval de Salvador", text: "No circuito de um dos maiores carnavais do país." },
  { year: "2013–15", title: "Apresentadora TV Cruzeiro", text: "Canal Premiere." },
  { year: "2014", title: "FIFA Fan Fest", text: "ExpoMinas — palco oficial da Copa do Mundo." },
];

const STATS = [
  { target: 58.3, suffix: " mil", label: "seguidores no Instagram" },
  { target: 67, suffix: " mil", label: "seguidores no Facebook" },
  { target: 112, suffix: "", label: "vídeos no YouTube" },
  { target: 20, suffix: "+", label: "anos de carreira" },
];

const FEATS = [
  "Gusttavo Lima",
  "Léo Santana",
  "Claudia Leitte",
  "Psirico",
  "Turma do Pagode",
  "Mano Walter",
  "Reinaldinho · Terra Samba",
  "Tuca Fernandes",
];

export default function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <div className="wrap">
        <span className="eyebrow">Sobre</span>
        <Reveal as="h2">
          Um novo conceito de show no cenário da <span className="pink">música mineira</span>
        </Reveal>
        <Reveal as="p" className="lead">
          Do sertanejo ao funk, o grande diferencial desse repertório — pensado por meio de
          estudo de público — é fazer com que o show seja cheio de energia e contagiante para
          todos! Mais de 20 anos de carreira, passagens por Ídolos e The Voice Brasil, e uma
          trajetória construída palco a palco em Minas Gerais e por todo o Brasil.
        </Reveal>
        <Reveal as="div" className="genres">
          {GENRES.map((genre) => (
            <span key={genre}>{genre}</span>
          ))}
        </Reveal>

        <div className="tl-grid">
          {MILESTONES.map((item) => (
            <Reveal as="div" className="tl-item" key={item.year + item.title}>
              <div className="year">{item.year}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>

        <div className="stats-grid">
          {STATS.map((stat) => (
            <Reveal as="div" className="stat" key={stat.label}>
              <Counter target={stat.target} suffix={stat.suffix} />
              <span>{stat.label}</span>
            </Reveal>
          ))}
        </div>

        <Reveal as="div" className="feat-names">
          <p className="label">Já dividiu o palco com os gigantes</p>
          <div className="feat-names-row">
            {FEATS.map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
