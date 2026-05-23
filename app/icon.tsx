import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";
export const runtime = "edge";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A2540",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          viewBox="0 0 500 500"
        >
          <g transform="translate(250, 250)">
            <circle cx="0" cy="0" r="220" fill="#0A2540" />
            <polygon points="0,-120 18,0 0,-6 -18,0" fill="#D4A574" />
            <polygon points="0,120 18,0 0,6 -18,0" fill="#FAF7F2" />
            <polygon points="100,0 0,10 5,0 0,-10" fill="#D4A574" opacity="0.7" />
            <polygon points="-100,0 0,10 -5,0 0,-10" fill="#FAF7F2" opacity="0.5" />
            <circle
              cx="0"
              cy="0"
              r="14"
              fill="#0A2540"
              stroke="#D4A574"
              strokeWidth="3"
            />
            <circle cx="0" cy="0" r="5" fill="#D4A574" />
          </g>
        </svg>
      </div>
    ),
    { ...size },
  );
}
