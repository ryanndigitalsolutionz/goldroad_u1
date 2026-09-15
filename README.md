# GoldRoad U1 Frontend

GoldRoad U1 is a freelancing and advertising platform.

The current development phase focuses on building the main frontend structure and the first Client and Freelancer experiences.

---

## Current Team

### Ryan

Responsible for:

- Authentication
- U1 ID
- Role selection
- User registration and login
- Email verification
- Password recovery
- Payments
- Pin-points
- Payment-related frontend logic
- Media-related platform features

### Emmanuel

Responsible for:

- Client dashboard
- Client-side pages
- Client experience for finding professionals
- Client-side project and job interaction
- Client dashboard information and layout

### Remick

Responsible for:

- Freelancer dashboard
- Freelancer-side pages
- Freelancer experience for finding available work
- Freelancer-side project and job interaction
- Freelancer dashboard information and layout

### Planned Later

These areas are not part of the current assignment:

- Ratings
- Business dashboard
- Administrator dashboard

They will be added after the first Client and Freelancer experiences are working.

---

## Team Development Instructions

## 1. Create Your Own Branch

If you forked and cloned the GoldRoad U1 repository, do not work directly on `main`.

Create your own branch before making changes:

```bash
git checkout -b kipsum/feature-branch
```

Replace `kipsum/feature-branch` with your own branch name.

For example:

```bash
git checkout -b emmanuel/client-dashboard
```

or:

```bash
git checkout -b remick/freelancer-dashboard
```

If you only cloned the repository and did not fork it, that is fine too. Create your own branch before coding.

Do not work directly on `main`.

---

## 2. Push Only to Your Own Branch

When you finish a change:

```bash
git add .
git commit -m "Your commit message"
git push origin your-branch-name
```

Push your work to YOUR custom branch.

Do not push your work directly to `main`.

Once your work is pushed, leave it on your branch.

I will review the work and create the pull request when it is ready.

---

## 3. Frontend Only For Now

For the current development phase, we are ONLY working on the frontend.

Do not work on the backend yet.

The project folders are:

```text
gold  → Frontend
teal  → Backend
```

Our current focus is the `gold` folder.

The `teal` backend will be handled later.

---

## 4. Install Dependencies Before Coding

Before you start coding, run:

```bash
npm install
```

This installs the frontend dependencies required by GoldRoad U1.

For backend dependencies, we will use Pipenv later.

If you need to update the backend dependencies or `Pipfile`, use:

```bash
pipenv install
pipenv shell
```

If your Python version is different from the version used when this repository was created, check your version first:

```bash
python --version
```

Make sure your Python version matches the version specified in:

```text
Pipfile
```

and line 8 of:

```text
Pipfile.lock
```

After making the necessary version change, run:

```bash
pipenv install
pipenv shell
```

For now, you should not need to do this because backend development is postponed.

---

## 5. Do Not Ignore Errors

If ANYTHING goes wrong with your code, text me on WhatsApp.

No matter how small or strange the problem is, tell me and wait for me to help you solve it.

This project will have code that breaks.

Errors are part of development, but we cannot ignore them or leave broken code behind.

Do not assume:

> "It probably works."

Check it.

Do not leave an error unresolved just because the rest of your feature appears to work.

If something breaks, message me.

---

## 6. Why We Are Working This Way

Sahii hatuko Moringa, na hatuwezi kukutana physically, so I'm trying my best to organize everyone remotely.

We'll use Google Meet(s) when necessary so that I can make sure everyone understands what they are working on and that:

> "sitaki kuacha mtu nyuma."

Ask questions when you get stuck.

I'd rather you tell me about a problem early than discover it after the code has already been merged.

---

## Current Scope

For the current development phase, prioritize:

1. Frontend structure
2. Authentication
3. Client dashboard
4. Freelancer dashboard
5. Payments
6. Integration between these areas

Do not build the unfinished Business, Ratings, or Administrator systems yet.

