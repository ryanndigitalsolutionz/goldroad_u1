import { useEffect } from 'react'
import { useNavigate } from '@tanstack/react-router'
import LottieAnimation from '../../components/LottieAnimation'

export default function Welcome() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = window.setTimeout(() => {
      navigate({
        to: '/role-selection',
      })
    }, 8220)

    return () => {
      window.clearTimeout(timer)
    }
  }, [navigate])

  return (
    <main className="welcome-screen">
      <style>
        {`
          .welcome-screen {
            position: relative;
            display: flex;
            width: 100%;
            min-height: 100vh;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            background: var(--color-purple-deep);
          }

          .welcome-animation-frame {
            position: absolute;
            top: 21%;
            left: 50%;
            display: flex;
            width: min(620px, 78vw);
            aspect-ratio: 428 / 123;
            align-items: center;
            justify-content: center;
            transform: translateX(-50%);
          }

          .welcome-animation-frame > div {
            width: 100%;
            height: 100%;
          }

          .welcome-animation-frame canvas {
            display: block;
            width: 100% !important;
            height: 100% !important;
          }

          .welcome-message {
            position: absolute;
            bottom: 13%;
            left: 50%;
            width: min(90%, 760px);
            margin: 0;
            color: #38de96;
            font-family: var(--font-quicksand);
            font-size: clamp(22px, 3vw, 34px);
            font-weight: 600;
            line-height: 1.3;
            text-align: center;
            transform: translateX(-50%);
          }

          @media (max-width: 900px) {
            .welcome-animation-frame {
              top: 25%;
              width: min(560px, 86vw);
            }
          }

          @media (max-width: 640px) {
            .welcome-animation-frame {
              top: 29%;
              width: min(500px, 88vw);
            }

            .welcome-message {
              bottom: 12%;
              font-size: 22px;
            }
          }
        `}
      </style>

      <div className="welcome-animation-frame">
        <LottieAnimation
          src="/assets/Welcome.json"
          autoplay
          loop={false}
        />
      </div>

      <p className="welcome-message">
        Welcome to GoldRoad U1!
      </p>
    </main>
  )
}
