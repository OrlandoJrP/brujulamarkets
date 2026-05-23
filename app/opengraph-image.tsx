import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#0A2540",
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 30% 40%, #1B3A5C 0%, #0A2540 65%)",
          color: "#FAF7F2",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* Header eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "20px",
            letterSpacing: "5px",
            color: "#D4A574",
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: "40px", height: "1px", background: "#D4A574" }} />
          <span>Mesa de cobertura privada</span>
        </div>

        {/* Main row: text + compass */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "48px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div
              style={{
                fontSize: "72px",
                lineHeight: 1.05,
                fontWeight: 500,
                color: "#FAF7F2",
                letterSpacing: "-1px",
              }}
            >
              Protegemos el{" "}
              <span style={{ color: "#D4A574", fontStyle: "italic" }}>
                margen
              </span>{" "}
              de tu empresa.
            </div>
            <div
              style={{
                marginTop: "32px",
                fontSize: "26px",
                color: "rgba(250,247,242,0.75)",
                fontFamily: "Helvetica, Arial, sans-serif",
              }}
            >
              Hedging de commodities, FX y metales — Barquisimeto, Venezuela.
            </div>
          </div>

          {/* Compass mini */}
          <svg width="280" height="280" viewBox="0 0 500 500">
            <g transform="translate(250, 250)">
              <circle cx="0" cy="0" r="230" fill="none" stroke="#FAF7F2" strokeWidth="2" opacity="0.18" />
              <circle cx="0" cy="0" r="210" fill="none" stroke="#FAF7F2" strokeWidth="1" opacity="0.22" />
              <circle cx="0" cy="0" r="195" fill="#0A2540" />
              <polygon points="0,-108 14,0 0,-5 -14,0" fill="#D4A574" />
              <polygon points="0,108 14,0 0,5 -14,0" fill="#FAF7F2" opacity="0.85" />
              <polygon points="92,0 0,8 5,0 0,-8" fill="#D4A574" opacity="0.7" />
              <polygon points="-92,0 0,8 -5,0 0,-8" fill="#FAF7F2" opacity="0.5" />
              <circle cx="0" cy="0" r="11" fill="#0A2540" stroke="#D4A574" strokeWidth="2.5" />
              <circle cx="0" cy="0" r="4" fill="#D4A574" />
            </g>
          </svg>
        </div>

        {/* Footer: wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(212,165,116,0.25)",
            paddingTop: "32px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: "40px",
                fontWeight: 500,
                color: "#FAF7F2",
                letterSpacing: "1px",
              }}
            >
              Brújula
            </div>
            <div
              style={{
                fontSize: "16px",
                color: "#E5C399",
                letterSpacing: "8px",
                marginTop: "4px",
                fontFamily: "Helvetica, Arial, sans-serif",
              }}
            >
              M A R K E T S
            </div>
          </div>
          <div
            style={{
              fontSize: "18px",
              color: "rgba(250,247,242,0.55)",
              letterSpacing: "3px",
              fontFamily: "Helvetica, Arial, sans-serif",
              textTransform: "uppercase",
            }}
          >
            brujulamarkets.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
