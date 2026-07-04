export default function PaperTear({
  flip = false,
  pathFlip = false,
  fill = "#FFF9FB",
}: {
  flip?: boolean;
  pathFlip?: boolean;
  fill?: string;
}) {
  return (
    <svg
      className={`tear${flip ? " flip" : ""}`}
      viewBox="0 0 1440 70"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0,70 L0,34 L48,42 L96,26 L150,44 L210,22 L268,40 L330,18 L390,38 L450,24 L520,46 L580,20 L640,42 L710,26 L770,44 L830,18 L900,40 L960,24 L1030,46 L1090,22 L1150,42 L1220,26 L1280,44 L1340,20 L1400,38 L1440,28 L1440,70 Z"
        fill={fill}
        transform={pathFlip ? "scale(1,-1) translate(0,-70)" : undefined}
      />
    </svg>
  );
}
