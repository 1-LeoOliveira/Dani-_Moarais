import Reveal from "./Reveal";
import Counter from "./Counter";
import { getStatsData } from "@/lib/stats";
import { formatCount } from "@/lib/format";

const GENRES = [
  "Sertanejo",
  "Funk",
  "Axé",
  "Pagode",
  "Hits do momento",
  "Eventos sociais e corporativos",
];

const MILESTONES = [
  { year: "2002", title: "Formação em Música", text: "Universidade Estadual de Montes Claros (Unimontes)." },
  { year: "2009", title: "Semifinalista do Ídolos", text: "Rede Record — projeção nacional na TV." },
  { year: "2012", title: "Semifinalista do The Voice Brasil", text: "Rede Globo — voz reconhecida em rede nacional." },
  { year: "2013", title: "Carnaval de Salvador", text: "No circuito de um dos maiores carnavais do país." },
  { year: "2013–15", title: "Apresentadora TV Cruzeiro", text: "Canal Premiere." },
  { year: "2014", title: "FIFA Fan Fest", text: "ExpoMinas — palco oficial da Copa do Mundo." },
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

export default async function Sobre() {
  const { stats: savedStats } = await getStatsData();

  const stats = [
    { ...formatCount(savedStats.instagramFollowers), label: "seguidores no Instagram" },
    { ...formatCount(savedStats.facebookFollowers), label: "seguidores no Facebook" },
    { target: savedStats.yearsOfCareer, suffix: "+", label: "anos de carreira" },
  ];

  return (
    <section className="sobre" id="sobre">
      <div className="wrap">
        <span className="eyebrow">Sobre</span>
        <Reveal as="h2">
          Um novo conceito de show para quem busca{" "}
          <span className="pink">emoção, energia e conexão</span>
        </Reveal>
        <Reveal as="p" className="lead">
          O encontro de Minas com a Bahia deu origem a uma artista plural, que transforma
          diferentes influências em uma experiência única no palco.
        </Reveal>
        <Reveal as="p" className="lead">
          Com mais de 20 anos de carreira, passagens por grandes realities musicais e uma
          trajetória construída diante do público, Dani Morais entrega um espetáculo que vai
          além de estilos musicais: conecta pessoas por meio da música, da presença e da
          autenticidade.
        </Reveal>
        <Reveal as="p" className="lead">
          Cada apresentação é viva, intensa e pensada para emocionar, celebrar e fazer o
          público cantar do início ao fim.
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
          {stats.map((stat) => (
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
