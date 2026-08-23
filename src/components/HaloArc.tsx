interface HaloArcProps {
  color?: string
  className?: string
}

export default function HaloArc({ color = '#EFD3C5', className = '' }: HaloArcProps) {
  return (
    <div className={`flex justify-center ${className}`}>
      <svg width="180" height="18" viewBox="0 0 180 18" fill="none" aria-hidden="true">
        <path
          d="M10 14 Q90 2 170 14"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  )
}
