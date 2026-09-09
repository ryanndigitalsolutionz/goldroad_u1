import { useSearchParams, useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'

function Login() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const role = searchParams.get('role') || 'client'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    try {
      const response = await fetch(
        'http://127.0.0.1:5000/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Login failed.')
        return
      }

      if (role === 'freelancer') {
        navigate('/freelancer')
      } else {
        navigate('/client')
      }
    } catch (error) {
      setError('Could not connect to the server.')
    }
  }

  const roleName =
    role === 'freelancer'
      ? 'Freelancer'
      : 'Client'

  return (
    <>
      <style>{`
        .login-page {
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 24px;
          box-sizing: border-box;
          background:
            radial-gradient(
              circle at 15% 15%,
              rgba(212, 175, 55, 0.08),
              transparent 28%
            ),
            radial-gradient(
              circle at 85% 85%,
              rgba(23, 148, 154, 0.08),
              transparent 30%
            );
        }

        .login-content {
          width: min(560px, 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .login-logo {
          width: 86px;
          height: 86px;
          margin-bottom: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #d4af37;
          border-radius: 24px;
          background: #fffdf6;
          box-shadow: 0 12px 30px rgba(57, 35, 63, 0.08);
        }

        .login-logo span {
          font-family: 'Basic', sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: #39233f;
        }

        .login-heading {
          margin: 0;
          font-family: 'Basic', sans-serif;
          font-size: clamp(36px, 6vw, 52px);
          line-height: 1.1;
          font-weight: 700;
          color: #39233f;
        }

        .login-description {
          margin: 20px 0 0;
          font-family: 'Quicksand', sans-serif;
          font-size: 17px;
          line-height: 1.8;
          color: #746a77;
        }

        .login-role {
          color: #17949a;
          font-weight: 700;
        }

        .login-form {
          width: min(440px, 100%);
          margin-top: 48px;
          display: flex;
          flex-direction: column;
          gap: 28px;
          text-align: left;
        }

        .login-field {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .login-label {
          font-family: 'Quicksand', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #39233f;
        }

        .login-input {
          width: 100%;
          box-sizing: border-box;
          padding: 16px 18px;
          border: 1px solid rgba(212, 175, 55, 0.35);
          border-radius: 14px;
          background: #fffdf6;
          font-family: 'Quicksand', sans-serif;
          font-size: 16px;
          color: #39233f;
          outline: none;
          transition:
            border-color 160ms ease,
            box-shadow 160ms ease;
        }

        .login-input::placeholder {
          color: #a39aa6;
        }

        .login-input:focus {
          border-color: #17949a;
          box-shadow: 0 0 0 3px rgba(23, 148, 154, 0.12);
        }

        .login-button {
          width: 100%;
          margin-top: 4px;
          padding: 17px 24px;
          border: 1px solid #d4af37;
          border-radius: 14px;
          background: #d4af37;
          color: #39233f;
          font-family: 'Quicksand', sans-serif;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition:
            background-color 160ms ease,
            border-color 160ms ease;
        }

        .login-button:hover {
          background: #c9a42f;
          border-color: #c9a42f;
        }

        .login-button:focus-visible {
          outline: 3px solid rgba(84, 27, 255, 0.2);
          outline-offset: 3px;
        }

        .register-text {
          margin: 36px 0 0;
          font-family: 'Quicksand', sans-serif;
          font-size: 15px;
          line-height: 1.7;
          color: #746a77;
        }

        .register-link {
          color: #541bff;
          font-weight: 700;
          text-decoration: none;
        }

        .register-link:hover {
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .login-note {
          margin-top: 40px;
          font-family: 'Borel', cursive;
          font-size: 15px;
          color: #541bff;
        }

        .login-error {
          margin: -10px 0 0;
          font-family: 'Quicksand', sans-serif;
          font-size: 14px;
          font-weight: 600;
          text-align: center;
          color: #dc2626;
        }

        @media (max-width: 600px) {
          .login-page {
            padding: 40px 20px;
          }

          .login-logo {
            width: 76px;
            height: 76px;
            margin-bottom: 32px;
          }

          .login-description {
            font-size: 16px;
          }

          .login-form {
            margin-top: 40px;
          }
        }
      `}</style>

      <main className="login-page">
        <section className="login-content">

          <div className="login-logo">
            <span>GR</span>
          </div>

          <h1 className="login-heading">
            Welcome Back
          </h1>

          <p className="login-description">
            Sign in to your GoldRoad{' '}
            <span className="login-role">
              {roleName}
            </span>{' '}
            account.
          </p>

          <form
            className="login-form"
            onSubmit={handleSubmit}
          >
            <div className="login-field">
              <label
                className="login-label"
                htmlFor="email"
              >
                Email
              </label>

              <input
                className="login-input"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                required
              />
            </div>

            <div className="login-field">
              <label
                className="login-label"
                htmlFor="password"
              >
                Password
              </label>

              <input
                className="login-input"
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                required
              />
            </div>

            {error && (
              <p className="login-error">
                {error}
              </p>
            )}

            <button
              className="login-button"
              type="submit"
            >
              Sign In
            </button>
          </form>

          <p className="register-text">
            Don't have a GoldRoad account?{' '}
            <Link
              className="register-link"
              to={`/register?role=${role}`}
            >
              Create one
            </Link>
          </p>

          <p className="login-note">
            Your work. Your market. Your GoldRoad.
          </p>

        </section>
      </main>
    </>
  )
}

export default Login
