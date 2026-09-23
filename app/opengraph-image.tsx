import { ImageResponse } from "next/og";
import { profile } from "@/data/site";

export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Generated once at build time and served as the Open Graph / X preview image.
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
          padding: "72px 80px",
          background: "radial-gradient(ellipse 70% 60% at 50% 0%, #10244d 0%, #05080f 70%)",
          color: "#e6ebf3",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            borderRadius: 16,
            border: "2px solid #2a3549",
            background: "#0f1624",
            color: "#6ea5ff",
            fontSize: 30,
            fontWeight: 700,
          }}
        >
          {profile.initials}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ marginTop: 8, fontSize: 40, color: "#6ea5ff" }}>{profile.title}</div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#9ba6b8", maxWidth: 900, lineHeight: 1.35 }}>
            {profile.headline}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