---

## User Roles

GoldRoad U1 currently has three public account roles:

- Client
- Freelancer
- Business

Administrators use the U1 ID system but do not appear as a selectable role on the public role-selection page.

A user starts with one role.

The U1 ID identifies the user and determines their role and permissions.

Role conversion is a permanent account process.

---

## Frontend Structure

```text
gold/
├── components/
│   ├── LottieModal.jsx
│   ├── ProposalCard.jsx
│   ├── Skeleton.jsx
│   ├── LottieAnimation.jsx
│   ├── Input.jsx
│   ├── ProjectCard.jsx
│   ├── ProfileCard.jsx
│   ├── Sidebar.jsx
│   ├── Button.jsx
│   └── Navbar.jsx
│
├── context/
│   └── ThemeContext.jsx
│
├── features/
│   ├── ratings/
│   ├── payments/
│   ├── marketplace/
│   ├── contracts/
│   ├── workstores/
│   ├── administration/
│   ├── support/
│   ├── subscriptions/
│   ├── policies/
│   ├── verification/
│   ├── proposals/
│   ├── advertising/
│   ├── o.m.l.i/
│   ├── projects/
│   ├── pin-points/
│   ├── authentication/
│   ├── profiles/
│   ├── account/
│   ├── notifications/
│   ├── agencies/
│   ├── jobs/
│   └── sage-guide/
│
├── hooks/
├── lib/
├── layouts/
├── routes/
├── services/
├── stores/
├── index.css
├── main.jsx
└── README.md
```

Feature folders contain the logic and pages for that feature.

Shared components belong in `components/`.

Global fonts, global styles, theme variables, resets, and browser-wide styles belong in `index.css`.

Page-specific styling belongs inside the JSX file that uses it.

---

## Current Onboarding Flow

```text
Welcome
   ↓
Role Selection
   ↓
Authentication
   ↓
Dashboard
```

The Welcome page displays the GoldRoad U1 introduction animation.

The Role Selection page allows the user to choose:

- Client
- Freelancer
- Business

There is no Admin option on this page.

---

## Welcome Experience

The current Welcome experience is intentionally minimal.

```text
Welcome.jsx
   ↓
Welcome.json animation
   ↓
"Welcome to GoldRoad U1!"
   ↓
Role Selection
```

The Welcome animation is the introductory cinematic experience before the user reaches Role Selection.

The Welcome screen should not be overloaded with navigation, cards, or additional information.

---

## Role Selection

Role Selection is the first interactive public page after the Welcome experience.

It contains:

- Public navigation header
- Role selection
- Theme toggle
- Login entry point
- Loading skeletons
- Slide-up content animations

The public header currently belongs specifically to Role Selection.

Authenticated application pages will use sidebars and application navigation instead.

---

## Themes

GoldRoad U1 supports:

- Dark theme
- Light theme

The theme is managed globally through:

```text
gold/context/ThemeContext.jsx
```

Dark theme uses the teal visual glow.

Light theme uses the gold visual glow.

The theme selection is remembered between visits.

The default theme follows the user's system preference unless they have previously selected a theme manually.

---

## Typography

The frontend uses the following fonts:

### Quicksand

Primary interface font.

Used for:

- Navigation
- Buttons
- Body text
- Descriptions
- Interface labels

### Special Gothic Expanded One

Primary display/title font.

Used mainly for:

- Major headings
- Page titles
- Section titles
- Important display text

### Borel

Expressive handwritten accent font.

Used selectively for:

- Small decorative phrases
- Brand personality
- Supporting display accents

Any sentence written in Borel should begin with a capital letter, except when the intentionally lowercase word `here` is being used as part of the design.

### Pixelify Sans

Used selectively for:

- U1-related identity elements
- Technical or compact status information
- Small platform-specific accents

Do not use Pixelify Sans for the entire interface.

---

## Navigation

The public onboarding experience currently uses the Role Selection header.

The header contains:

