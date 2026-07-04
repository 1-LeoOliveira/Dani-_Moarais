import Reveal from "./Reveal";

const MILESTONES = [
  { year: "2002", title: "Formação em Música", text: "Universidade Estadual de Montes Claros (Unimontes)." },
  { year: "2009", title: "Semifinalista do Ídolos", text: "Rede Record — projeção nacional na TV." },
  { year: "2012", title: "Semifinalista do The Voice Brasil", text: "Rede Globo — voz reconhecida em rede nacional." },
  { year: "2013", title: "Carnaval de Salvador", text: "No circuito de um dos maiores carnavais do país." },
  { year: "2013–15", title: "Apresentadora TV Cruzeiro", text: "Canal Premiere." },
  { year: "2014", title: "FIFA Fan Fest", text: "ExpoMinas — palco oficial da Copa do Mundo." },
];

export default function Timeline() {
  return (
    <section className="timeline" id="trajetoria">
      <div className="wrap">
        <span className="eyebrow on-dark">Trajetória</span>
        <Reveal as="h2">Uma carreira construída palco a palco</Reveal>
        <Reveal as="p" className="sub">
          Da formação acadêmica em música aos maiores palcos da TV brasileira.
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
      </div>
    </section>
  );
}
