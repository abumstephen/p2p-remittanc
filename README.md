# P2P Remittance System

A peer-to-peer cross-border money transfer platform built with Next.js and React Native.

---

## 🚀 Quick Start

### Clone the Repository

```bash
git clone https://github.com/abumstephen/p2p-remittanc.git
cd p2p-remittanc
```

### Run Admin Dashboard

```bash
cd apps/admin
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Run Mobile App

```bash
cd apps/mobile
npm install
npm start
```

Scan QR code with Expo Go app on your phone.

---

## 📁 Project Structure

```
p2p-remittanc/
├── apps/
│   ├── admin/          # Admin dashboard (Next.js)
│   └── mobile/         # Mobile app (Expo/React Native)
├── .gitignore          # Git ignore rules
├── CONTRIBUTING.md     # Git workflow guide
├── CODEBASE_ANALYSIS.md # Detailed codebase analysis
├── TESTING_GUIDE.md    # How to test the apps
└── README.md          # This file
```

---

## 🛠️ Tech Stack

### Admin Dashboard
- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **API Client:** Apollo Client (GraphQL) + Axios

### Mobile App
- **Framework:** Expo (React Native)
- **Language:** TypeScript
- **Navigation:** Expo Router
- **State Management:** Zustand
- **API Client:** Apollo Client (GraphQL) + Axios

---

## 📚 Documentation

- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - Git workflow and collaboration guide
- **[CODEBASE_ANALYSIS.md](./CODEBASE_ANALYSIS.md)** - Detailed analysis of what's built and what's missing
- **[TESTING_GUIDE.md](./TESTING_GUIDE.md)** - How to run and test the applications

---

## 🎯 Current Status

**Development Stage:** 🟡 Foundation

- ✅ Frontend scaffolding complete
- ✅ Mobile UI screens implemented
- ✅ Basic navigation working
- ⏳ Admin dashboard in progress
- ❌ Backend API not started
- ❌ Authentication system pending
- ❌ Payment processing pending

See [CODEBASE_ANALYSIS.md](./CODEBASE_ANALYSIS.md) for detailed status.

---

## 👥 Team

- **abumstephen** - Repository owner
- **surggaashi** - Collaborator

---

## 🤝 Contributing

1. Pull latest changes: `git pull origin main`
2. Create feature branch: `git checkout -b feature/your-feature`
3. Make changes and commit: `git commit -m "feat: your feature"`
4. Push: `git push origin feature/your-feature`
5. Create Pull Request on GitHub
6. Wait for review and merge

Read [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed workflow.

---

## 📋 Feature Roadmap

### Phase 1: Backend Foundation (Current Priority)
- [ ] Set up API server (NestJS recommended)
- [ ] Database setup (PostgreSQL)
- [ ] Authentication system (JWT)
- [ ] User registration & login endpoints
- [ ] Wallet management API

### Phase 2: Core Features
- [ ] KYC/AML integration
- [ ] Transaction processing
- [ ] Exchange rate service
- [ ] Payment gateway integration
- [ ] Notification system

### Phase 3: Admin & Monitoring
- [ ] Admin dashboard features
- [ ] Transaction monitoring
- [ ] User management
- [ ] Dispute resolution
- [ ] Analytics & reporting

### Phase 4: Production Ready
- [ ] Security audit
- [ ] Performance optimization
- [ ] Testing (unit, integration, E2E)
- [ ] CI/CD pipeline
- [ ] Deployment

---

## 🔐 Security

This application handles financial transactions. Security is critical:

- Never commit `.env` files or secrets
- Always use HTTPS in production
- Implement proper authentication
- Follow compliance regulations (KYC/AML)
- Regular security audits required

---

## 📄 License

TBD

---

## 📞 Contact

- **Issues:** [GitHub Issues](https://github.com/abumstephen/p2p-remittanc/issues)
- **Pull Requests:** [GitHub PRs](https://github.com/abumstephen/p2p-remittanc/pulls)

---

**Last Updated:** October 23, 2026
