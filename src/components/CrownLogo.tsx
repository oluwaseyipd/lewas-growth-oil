interface CrownLogoProps {
  color?: string
  size?: number
  withWordmark?: boolean
  wordmarkColor?: string
}

export default function CrownLogo({
  color = '#EF00C2',
  size = 40,
  withWordmark = true,
  wordmarkColor,
}: CrownLogoProps) {
  const textColor = wordmarkColor ?? color

  return (
    <div className="flex items-center gap-3">
      {/* Crown + oil drop SVG mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Oil drop / hair flow silhouette */}
        <path
          d="M24 56C24 56 8 42 8 28C8 19.163 15.163 12 24 12C32.837 12 40 19.163 40 28C40 42 24 56 24 56Z"
          fill={color}
          opacity="0.18"
        />
        {/* Crown */}
        <path
          d="M10 22L16 10L24 17L32 10L38 22H10Z"
          fill={color}
        />
        {/* Crown base band */}
        <rect x="10" y="22" width="28" height="5" rx="1" fill={color} />
        {/* Jewel dots */}
        <circle cx="18" cy="15" r="1.5" fill={color} opacity="0.6" />
        <circle cx="24" cy="12" r="1.5" fill={color} opacity="0.6" />
        <circle cx="30" cy="15" r="1.5" fill={color} opacity="0.6" />
        {/* Halo arc beneath */}
        <path
          d="M10 30 Q24 38 38 30"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
      </svg>

      {withWordmark && (
        <div style={{ color: textColor }}>
          <div
            className="font-display font-semibold leading-none"
            style={{ fontSize: size * 0.38, letterSpacing: '0.04em' }}
          >
            LEWA&apos;S
          </div>
          <div
            className="font-body font-light leading-none tracking-widest uppercase"
            style={{ fontSize: size * 0.2, marginTop: 2, letterSpacing: '0.16em' }}
          >
            Growth Oil
          </div>
        </div>
      )}
    </div>
  )
}
