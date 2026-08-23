function Input({
  label,
  id,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  required = false,
  disabled = false,
}) {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="
            font-quicksand
            text-sm font-semibold
            text-purple
          "
        >
          {label}
        </label>
      )}

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className="
          mt-3
          w-full
          rounded-xl
          border border-gold/30
          bg-white
          px-5 py-4
          font-quicksand
          text-ink
          outline-none
          transition
          placeholder:text-muted
          focus:border-purple
          focus:ring-2
          focus:ring-purple/20
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      />
    </div>
  )
}

export default Input
