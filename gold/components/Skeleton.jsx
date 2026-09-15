export default function Skeleton({
  variant = 'text',
  className = '',
}) {
  return (
    <span
      aria-hidden="true"
      className={`goldroad-skeleton goldroad-skeleton-${variant} ${className}`}
    />
  )
}
