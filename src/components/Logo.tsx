// "Stamp" mark: RI (Space Grotesk Bold outlines) on a yellow tile with a blue accent.
// On dark backgrounds the stroke and hard shadow switch to cream.
const R_PATH = 'M66 0V700H370Q436 700 485.0 677.0Q534 654 561.0 612.0Q588 570 588 513V501Q588 438 558.0 399.0Q528 360 484 342V324Q524 322 546.0 296.5Q568 271 568 229V0H436V210Q436 234 423.5 249.0Q411 264 382 264H198V0ZM198 384H356Q403 384 429.5 409.5Q456 435 456 477V487Q456 529 430.0 554.5Q404 580 356 580H198Z';
const I_PATH = 'M66 0V700H198V0Z';

const Logo = ({ size = 44, dark = false }: { size?: number; dark?: boolean }) => {
  const ink = dark ? 'var(--cream)' : 'var(--charcoal)';
  return (
    <svg
      role="img"
      aria-label="Ron Isaac logo"
      width={size}
      height={size * 136 / 126}
      viewBox="0 -10 126 136"
      className="shrink-0"
    >
      <rect x="6" y="6" width="120" height="120" fill={ink} />
      <rect x="2" y="2" width="116" height="116" fill="var(--vibrant-yellow)" stroke={ink} strokeWidth="4" />
      <g transform="translate(34.32 81.00) scale(0.06 -0.06)" fill="var(--charcoal)">
        <path d={R_PATH} />
        <path transform="translate(592 0)" d={I_PATH} />
      </g>
      <rect x="100" y="-8" width="22" height="22" fill="var(--electric-blue)" stroke={ink} strokeWidth="4" />
    </svg>
  );
};

export default Logo;
