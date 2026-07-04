import Reveal from "./Reveal";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function Contact() {
  return (
    <section className="contact" id="contato">
      <div className="wrap">
        <span className="eyebrow">Contratação</span>
        <Reveal as="h2">
          Leve esse show <em>para o seu evento</em>
        </Reveal>
        <Reveal as="p" className="sub">
          Festas, carnavais, eventos corporativos e festivais. Fale com a equipe
          e monte o show ideal para o seu público.
        </Reveal>
        <Reveal as="a" className="btn btn-pink" href={WHATSAPP_LINK} target="_blank" rel="noopener">
          💬 Chamar no WhatsApp — (31) 98284-9066
        </Reveal>
        <Reveal as="div" className="contact-cards">
          <a href="mailto:contato@danimorais.com.br">
            <small>E-mail</small>
            contato@danimorais.com.br
          </a>
          <a href="https://instagram.com/danimoraisoficial" target="_blank" rel="noopener">
            <small>Instagram</small>@danimoraisoficial
          </a>
          <a href="https://www.danimorais.com.br" target="_blank" rel="noopener">
            <small>Site</small>
            danimorais.com.br
          </a>
        </Reveal>
      </div>
    </section>
  );
}
