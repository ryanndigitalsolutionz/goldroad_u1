import { useState } from 'react'
import { useSearchParams, useNavigate, Link } from 'react-router-dom'

function Register() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const role = searchParams.get('role') || 'client'

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const roleName =
    role === 'freelancer'
      ? 'Freelancer'
      : 'Client'

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    const nameParts = name.trim().split(/\s+/)

    const firstName = nameParts[0]
    const lastName = nameParts.slice(1).join(' ')

    if (!lastName) {
      setError('Please enter your full name.')
      return
    }

    try {
      const response = await fetch(
        'http://127.0.0.1:5000/auth/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            role: role,
            email: email,
            password: password,
            confirm_password: confirmPassword,
          }),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        if (data.errors) {
          const firstError = Object.values(data.errors)[0]

          setError(
            Array.isArray(firstError)
              ? firstError[0]
              : 'Registration failed.'
          )
        } else {
          setError(data.error || 'Registration failed.')
        }

        return
      }

      navigate(`/login?role=${role}`)
    } catch (error) {
      setError('Could not connect to the server.')
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-champagne px-6 py-12">
      <section className="w-full max-w-xl text-center">

        {/* Temporary GoldRoad logo placeholder */}
        <div className="flex justify-center mb-12">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-gold">
            <span className="font-basic text-2xl font-bold text-purple">
              GR
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="space-y-4 mb-12">
          <h1 className="font-basic text-4xl font-bold text-purple">
            Create Your Account
          </h1>

          <p className="font-quicksand text-lg leading-8 text-muted">
            Join GoldRoad as a {roleName}.
          </p>
        </div>

        {/* Registration form */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto w-full max-w-md space-y-6 text-left"
        >
          {/* Name */}
          <div className="space-y-3">
            <label
              htmlFor="name"
              className="font-quicksand font-semibold text-ink"
            >
              Full Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              className="
                w-full rounded-xl border border-gold/30
                bg-white px-5 py-4
                font-quicksand
                text-ink
                outline-none
                transition
                focus:border-purple
                focus:ring-2
                focus:ring-purple/20
              "
            />
          </div>

          {/* Email */}
          <div className="space-y-3">
            <label
              htmlFor="email"
              className="font-quicksand font-semibold text-ink"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="
                w-full rounded-xl border border-gold/30
                bg-white px-5 py-4
                font-quicksand
                text-ink
                outline-none
                transition
                focus:border-purple
                focus:ring-2
                focus:ring-purple/20
              "
            />
          </div>

          {/* Password */}
          <div className="space-y-3">
            <label
              htmlFor="password"
              className="font-quicksand font-semibold text-ink"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className="
                w-full rounded-xl border border-gold/30
                bg-white px-5 py-4
                font-quicksand
                text-ink
                outline-none
                transition
                focus:border-purple
                focus:ring-2
                focus:ring-purple/20
              "
            />
          </div>

          {/* Confirm password */}
          <div className="space-y-3">
            <label
              htmlFor="confirm-password"
              className="font-quicksand font-semibold text-ink"
            >
              Confirm Password
            </label>

            <input
              id="confirm-password"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(event) =>
                setConfirmPassword(event.target.value)
              }
              required
              className="
                w-full rounded-xl border border-gold/30
                bg-white px-5 py-4
                font-quicksand
                text-ink
                outline-none
                transition
                focus:border-purple
                focus:ring-2
                focus:ring-purple/20
              "
            />
          </div>

          {/* Error */}
          {error && (
            <p className="font-quicksand text-center text-red-600">
              {error}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="
              w-full rounded-xl
              bg-gold px-6 py-4
              font-quicksand font-bold
              text-purple
              transition
              hover:shadow-md
            "
          >
            Create Account
          </button>
        </form>

        {/* Login link */}
        <p className="mt-10 font-quicksand text-base text-muted">
          Already have an account?{' '}
          <Link
            to={`/login?role=${role}`}
            className="font-semibold text-purple underline-offset-4 hover:underline"
          >
            Sign in
          </Link>
        </p>

      </section>
    </main>
  )
}

export default Register
