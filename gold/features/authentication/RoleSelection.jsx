import { useEffect, useState } from 'react'
import {
  FiArrowRight,
  FiBriefcase,
  FiChevronDown,
  FiCode,
  FiExternalLink,
  FiMoon,
  FiSun,
  FiUser,
} from 'react-icons/fi'
import { useTheme } from '../../context/ThemeContext'
import Skeleton from '../../components/Skeleton'

const roles = [
  {
    id: 'client',
    title: 'Client',
    description:
      'Find professionals, commission work, and get your projects moving.',
    icon: FiUser,
  },
  {
    id: 'freelancer',
    title: 'Freelancer',
    description:
      'Offer your skills, discover jobs, and build your professional work.',
    icon: FiCode,
  },
  {
    id: 'business',
    title: 'Business',
    description:
      'Offer services, hire professionals, and grow your business presence.',
    icon: FiBriefcase,
  },
]

const menus = {
  'Choose a role': {
    className: 'menu-role',
    label: 'CHOOSE YOUR PATH',
    items: [
      {
        title: 'Client',
        description: 'Commission work and find professionals.',
      },
      {
        title: 'Freelancer',
        description: 'Find work and offer professional services.',
      },
      {
        title: 'Business',
        description: 'Work across both sides of the ecosystem.',
      },
    ],
  },
  Explore: {
    className: 'menu-explore',
    label: 'DISCOVER GOLDROAD',
    items: [
      {
        title: 'Marketplace',
        description: 'Browse available professional offers.',
      },
      {
        title: 'Jobs',
        description: 'Discover projects and opportunities.',
      },
      {
        title: 'WorkStores',
        description: 'Explore service catalogues from providers.',
      },
      {
        title: 'Advertising',
        description: 'Discover the GoldRoad advertising ecosystem.',
      },
    ],
  },
  'How it works': {
    className: 'menu-how',
    label: 'THE GOLDROAD JOURNEY',
    items: [
      {
        title: 'Find your place',
        description: 'Choose the role that fits how you use GoldRoad.',
      },
      {
        title: 'Connect',
        description: 'Find people, projects, services, and opportunities.',
      },
      {
        title: 'Work',
        description: 'Use projects, proposals, contracts, and collaboration.',
      },
      {
        title: 'Grow',
        description: 'Build trust, reputation, and professional presence.',
      },
    ],
  },
  Support: {
    className: 'menu-support',
    label: 'WE ARE HERE TO HELP',
    items: [
      {
        title: 'Help Center',
        description: 'Find answers about using GoldRoad U1.',
      },
      {
        title: 'Trust & Safety',
        description: 'Learn about verification and platform safety.',
      },
      {
        title: 'Payments',
        description: 'Get help with payments and Pin-points.',
      },
      {
        title: 'Contact Support',
        description: 'Reach the GoldRoad support team.',
      },
    ],
  },
}

