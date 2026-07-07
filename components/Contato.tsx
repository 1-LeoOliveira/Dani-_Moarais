import Reveal from "./Reveal";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function Contato() {
  return (
    <section className="contato" id="contato">
      <div className="wrap">
        <span className="eyebrow">Contratação</span>
        <Reveal as="h2">
          Leve esse show <span className="pink">para o seu evento</span>
        </Reveal>
        <Reveal as="p" className="sub">
          Eventos sociais e corporativos. Fale com a equipe e monte o show ideal para o seu
          público.
        </Reveal>

        <div className="contato-links">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener">
            Contratação
          </a>
          <a href="#agenda">Shows</a>
          <a href="mailto:contato@danimorais.com.br">Imprensa</a>
          <a href="mailto:contato@danimorais.com.br">Parcerias</a>
        </div>

        <div className="contato-main">
          <a className="contato-phone" href="tel:+5531982849066">
            (31) 98284-9066
          </a>
          <a className="btn btn-purple" href="mailto:contato@danimorais.com.br">
            Enviar e-mail
          </a>
        </div>

        <div className="contato-social">
          <a href="https://instagram.com/danimoraisoficial" target="_blank" rel="noopener">
            Instagram
          </a>
          <a href="https://www.youtube.com/@DaniMoraisOficial" target="_blank" rel="noopener">
            YouTube
          </a>
          <a href="https://www.danimorais.com.br" target="_blank" rel="noopener">
            danimorais.com.br
          </a>
        </div>
      </div>
    </section>
  );
}