- GoldRoad U1 branding
- Public navigation
- Theme toggle
- Log in

Navigation items may display hover panels where appropriate.

Authenticated users will use the application's sidebar/navigation system instead of the public landing-page navigation.

---

## Loading and Skeletons

Role Selection uses skeleton loading and slide-up animations so the page does not appear instantly after the Welcome experience.

The reusable component is:

```text
gold/components/Skeleton.jsx
```

The skeleton system is intended to make asynchronous loading states feel intentional rather than allowing content to appear abruptly.

Do not remove skeleton states simply because the page currently loads quickly during local development.

---

## Shared Components

Shared UI components belong in:

```text
gold/components/
```

Examples include:

```text
Button.jsx
Input.jsx
Skeleton.jsx
Navbar.jsx
Sidebar.jsx
LottieAnimation.jsx
LottieModal.jsx
```

Do not create duplicate versions of an existing shared component without discussing it first.

If a component is genuinely reusable across multiple feature areas, it belongs in `components/`.

If it is specific to one feature, keep it inside that feature.

---

## Routing

GoldRoad U1 currently uses TanStack Router.

Route files are located in:

```text
gold/routes/
```

The generated route tree is:

```text
gold/routeTree.gen.js
```

Do not manually edit:

```text
routeTree.gen.js
```

Route files should be allowed to generate/update the route tree through the configured TanStack Router tooling.

---

## Policies

Policy documents are currently located under:

```text
gold/features/policies/
```

Current policy files include:

```text
MSA.md
Ts&Cs.md
Pn_Purchase_and_Subscription_Policy.md
SOW.md
ToS.md
Privacy_Policy.md
```

Do not rewrite policy content casually.

Policy changes should be discussed before being made.

---

## Payments

Payments are part of the current development assignment for Ryan.

Current payment-related frontend areas include:

```text
gold/features/payments/
gold/features/pin-points/
gold/features/subscriptions/
```

Payment secrets and private gateway credentials must never be placed in frontend code.

Do not expose API secrets in JSX, browser storage, Git commits, or public environment variables.

---

## Backend

The backend is located in:

```text
teal/
```

Backend development is postponed for the current phase.

The backend will eventually contain:

- API logic
- Database logic
- Authentication services
- Payment services
- Notifications
- Marketplace systems
- Contracts
- Advertising
- Administration
- And other GoldRoad U1 services

For now:

```text
gold → work here
teal → leave for later
```

---

## Git Rules

## Never push directly to `main`

Always create and use your own branch.

Example:

```bash
git checkout -b emmanuel/client-dashboard
```

Commit your work:

```bash
git add .
git commit -m "Build client dashboard"
```

Push your branch:

```bash
git push origin emmanuel/client-dashboard
```

Then leave the work on your branch.

Do not merge it yourself unless specifically instructed to do so.

---

## Code Quality

Before considering a feature complete:

- Make sure the page works.
- Check the browser console.
- Check that there are no obvious runtime errors.
- Check your buttons and navigation.
- Test loading states.
- Test responsive behavior where applicable.
- Tell Ryan about anything that is broken.

Never knowingly leave an unresolved error in your branch.

---

## Important Rules

Do not:

- Push directly to `main`.
- Work on the backend during the current frontend phase.
- Ignore runtime errors.
- Expose payment secrets.
- Expose authentication secrets.
- Manually edit generated `routeTree.gen.js`.
- Create unnecessary duplicate components.
- Add new user roles without discussing them with the team.
- Leave broken code unresolved.

---

## Development Philosophy

GoldRoad U1 is being built by a remote team.

The purpose of our branching and communication rules is to keep everyone moving without leaving anyone behind.

The project will have errors.

The project will have things that break.

The important thing is that we catch them, communicate them, and solve them.

When you are stuck, ask.

When something breaks, report it.

When you finish something, test it.

The goal is not just to write code.

The goal is to build GoldRoad U1 together.
