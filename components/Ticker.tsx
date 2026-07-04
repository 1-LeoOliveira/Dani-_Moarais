const TICKER_TEXT =
  "SERTANEJO ✦ FUNK ✦ AXÉ ✦ PAGODE ✦ UM SHOW PARA TODOS ✦ SERTANEJO ✦ FUNK ✦ AXÉ ✦ PAGODE ✦ UM SHOW PARA TODOS ✦";

export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        <span>{TICKER_TEXT}</span>
        <span>{TICKER_TEXT}</span>
      </div>
    </div>
  );
}
