function Skeleton({
  className = '',
}) {
  return (
    <div
      className={`
        animate-pulse
        rounded-xl
        bg-purple/10
        ${className}
      `}
    />
  )
}

export default Skeleton
