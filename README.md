# English Academy

A modern English learning platform built with Next.js 15, featuring interactive lessons, assessments, and progress tracking.

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- pnpm 9+

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd english-app

# Install dependencies
pnpm install

# Setup pre-commit hooks (important!)
npx husky init

# Setup environment variables
cp .env.example .env.local
# Edit .env.local with your actual values

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Tech Stack

- **Framework**: Next.js 15.5 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI
- **Authentication**: NextAuth.js
- **Database**: MongoDB with Mongoose
- **Caching**: Upstash Redis
- **Deployment**: AWS Amplify

## 🛠️ Development

### Available Scripts

```bash
# Development
pnpm dev              # Start dev server with Turbopack
pnpm build            # Build for production
pnpm start            # Start production server

# Code Quality
pnpm lint             # Run ESLint
pnpm type-check       # Run TypeScript type checking
```

### Pre-commit Hooks

This project uses **Husky** and **lint-staged** to ensure code quality before commits.

**What it does**:

- ✅ Runs ESLint on staged TypeScript/TSX files
- ✅ Auto-fixes formatting issues
- ✅ Prevents commits with errors

**Setup** (for team members):

```bash
# After cloning, run once:
npx husky init
```

**Workflow**:

```bash
git add .
git commit -m "your message"
# → Pre-commit hook runs automatically (3-5 seconds)
# → Commit succeeds if no errors
```

**Bypass** (emergency only):

```bash
git commit -m "urgent fix" --no-verify
```

## 🏗️ Build Optimizations

This project is optimized for fast builds on AWS Amplify:

- ⚡ **Build time**: 1.5-2 minutes (down from 6-9 minutes)
- 💾 **Deployment size**: 50-100MB (down from 500MB)
- 🚀 **Standalone output** for minimal production bundle
- 📦 **Production dependencies only** during build
- 🔄 **Aggressive caching** for faster rebuilds

### AWS Amplify Configuration

See [`amplify.yml`](amplify.yml) for build configuration.

**Key optimizations**:

- Production dependencies only (`pnpm install --prod`)
- Next.js standalone output mode
- Optimized pnpm configuration
- Build checks run locally via pre-commit hooks

## 📁 Project Structure

```
english-app/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── learning/          # Learning features
│   └── ...
├── components/            # React components
├── lib/                   # Utility functions & configs
├── models/                # MongoDB/Mongoose models
├── hooks/                 # Custom React hooks
├── services/              # External service integrations
├── data/                  # Static data
├── public/                # Static assets
├── .husky/                # Git hooks
├── amplify.yml            # AWS Amplify build config
└── next.config.ts         # Next.js configuration
```

## 🔐 Environment Variables

Required environment variables (add to `.env.local`):

```bash
# Database
MONGODB_URI=your_mongodb_connection_string

# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_key

# OAuth Providers (optional)
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
FACEBOOK_CLIENT_ID=
FACEBOOK_CLIENT_SECRET=

# Redis Cache (optional)
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

## 🚀 Deployment

### AWS Amplify

This project is configured for AWS Amplify deployment.

**Build process**:

1. Push to main branch
2. AWS Amplify automatically builds (1.5-2 min)
3. Deploy to production

**Environment variables**: Set in AWS Amplify Console → Environment variables

### Manual Deployment

```bash
# Build
pnpm build

# The standalone output will be in:
# .next/standalone/
```

## 🧪 Testing

```bash
# Run linting
pnpm lint

# Run type checking
pnpm type-check

# Check both before pushing
pnpm lint && pnpm type-check
```

## 📝 Git Workflow

### Commit Convention

Use conventional commits format:

```bash
feat: add new feature
fix: resolve bug
docs: update documentation
style: formatting changes
refactor: code restructuring
perf: performance improvements
test: add tests
chore: maintenance tasks
```

### Branch Strategy

- `main` - Production branch (auto-deploys to AWS Amplify)
- `dev` - Development branch
- `feature/*` - Feature branches
- `fix/*` - Bug fix branches

## 🤝 Contributing

1. Clone the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Ensure code quality:
   ```bash
   pnpm lint
   pnpm type-check
   ```
5. Commit your changes (pre-commit hooks will run automatically)
6. Push to your branch
7. Open a Pull Request

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/docs/primitives/overview/introduction)
- [NextAuth.js](https://next-auth.js.org/getting-started/introduction)
- [Mongoose](https://mongoosejs.com/docs/guide.html)

## ⚡ Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 2.5s
- **Build Time**: ~1.5-2 minutes on AWS Amplify

## 🔧 Troubleshooting

### Pre-commit hook not running?

```bash
# Reinstall husky
npx husky init
```

### Build fails on AWS Amplify?

1. Check build logs in AWS Amplify Console
2. Verify environment variables are set
3. Ensure `amplify.yml` is configured correctly

### Type errors?

```bash
# Check types
pnpm type-check

# Fix common issues
pnpm lint --fix
```

## 📄 License

[Your License Here]

## 👥 Team

[Your Team Information]

---

Built with ❤️ using Next.js 15
