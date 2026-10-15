import { buildDecorativeQr, QR_SIZE } from "@/lib/qrPattern";

const QR_SEED = 20261015;
const qrModules = buildDecorativeQr(QR_SEED);

export function DecorativeQr() {
  return (
    <svg viewBox={`0 0 ${QR_SIZE} ${QR_SIZE}`} shapeRendering="crispEdges" aria-hidden="true" className="block h-auto w-full">
      <g fill="currentColor">
        {qrModules.map(({ x, y }) => (
          <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} />
        ))}
      </g>
    </svg>
  );
}
