import { cn } from "@/lib/utils";

type Variant = "dark" | "light";

interface CompassMarkProps {
  variant?: Variant;
  className?: string;
  title?: string;
  ariaHidden?: boolean;
}

/**
 * Brújula minimalista circular. `dark` = círculo navy para fondos claros.
 * `light` = círculo crema con borde oro para fondos navy.
 */
export function CompassMark({
  variant = "dark",
  className,
  title = "Brújula Markets",
  ariaHidden = false,
}: CompassMarkProps) {
  const isDark = variant === "dark";

  const ring = isDark ? "#0A2540" : "#FAF7F2";
  const ringOpacity1 = isDark ? 0.2 : 0.25;
  const ringOpacity2 = isDark ? 0.25 : 0.3;
  const face = isDark ? "#0A2540" : "#FAF7F2";
  const faceStroke = isDark ? "none" : "#D4A574";
  const faceStrokeWidth = isDark ? 0 : 2;
  const tick = isDark ? "#D4A574" : "#0A2540";
  const tickOpacity = isDark ? 0.5 : 0.4;
  const letterN = isDark ? "#D4A574" : "#0A2540";
  const letterOthers = isDark ? "#FAF7F2" : "#0A2540";
  const letterOthersOpacity = isDark ? 0.6 : 0.5;
  const needleUp = isDark ? "#D4A574" : "#0A2540";
  const needleDown = isDark ? "#FAF7F2" : "#D4A574";
  const needleDownOpacity = isDark ? 0.85 : 1;
  const needleEast = isDark ? "#D4A574" : "#0A2540";
  const needleEastOpacity = isDark ? 0.7 : 0.6;
  const needleWest = isDark ? "#FAF7F2" : "#D4A574";
  const needleWestOpacity = isDark ? 0.5 : 0.7;
  const hubFill = isDark ? "#0A2540" : "#FAF7F2";
  const hubStroke = isDark ? "#D4A574" : "#0A2540";
  const hubDot = isDark ? "#D4A574" : "#0A2540";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      className={cn("h-auto w-auto", className)}
      role={ariaHidden ? "presentation" : "img"}
      aria-hidden={ariaHidden}
      aria-label={ariaHidden ? undefined : title}
    >
      {!ariaHidden && <title>{title}</title>}
      <g transform="translate(250, 250)">
        {/* Anillos exteriores */}
        <circle
          cx="0"
          cy="0"
          r="230"
          fill="none"
          stroke={ring}
          strokeWidth="2"
          opacity={ringOpacity1}
        />
        <circle
          cx="0"
          cy="0"
          r="210"
          fill="none"
          stroke={ring}
          strokeWidth="1"
          opacity={ringOpacity2}
        />
        {/* Cara */}
        <circle
          cx="0"
          cy="0"
          r="195"
          fill={face}
          stroke={faceStroke}
          strokeWidth={faceStrokeWidth}
        />
        {/* Marcas cardinales */}
        <g stroke={tick} strokeWidth="2" opacity={tickOpacity}>
          <line x1="0" y1="-175" x2="0" y2="-160" />
          <line x1="0" y1="175" x2="0" y2="160" />
          <line x1="-175" y1="0" x2="-160" y2="0" />
          <line x1="175" y1="0" x2="160" y2="0" />
          <line x1="-124" y1="-124" x2="-112" y2="-112" />
          <line x1="124" y1="-124" x2="112" y2="-112" />
          <line x1="-124" y1="124" x2="-112" y2="112" />
          <line x1="124" y1="124" x2="112" y2="112" />
        </g>
        {/* Letras */}
        <text
          x="0"
          y="-130"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontSize="22"
          fontWeight="500"
          fill={letterN}
          letterSpacing="3"
        >
          N
        </text>
        <text
          x="130"
          y="8"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontSize="22"
          fontWeight="500"
          fill={letterOthers}
          letterSpacing="3"
          opacity={letterOthersOpacity}
        >
          E
        </text>
        <text
          x="0"
          y="146"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontSize="22"
          fontWeight="500"
          fill={letterOthers}
          letterSpacing="3"
          opacity={letterOthersOpacity}
        >
          S
        </text>
        <text
          x="-130"
          y="8"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontSize="22"
          fontWeight="500"
          fill={letterOthers}
          letterSpacing="3"
          opacity={letterOthersOpacity}
        >
          O
        </text>
        {/* Rosa de los vientos */}
        <polygon points="0,-108 14,0 0,-5 -14,0" fill={needleUp} />
        <polygon
          points="0,108 14,0 0,5 -14,0"
          fill={needleDown}
          opacity={needleDownOpacity}
        />
        <polygon
          points="92,0 0,8 5,0 0,-8"
          fill={needleEast}
          opacity={needleEastOpacity}
        />
        <polygon
          points="-92,0 0,8 -5,0 0,-8"
          fill={needleWest}
          opacity={needleWestOpacity}
        />
        {/* Centro */}
        <circle
          cx="0"
          cy="0"
          r="11"
          fill={hubFill}
          stroke={hubStroke}
          strokeWidth="2.5"
        />
        <circle cx="0" cy="0" r="4" fill={hubDot} />
      </g>
    </svg>
  );
}
