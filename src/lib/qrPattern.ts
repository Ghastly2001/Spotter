export type QrModule = Readonly<{ x: number; y: number }>;

export const QR_SIZE = 25;
const FINDER_SIZE = 7;
const FINDER_CENTER_OFFSET = 3;
const PARK_MILLER_MULTIPLIER = 16807;
const PARK_MILLER_MODULUS = 2147483647;
const DARK_THRESHOLD = 0.5;

const finderOrigins: ReadonlyArray<QrModule> = [
  { x: 0, y: 0 },
  { x: QR_SIZE - FINDER_SIZE, y: 0 },
  { x: 0, y: QR_SIZE - FINDER_SIZE },
];

/** null when the module is outside every finder square (including its quiet border). */
function finderModuleIsDark(x: number, y: number): boolean | null {
  for (const origin of finderOrigins) {
    const insideWithBorder =
      x >= origin.x - 1 && y >= origin.y - 1 && x <= origin.x + FINDER_SIZE && y <= origin.y + FINDER_SIZE;
    if (!insideWithBorder) continue;
    const ring = Math.max(Math.abs(x - (origin.x + FINDER_CENTER_OFFSET)), Math.abs(y - (origin.y + FINDER_CENTER_OFFSET)));
    return ring === FINDER_CENTER_OFFSET || ring <= 1;
  }
  return null;
}

/** A decorative, deterministic QR-looking pattern. It does not encode anything. */
export function buildDecorativeQr(seed: number): ReadonlyArray<QrModule> {
  let state = seed;
  const nextRandom = () => {
    state = (state * PARK_MILLER_MULTIPLIER) % PARK_MILLER_MODULUS;
    return state / PARK_MILLER_MODULUS;
  };

  const darkModules: QrModule[] = [];
  for (let y = 0; y < QR_SIZE; y++) {
    for (let x = 0; x < QR_SIZE; x++) {
      const isDark = finderModuleIsDark(x, y) ?? nextRandom() > DARK_THRESHOLD;
      if (isDark) darkModules.push({ x, y });
    }
  }
  return darkModules;
}
