// Welcome.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Welcome() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const chooseRole = (role) => {
    setLoading(true)

    setTimeout(() => {
      navigate(`/login?role=${role}`)
    }, 700)
  }

  return (
    <>
      <style>{`
        .welcome-page {
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 24px;
          box-sizing: border-box;
          background:
            radial-gradient(
              circle at 15% 20%,
              rgba(247, 245, 240, 0.1),
              transparent 30%
            ),
            radial-gradient(
              circle at 85% 80%,
              rgba(35, 158, 189, 0.1),
              transparent 30%
            );
          color: #2b2033;
        }

        .welcome-content {
          width: min(760px, 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .logo-placeholder {
          width: 92px;
          height: 92px;
          margin-bottom: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #d4af37;
          border-radius: 28px;
          background: rgba(250, 250, 250, 0.75);
          box-shadow:
            0 14px 35px rgba(43, 32, 51, 0.08),
            inset 0 0 0 1px rgba(255, 255, 255, 0.8);
          font-family: 'Basic', sans-serif;
          font-size: 30px;
          font-weight: 700;
          color: #d4af37;
        }

        .welcome-kicker {
          margin: 0 0 20px;
          font-family: 'Quicksand', sans-serif;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #17949a;
        }

        .welcome-title {
          margin: 0;
          max-width: 700px;
          font-family: 'Basic', sans-serif;
          font-size: clamp(42px, 7vw, 72px);
          line-height: 1.05;
          font-weight: 700;
          color: #39233f;
        }

        .welcome-title span {
          color: #d4af37;
        }

        .welcome-description {
          max-width: 610px;
          margin: 28px 0 0;
          font-family: 'Quicksand', sans-serif;
          font-size: 18px;
          line-height: 1.8;
          color: #665b69;
        }

        .role-section {
          width: 100%;
          margin-top: 64px;
        }

        .role-question {
          margin: 0 0 28px;
          font-family: 'Basic', sans-serif;
          font-size: 25px;
          line-height: 1.3;
          color: #39233f;
        }

        .role-buttons {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
          width: 100%;
        }

        .role-button {
          min-height: 170px;
          padding: 32px;
          border: 1px solid rgba(212, 175, 55, 0.35);
          border-radius: 24px;
          background: rgba(255, 253, 246, 0.88);
          cursor: pointer;
          text-align: left;
          transition:
            transform 180ms ease,
            box-shadow 180ms ease,
            border-color 180ms ease;
        }

        .role-button:hover {
          border-color: #d4af37;
          box-shadow: 0 18px 40px rgba(231, 225, 236, 0.1);
        }

        .role-button:focus-visible {
          outline: 3px solid rgba(84, 27, 255, 0.25);
          outline-offset: 4px;
        }

        .role-icon {
          width: 46px;
          height: 46px;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: #f3e7c4;
          color: #39233f;
          font-family: 'Basic', sans-serif;
          font-size: 18px;
          font-weight: 700;
        }

        .role-button.freelancer .role-icon {
          background: #d9eeee;
          color: #147d83;
        }

        .role-title {
          margin: 0 0 12px;
          font-family: 'Basic', sans-serif;
          font-size: 22px;
          color: #39233f;
        }

        .role-description {
          margin: 0;
          font-family: 'Quicksand', sans-serif;
          font-size: 15px;
          line-height: 1.7;
          color: #746a77;
        }

        .welcome-note {
          margin-top: 48px;
          font-family: 'Borel', cursive;
          font-size: 16px;
          color: #541bff;
        }

        .welcome-loading {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 24px;
          background: #fffdf6;
          color: #39233f;
        }

        .loading-mark {
          width: 54px;
          height: 54px;
          border: 4px solid #eadfbd;
          border-top-color: #d4af37;
          border-right-color: #17949a;
          border-radius: 50%;
          animation: welcome-spin 0.8s linear infinite;
        }

        .loading-text {
          margin: 0;
          font-family: 'Quicksand', sans-serif;
          font-size: 16px;
          font-weight: 600;
        }

        @keyframes welcome-spin {
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 650px) {
          .welcome-page {
            padding: 40px 20px;
          }

          .logo-placeholder {
            width: 78px;
            height: 78px;
            margin-bottom: 32px;
          }

          .welcome-description {
            font-size: 16px;
          }

          .role-section {
            margin-top: 48px;
          }

          .role-buttons {
            grid-template-columns: 1fr;
          }

          .role-button {
            min-height: auto;
          }
        }
      `}</style>

      {loading ? (
        <main className="welcome-loading">
          <div className="loading-mark" />
          <p className="loading-text">
            Preparing your GoldRoad experience...
          </p>
        </main>
      ) : (
        <main className="welcome-page">
          <section className="welcome-content">
            <div className="logo-placeholder">
              GR
            </div>

            <p className="welcome-kicker">
              GoldRoad U1
            </p>

            <h1 className="welcome-title">
              The quality platform
              <br />
              worth <span>investing in.</span>
            </h1>

            <p className="welcome-description">
              A marketplace for people who build, sell, hire,
              discover and invest in quality work and services.
            </p>

            <section className="role-section">
              <h2 className="role-question">
                What will you use GoldRoad for?
              </h2>

              <div className="role-buttons">
                <button
                  className="role-button"
                  type="button"
                  onClick={() => chooseRole('client')}
                >
                  <div className="role-icon">
                    C
                  </div>

                  <h3 className="role-title">
                    I&apos;m a Client
                  </h3>

                  <p className="role-description">
                    Find people, services and solutions
                    for the work you need done.
                  </p>
                </button>

                <button
                  className="role-button freelancer"
                  type="button"
                  onClick={() => chooseRole('freelancer')}
                >
                  <div className="role-icon">
                    F
                  </div>

                  <h3 className="role-title">
                    I&apos;m a Freelancer
                  </h3>

                  <p className="role-description">
                    Showcase your skills, discover projects
                    and offer your services to clients.
                  </p>
                </button>
              </div>
            </section>

            <p className="welcome-note">
              Click. Choose. Decide. Build.
            </p>
          </section>
        </main>
      )}
    </>
  )
}

export default Welcome
