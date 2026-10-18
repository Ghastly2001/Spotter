import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/* Images can't read CSS variables, so these mirror --navy, --marker and --ink in globals.css. */
const NAVY = "#0F1A33";
const MARKER = "#2EF2BA";
const INK = "#111A30";

/** Home-screen icon: the plate mark on the navy brand surface. iOS rounds the corners itself. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: NAVY }}>
        <div
          style={{
            width: 112,
            height: 112,
            borderRadius: "50%",
            background: MARKER,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: INK }} />
        </div>
      </div>
    ),
    size,
  );
}
