function Button({
  children,
  type = 'button',
  variant = 'primary',
  onClick,
  disabled = false,
  className = '',
}) {
  const variants = {
    primary: `
      bg-gold
      text-purple
      hover:-translate-y-1
      hover:shadow-lg
    `,
    secondary: `
      border border-purple/20
      bg-white
      text-purple
      hover:bg-purple/5
    `,
    dark: `
      bg-purple
      text-white
      hover:-translate-y-1
      hover:shadow-lg
    `,
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        rounded-xl
        px-6 py-4
        font-quicksand
        font-bold
        transition
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  )
}

export default Button
