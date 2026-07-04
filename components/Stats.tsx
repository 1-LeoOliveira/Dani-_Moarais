import Reveal from "./Reveal";
import Counter from "./Counter";

const STATS = [
  { target: 58.3, suffix: " mil", label: "seguidores no Instagram" },
  { target: 67, suffix: " mil", label: "seguidores no Facebook" },
  { target: 112, suffix: "", label: "vídeos no YouTube" },
  { target: 20, suffix: "+", label: "anos de carreira" },
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="wrap stats-grid">
        {STATS.map((stat) => (
          <Reveal as="div" className="stat" key={stat.label}>
            <Counter target={stat.target} suffix={stat.suffix} />
            <span>{stat.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