export default function RoleSelection() {
  const { isDark, toggleTheme } = useTheme()
  const [selectedRole, setSelectedRole] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [activeMenu, setActiveMenu] = useState(null)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false)
    }, 4600)

    return () => {
      window.clearTimeout(timer)
    }
  }, [])

  return (
    <main className="role-selection-page">
      <style>
        {`
          .role-selection-page {
            --role-page-bg: #160d21;
            --role-surface: rgba(23, 19, 26, 0.78);
            --role-surface-solid: #17131a;
            --role-text: #f7f4f1;
            --role-muted: #9e98a2;
            --role-border: rgba(72, 33, 235, 0.2);
            --role-border-strong: rgba(72, 33, 235, 0.58);
            --role-orb: rgba(56, 222, 150, 0.13);
            --role-purple: #4821eb;
            --role-teal: #38de96;
            --role-gold: #e8ad2d;

            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
            background:
              radial-gradient(
                circle at 74% 2%,
                var(--role-orb),
                transparent 31%
              ),
              radial-gradient(
                circle at 9% 100%,
                rgba(72, 33, 235, 0.12),
                transparent 34%
              ),
              var(--role-page-bg);
            color: var(--role-text);
            transition:
              background-color 900ms ease,
              color 900ms ease;
          }

          :root[data-theme="light"] .role-selection-page {
            --role-page-bg: #fffdf8;
            --role-surface: rgba(255, 255, 255, 0.84);
            --role-surface-solid: #ffffff;
            --role-text: #17131a;
            --role-muted: #6f6875;
            --role-border: rgba(212, 175, 55, 0.24);
            --role-border-strong: rgba(212, 175, 55, 0.62);
            --role-orb: rgba(232, 173, 45, 0.17);
            --role-purple: #4821eb;
            --role-teal: #159a9c;
            --role-gold: #d4af37;
          }

          .role-selection-page {
            transition:
              background-color 900ms ease,
              color 900ms ease;
          }

          .role-selection-page a,
          .role-selection-page button,
          .role-selection-page .role-selection-card {
            transition:
              background-color 700ms ease,
              border-color 700ms ease,
              color 700ms ease,
              box-shadow 700ms ease,
              opacity 700ms ease,
              transform 220ms ease;
          }

          .role-selection-orb {
            position: absolute;
            top: -280px;
            right: 7%;
            width: 620px;
            height: 620px;
            border-radius: 50%;
            background: var(--role-orb);
            filter: blur(120px);
            pointer-events: none;
          }

          .role-selection-header {
            position: sticky;
            top: 0;
            z-index: 50;
            display: flex;
            width: 100%;
            min-height: 76px;
            align-items: center;
            gap: 42px;
            border-bottom: 1px solid var(--role-border);
            padding: 0 48px;
            background: var(--role-surface-solid);
            backdrop-filter: blur(20px);
          }

          .role-selection-brand {
            display: inline-flex;
            flex-shrink: 0;
            align-items: baseline;
            gap: 5px;
            color: var(--role-purple);
            font-family: "Pixelify Sans", sans-serif;
            font-size: 25px;
            font-weight: 600;
            letter-spacing: -0.03em;
            text-decoration: none;
          }

          .role-selection-brand strong {
            color: var(--role-teal);
            font-family: "Pixelify Sans", sans-serif;
            font-size: 15px;
            font-weight: 600;
          }

          .role-selection-nav {
            display: flex;
            min-width: 0;
            flex: 1;
            align-items: center;
            gap: clamp(22px, 3vw, 44px);
          }

          .role-selection-nav-item-wrapper {
            position: relative;
            height: 76px;
          }

          .role-selection-nav-item {
            display: inline-flex;
            height: 100%;
            align-items: center;
            gap: 6px;
            border: 0;
            padding: 0;
            background: transparent;
            color: var(--role-text);
            font-family: "Quicksand", sans-serif;
            font-size: 14px;
            font-weight: 650;
            white-space: nowrap;
          }

          .role-selection-nav-item:hover {
            color: var(--role-purple);
          }

          .role-selection-nav-item svg {
            width: 14px;
            height: 14px;
          }

          .role-selection-menu {
            position: absolute;
            top: 76px;
            left: 0;
            z-index: 60;
            max-height: calc(100vh - 94px);
            overflow-y: auto;
            border: 1px solid var(--role-border);
            border-radius: 0 0 20px 20px;
            background: var(--role-surface-solid);
            box-shadow: 0 26px 70px rgba(0, 0, 0, 0.22);
            opacity: 0;
            pointer-events: none;
            transform: translateY(-10px);
            transition:
              opacity 180ms ease,
              transform 180ms ease;
          }

          .role-selection-menu-open {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0);
          }

          .menu-role {
            width: 360px;
          }

          .menu-explore {
            width: 500px;
          }

          .menu-how {
            width: 450px;
            left: -90px;
          }

          .menu-support {
            width: 400px;
            left: auto;
            right: 0;
          }

          .role-selection-menu-label {
            padding: 24px 24px 0;
            color: var(--role-purple);
            font-family: "Quicksand", sans-serif;
            font-size: 10px;
            font-weight: 800;
            letter-spacing: 0.17em;
          }

          .role-selection-menu-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 7px;
            padding: 14px 14px 16px;
          }

          .role-selection-menu-item {
            display: flex;
            min-width: 0;
            flex-direction: column;
            gap: 6px;
            border: 1px solid transparent;
            border-radius: 14px;
            padding: 15px;
            background: transparent;
            text-align: left;
          }

          .role-selection-menu-item:hover {
            border-color: var(--role-border);
            background: rgba(72, 33, 235, 0.055);
          }

          .role-selection-menu-item strong {
            color: var(--role-text);
            font-family: "Special Gothic Expanded One", sans-serif;
            font-size: 13px;
            font-weight: 400;
            line-height: 1.2;
          }

          .role-selection-menu-item span {
            color: var(--role-muted);
            font-family: "Quicksand", sans-serif;
            font-size: 11px;
            line-height: 1.5;
          }

          .role-selection-menu-footer {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            margin: 0 24px 22px;
            color: var(--role-purple);
            font-family: "Borel", cursive;
            font-size: 16px;
          }

          .role-selection-actions {
            display: flex;
            flex-shrink: 0;
            align-items: center;
            gap: 18px;
          }

          .role-selection-theme {
            display: grid;
            width: 42px;
            height: 42px;
            place-items: center;
            border: 1px solid var(--role-border);
            border-radius: 50%;
            background: transparent;
            color: var(--role-text);
          }

          .role-selection-theme:hover {
            transform: rotate(10deg) scale(1.04);
            border-color: var(--role-purple);
          }

          .role-selection-theme svg {
            width: 18px;
            height: 18px;
          }

          .role-selection-login {
            border: 0;
            padding: 8px 0;
            background: transparent;
            color: var(--role-text);
            font-family: "Quicksand", sans-serif;
            font-size: 14px;
            font-weight: 700;
          }

          .role-selection-login:hover {
            color: var(--role-purple);
          }

          .role-selection-main {
            position: relative;
            z-index: 1;
            width: min(1280px, 100%);
            margin: 0 auto;
          }

          .role-selection-loading {
            min-height: calc(100vh - 76px);
            padding: 110px 48px;
          }

          .role-selection-loading-heading {
            max-width: 920px;
          }

          .role-selection-loading-roles {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 18px;
            margin-top: 46px;
          }

          .role-selection-loading-button {
            display: flex;
            justify-content: flex-end;
            margin-top: 24px;
          }

          .goldroad-skeleton {
            position: relative;
            display: block;
            overflow: hidden;
            background: var(--role-border);
          }

          .goldroad-skeleton::after {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.18),
              transparent
            );
            content: "";
            animation: role-skeleton-shimmer 1.5s ease-in-out infinite;
            transform: translateX(-100%);
          }

          .goldroad-skeleton-eyebrow {
            width: 100px;
            height: 12px;
            border-radius: 999px;
          }

          .goldroad-skeleton-title {
            width: min(850px, 72vw);
            height: 78px;
            margin-top: 22px;
            border-radius: 18px;
          }

          .goldroad-skeleton-title-short {
            width: min(420px, 40vw);
            height: 78px;
            margin-top: 11px;
            border-radius: 18px;
          }

          .goldroad-skeleton-paragraph {
            width: min(680px, 62vw);
            height: 18px;
            margin-top: 30px;
            border-radius: 999px;
          }

          .goldroad-skeleton-paragraph-short {
            width: min(450px, 42vw);
            height: 18px;
            margin-top: 10px;
            border-radius: 999px;
          }

          .goldroad-skeleton-card {
            width: 100%;
            min-height: 250px;
            border-radius: 24px;
          }

          .goldroad-skeleton-button {
            width: 160px;
            height: 50px;
            border-radius: 14px;
          }

          .goldroad-skeleton-logo {
            width: 140px;
            height: 28px;
            border-radius: 8px;
          }

          .goldroad-skeleton-nav {
            width: 82px;
            height: 15px;
            border-radius: 999px;
          }

          .role-selection-content {
            padding: 0 48px 80px;
          }

          .role-selection-hero {
            display: flex;
            min-height: 560px;
            flex-direction: column;
            justify-content: center;
            padding: 100px 0 90px;
          }

          .role-selection-eyebrow {
            display: inline-block;
            color: var(--role-purple);
            font-family: "Borel", cursive;
            font-size: 20px;
            line-height: 1;
          }

          .role-selection-hero h1 {
            max-width: 1030px;
            margin: 22px 0 0;
            color: var(--role-text);
            font-family: "Special Gothic Expanded One", sans-serif;
            font-size: clamp(48px, 7vw, 92px);
            font-weight: 400;
            line-height: 0.97;
            letter-spacing: -0.045em;
          }

          .role-selection-hero h1 span {
            color: var(--role-purple);
            font-family: "Borel", cursive;
            font-size: 0.78em;
            font-weight: 400;
          }

          .role-selection-hero p {
            max-width: 720px;
            margin: 32px 0 0;
            color: var(--role-muted);
            font-family: "Quicksand", sans-serif;
            font-size: 19px;
            font-weight: 450;
            line-height: 1.75;
          }

          .role-selection-role-area {
            border-top: 1px solid var(--role-border);
            padding: 78px 0 0;
          }

          .role-selection-section-heading {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 40px;
            margin-bottom: 36px;
          }

          .role-selection-section-heading h2 {
            margin: 12px 0 0;
            color: var(--role-text);
            font-family: "Special Gothic Expanded One", sans-serif;
            font-size: clamp(34px, 4vw, 54px);
            font-weight: 400;
            line-height: 1;
            letter-spacing: -0.035em;
          }

          .role-selection-section-heading p {
            max-width: 420px;
            margin: 0;
            color: var(--role-muted);
            font-family: "Quicksand", sans-serif;
            font-size: 14px;
            line-height: 1.7;
          }

          .role-selection-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 18px;
          }

          .role-selection-card {
            position: relative;
            display: flex;
            min-height: 250px;
            flex-direction: column;
            justify-content: space-between;
            border: 1px solid var(--role-border);
            border-radius: 24px;
            padding: 26px;
            background: var(--role-surface);
            color: var(--role-text);
            text-align: left;
            cursor: pointer;
            backdrop-filter: blur(17px);
          }

          .role-selection-card:hover {
            transform: translateY(-5px);
            border-color: var(--role-border-strong);
            box-shadow: 0 24px 58px rgba(0, 0, 0, 0.13);
          }

          .role-selection-card-selected {
            border-color: var(--role-border-strong);
            box-shadow: 0 24px 58px rgba(72, 33, 235, 0.13);
          }

          .role-selection-card-top {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }

          .role-selection-icon {
            display: grid;
            width: 52px;
            height: 52px;
            place-items: center;
            border-radius: 15px;
            background: rgba(56, 222, 150, 0.12);
            color: var(--role-teal);
          }

          .role-selection-icon svg {
            width: 23px;
            height: 23px;
          }

          .role-selection-card-copy {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .role-selection-card-copy strong {
            color: var(--role-text);
            font-family: "Special Gothic Expanded One", sans-serif;
            font-size: 21px;
            font-weight: 400;
            line-height: 1.05;
          }

          .role-selection-card-copy span {
            max-width: 320px;
            color: var(--role-muted);
            font-family: "Quicksand", sans-serif;
            font-size: 14px;
            line-height: 1.65;
          }

          .role-selection-arrow {
            width: 20px;
            height: 20px;
            color: var(--role-purple);
          }

          .role-selection-action {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 24px;
            margin-top: 28px;
          }

          .role-selection-selection {
            color: var(--role-muted);
            font-family: "Borel", cursive;
            font-size: 18px;
          }

          .role-selection-selection strong {
            color: var(--role-purple);
            font-family: "Quicksand", sans-serif;
            font-weight: 700;
          }

          .role-selection-continue {
            display: inline-flex;
            min-width: 160px;
            align-items: center;
            justify-content: center;
            gap: 9px;
            border: 0;
            border-radius: 14px;
            padding: 15px 22px;
            background: var(--role-purple);
            color: #ffffff;
            font-family: "Quicksand", sans-serif;
            font-weight: 700;
            box-shadow: 0 16px 36px rgba(72, 33, 235, 0.2);
          }

          .role-selection-continue:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 20px 42px rgba(72, 33, 235, 0.3);
          }

          .role-selection-continue:disabled {
            cursor: not-allowed;
            opacity: 0.4;
          }

          .role-selection-status {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-top: 28px;
            color: var(--role-muted);
            font-family: "Pixelify Sans", sans-serif;
            font-size: 12px;
          }

          .role-selection-status-mark {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: var(--role-teal);
          }

          @keyframes role-skeleton-shimmer {
            100% {
              transform: translateX(100%);
            }
          }

          .role-selection-reveal {
            animation: role-selection-reveal 4200ms cubic-bezier(.2,.7,.2,1) both;
          }

          .role-selection-reveal-card-0 {
            animation-delay: 180ms;
          }

          .role-selection-reveal-card-1 {
            animation-delay: 460ms;
          }

          .role-selection-reveal-card-2 {
            animation-delay: 740ms;
          }

          .role-selection-reveal-action {
            animation-delay: 1100ms;
          }

          @keyframes role-selection-reveal {
            from {
              opacity: 0;
              transform: translateY(90px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 1080px) {
            .role-selection-header {
              gap: 26px;
              padding: 0 30px;
            }

            .role-selection-nav {
              gap: 22px;
            }

            .role-selection-content,
            .role-selection-loading {
              padding-left: 30px;
              padding-right: 30px;
            }

            .role-selection-grid,
            .role-selection-loading-roles {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .menu-role {
              width: 330px;
            }

            .menu-explore {
              width: 450px;
            }

            .menu-how {
              left: -150px;
              width: 420px;
            }

            .menu-support {
              width: 360px;
            }
          }

          @media (max-width: 820px) {
            .role-selection-header {
              position: relative;
              min-height: auto;
              flex-wrap: wrap;
              gap: 16px;
              padding: 16px 22px;
            }

            .role-selection-nav {
              order: 3;
              width: 100%;
              flex-basis: 100%;
              overflow-x: auto;
              scrollbar-width: none;
            }

            .role-selection-nav::-webkit-scrollbar {
              display: none;
            }

            .role-selection-nav-item-wrapper {
              height: auto;
            }

            .role-selection-nav-item {
              height: auto;
              padding: 8px 0;
            }

            .role-selection-menu {
              position: fixed;
              top: 108px;
              left: 14px;
              right: 14px;
              width: auto;
              max-height: calc(100vh - 122px);
              border-radius: 20px;
            }

            .role-selection-menu-grid {
              grid-template-columns: 1fr;
            }

            .role-selection-hero {
              min-height: 470px;
              padding: 80px 0 70px;
            }

            .role-selection-hero h1 {
              font-size: clamp(48px, 12vw, 72px);
            }

            .role-selection-grid,
            .role-selection-loading-roles {
              grid-template-columns: 1fr;
            }

            .role-selection-card {
              min-height: 210px;
            }

            .role-selection-section-heading {
              align-items: flex-start;
              flex-direction: column;
            }
          }

          @media (max-width: 560px) {
            .role-selection-header {
              padding-left: 18px;
              padding-right: 18px;
            }

            .role-selection-actions {
              gap: 12px;
            }

            .role-selection-content,
            .role-selection-loading {
              padding-left: 18px;
              padding-right: 18px;
            }

            .role-selection-menu {
              top: 112px;
              padding: 0;
            }

            .role-selection-menu-label {
              padding: 22px 20px 0;
            }

            .role-selection-menu-grid {
              padding: 12px;
            }

            .role-selection-menu-footer {
              margin-left: 20px;
              margin-bottom: 20px;
            }

            .role-selection-hero {
              min-height: 420px;
            }

            .role-selection-hero p {
              font-size: 16px;
            }

            .role-selection-role-area {
              padding-top: 58px;
            }

            .role-selection-action {
              align-items: stretch;
              flex-direction: column;
            }

            .role-selection-continue {
              width: 100%;
            }

            .goldroad-skeleton-title {
              width: 88%;
              height: 54px;
            }

            .goldroad-skeleton-title-short {
              width: 56%;
              height: 54px;
            }

            .goldroad-skeleton-paragraph,
            .goldroad-skeleton-paragraph-short {
              width: 88%;
            }
          }
        `}
      </style>

      <div className="role-selection-orb" />

      <header className="role-selection-header">
        {isLoading ? (
          <>
            <Skeleton variant="logo" />

            <nav className="role-selection-nav">
              <Skeleton variant="nav" />
              <Skeleton variant="nav" />
              <Skeleton variant="nav" />
              <Skeleton variant="nav" />
            </nav>

            <div className="role-selection-actions">
              <Skeleton variant="nav" />
              <Skeleton variant="nav" />
            </div>
          </>
        ) : (
          <>
            <a href="#top" className="role-selection-brand">
              <span>GoldRoad</span>
              <strong>U1</strong>
            </a>

            <nav
              className="role-selection-nav"
              onMouseLeave={() => setActiveMenu(null)}
            >
              {Object.entries(menus).map(([title, menu]) => (
                <div
                  key={title}
                  className="role-selection-nav-item-wrapper"
                  onMouseEnter={() => setActiveMenu(title)}
                >
                  <button
                    type="button"
                    className="role-selection-nav-item"
                    onFocus={() => setActiveMenu(title)}
                  >
                    {title}
                    <FiChevronDown />
                  </button>

                  <div
                    className={`role-selection-menu ${menu.className} ${
                      activeMenu === title
                        ? 'role-selection-menu-open'
                        : ''
                    }`}
                    onMouseEnter={() => setActiveMenu(title)}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <div className="role-selection-menu-label">
                      {menu.label}
                    </div>

                    <div className="role-selection-menu-grid">
                      {menu.items.map((item) => (
                        <button
                          key={item.title}
                          type="button"
                          className="role-selection-menu-item"
                        >
                          <strong>{item.title}</strong>
                          <span>{item.description}</span>
                        </button>
                      ))}
                    </div>

                    <span className="role-selection-menu-footer">
                      Explore GoldRoad U1
                      <FiExternalLink />
                    </span>
                  </div>
                </div>
              ))}
            </nav>

            <div className="role-selection-actions">
              <button
                type="button"
                className="role-selection-theme"
                onClick={toggleTheme}
                aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
                title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
              >
                {isDark ? <FiSun /> : <FiMoon />}
              </button>

              <button
                type="button"
                className="role-selection-login"
              >
                Log in
              </button>
            </div>
          </>
        )}
      </header>

      <div id="top" className="role-selection-main">
        {isLoading ? (
          <section className="role-selection-loading">
            <div className="role-selection-loading-heading">
              <Skeleton variant="eyebrow" />
              <Skeleton variant="title" />
              <Skeleton variant="title-short" />
              <Skeleton variant="paragraph" />
              <Skeleton variant="paragraph-short" />
            </div>

            <div className="role-selection-loading-roles">
              <Skeleton variant="card" />
              <Skeleton variant="card" />
              <Skeleton variant="card" />
            </div>

            <div className="role-selection-loading-button">
              <Skeleton variant="button" />
            </div>
          </section>
        ) : (
          <section className="role-selection-content">
            <div className="role-selection-hero role-selection-reveal">
              <span className="role-selection-eyebrow">
                Find your road
              </span>

              <h1>
                Choose who you are
                <span> here.</span>
              </h1>

              <p>
                One platform for professional work, services,
                opportunities, and advertising.
              </p>
            </div>

            <section
              id="roles"
              className="role-selection-role-area role-selection-reveal"
            >
              <div className="role-selection-section-heading">
                <div>
                  <span className="role-selection-eyebrow">
                    Your U1 journey
                  </span>

                  <h2>Start where you belong.</h2>
                </div>

                <p>
                  Your U1 account begins with one role. Select the path
                  that represents how you want to use GoldRoad U1.
                </p>
              </div>

              <div className="role-selection-grid">
                {roles.map((role, index) => {
                  const Icon = role.icon
                  const selected = selectedRole === role.id

                  return (
                    <button
                      key={role.id}
                      type="button"
                      className={`role-selection-card role-selection-reveal role-selection-reveal-card-${index} ${
                        selected
                          ? 'role-selection-card-selected'
                          : ''
                      }`}
                      onClick={() => setSelectedRole(role.id)}
                    >
                      <div className="role-selection-card-top">
                        <span className="role-selection-icon">
                          <Icon />
                        </span>

                        <FiArrowRight className="role-selection-arrow" />
                      </div>

                      <div className="role-selection-card-copy">
                        <strong>{role.title}</strong>
                        <span>{role.description}</span>
                      </div>
                    </button>
                  )
                })}
              </div>

              <div className="role-selection-action role-selection-reveal role-selection-reveal-action">
                <div className="role-selection-selection">
                  {selectedRole ? (
                    <>
                      You chose{' '}
                      <strong>
                        {
                          roles.find(
                            (role) => role.id === selectedRole,
                          )?.title
                        }
                      </strong>
                    </>
                  ) : (
                    'Choose your role to continue.'
                  )}
                </div>

                <button
                  type="button"
                  className="role-selection-continue"
                  disabled={!selectedRole}
                >
                  Continue
                  <FiArrowRight />
                </button>
              </div>

              <div className="role-selection-status">
                <span className="role-selection-status-mark" />
                One U1 ID · One role · One professional identity
              </div>
            </section>
          </section>
        )}
      </div>
    </main>
  )
}
