# Contributing to P2P Remittance System

Thank you for contributing to our P2P remittance platform! This document outlines our Git workflow and collaboration practices.

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [Git Workflow](#git-workflow)
- [Branch Naming Conventions](#branch-naming-conventions)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)
- [Code Review](#code-review)
- [Daily Workflow](#daily-workflow)

---

## 🚀 Getting Started

### Initial Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/abumstephen/p2p-remittanc.git
   cd p2p-remittanc
   ```

2. **Install dependencies**
   ```bash
   # Root level
   npm install
   
   # Admin app
   cd apps/admin
   npm install
   
   # Mobile app
   cd apps/mobile
   npm install
   ```

3. **Configure Git**
   ```bash
   git config user.name "Your Name"
   git config user.email "your.email@example.com"
   ```

---

## 🌳 Git Workflow

We follow a **Feature Branch Workflow** to keep the main branch stable and production-ready.

```
main (protected)
  ↓
feature/your-feature ← your work
  ↓
Pull Request → Code Review → Merge to main
```

### Key Principles

- **Never commit directly to `main`**
- **Always work on feature branches**
- **Keep branches focused and small**
- **Pull latest changes before starting work**
- **Create Pull Requests for all changes**

---

## 🏷️ Branch Naming Conventions

Use descriptive branch names with prefixes:

### Feature Branches
For new features or enhancements:
```bash
feature/user-authentication
feature/wallet-service
feature/kyc-verification
feature/transaction-history
```

### Bug Fix Branches
For fixing bugs:
```bash
fix/login-error
fix/transaction-timeout
fix/mobile-crash-on-startup
```

### Documentation Branches
For documentation updates:
```bash
docs/api-documentation
docs/setup-guide
docs/architecture-diagram
```

### Chore Branches
For maintenance, refactoring, or dependencies:
```bash
chore/update-dependencies
chore/cleanup-unused-code
chore/setup-ci-pipeline
```

### Hotfix Branches
For urgent production fixes:
```bash
hotfix/critical-security-patch
hotfix/payment-gateway-error
```

---

## 💬 Commit Message Guidelines

Write clear, descriptive commit messages following this format:

```
<type>: <subject>

<body> (optional)

<footer> (optional)
```

### Commit Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, semicolons, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks, dependency updates
- `perf`: Performance improvements

### Examples

```bash
feat: add wallet balance API endpoint

fix: resolve transaction timeout error on slow networks

docs: update README with setup instructions

chore: upgrade Next.js to v15

refactor: extract payment logic into separate service
```

### Guidelines

- Use present tense ("add feature" not "added feature")
- Keep the subject line under 50 characters
- Capitalize the subject line
- Don't end the subject with a period
- Use the body to explain **what** and **why**, not **how**

---

## 🔄 Pull Request Process

### Creating a Pull Request

1. **Push your branch to GitHub**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Open Pull Request on GitHub**
   - Go to the repository on GitHub
   - Click "Compare & Pull Request"
   - Fill in the PR template (see below)

3. **PR Template**
   ```markdown
   ## Description
   Brief description of what this PR does
   
   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Documentation update
   - [ ] Refactoring
   
   ## Related Issues
   Closes #123
   
   ## Testing
   - [ ] Tested locally
   - [ ] Added unit tests
   - [ ] Tested on mobile device (if applicable)
   
   ## Screenshots (if applicable)
   Add screenshots here
   
   ## Checklist
   - [ ] My code follows the project style guidelines
   - [ ] I have commented my code where necessary
   - [ ] I have updated the documentation
   - [ ] My changes generate no new warnings
   - [ ] I have tested my changes
   ```

4. **Request Review**
   - Tag team members for review
   - Wait for at least one approval before merging

---

## 👀 Code Review

### For Reviewers

- Review within 24 hours when possible
- Be constructive and respectful
- Test the changes locally if needed
- Check for:
  - Code quality and readability
  - Adherence to project conventions
  - Proper error handling
  - Security concerns
  - Performance issues

### For Authors

- Be open to feedback
- Respond to comments promptly
- Make requested changes in new commits
- Don't force-push after review has started
- Thank reviewers for their time

---

## 📅 Daily Workflow

### Starting Your Day

```bash
# 1. Switch to main branch
git checkout main

# 2. Pull latest changes
git pull origin main

# 3. Create new feature branch
git checkout -b feature/your-feature-name
```

### During Development

```bash
# Make changes to files

# Check what changed
git status

# Add files to staging
git add .
# or add specific files
git add path/to/file.ts

# Commit with descriptive message
git commit -m "feat: add user authentication service"

# Push to remote (first time)
git push -u origin feature/your-feature-name

# Push subsequent changes
git push
```

### Keeping Your Branch Updated

If `main` branch has new changes while you're working:

```bash
# Option 1: Rebase (cleaner history)
git checkout feature/your-feature-name
git fetch origin
git rebase origin/main

# Option 2: Merge (preserves history)
git checkout feature/your-feature-name
git fetch origin
git merge origin/main

# If conflicts occur, resolve them, then:
git add .
git rebase --continue  # for rebase
# or
git commit  # for merge
```

### After Your PR is Merged

```bash
# Switch to main branch
git checkout main

# Pull the latest changes (including your merged PR)
git pull origin main

# Delete your local feature branch
git branch -d feature/your-feature-name

# Delete remote feature branch (optional, GitHub can do this automatically)
git push origin --delete feature/your-feature-name
```

---

## ⚠️ Common Scenarios

### I Made Changes to the Wrong Branch

```bash
# Save your changes
git stash

# Switch to correct branch
git checkout correct-branch-name

# Apply your changes
git stash pop
```

### I Need to Undo My Last Commit (Not Pushed Yet)

```bash
# Keep the changes but undo the commit
git reset --soft HEAD~1

# Discard the changes completely
git reset --hard HEAD~1
```

### I Accidentally Committed to Main

```bash
# Create a new branch from current state
git branch feature/my-feature

# Reset main to remote state
git reset --hard origin/main

# Switch to your feature branch
git checkout feature/my-feature
```

### I Have Merge Conflicts

```bash
# Pull latest changes
git pull origin main

# Git will show conflicted files
# Open each file and look for conflict markers:
# <<<<<<< HEAD
# Your changes
# =======
# Incoming changes
# >>>>>>> branch-name

# Edit files to resolve conflicts
# Remove conflict markers
# Save files

# Mark conflicts as resolved
git add .

# Complete the merge
git commit -m "resolve merge conflicts with main"
```

---

## 🛡️ Branch Protection Rules

The `main` branch has the following protections:

- ✅ Require pull request before merging
- ✅ Require at least 1 approval
- ✅ Dismiss stale reviews when new commits are pushed
- ✅ Require status checks to pass (CI/CD)
- ❌ Direct pushes to main are blocked

---

## 🤝 Collaboration Best Practices

1. **Communicate Early and Often**
   - Discuss major changes before implementing
   - Use GitHub Issues for task tracking
   - Comment on PRs promptly

2. **Keep PRs Small**
   - Easier to review
   - Faster to merge
   - Less likely to have conflicts

3. **Write Tests**
   - Unit tests for business logic
   - Integration tests for API endpoints
   - E2E tests for critical user flows

4. **Document Your Code**
   - Add comments for complex logic
   - Update README when adding features
   - Keep API documentation current

5. **Pull Regularly**
   - Pull from main at least once per day
   - Pull before creating new branches
   - Pull before creating pull requests

---

## 🆘 Need Help?

- **Git Issues**: Ask in team chat or open a GitHub Discussion
- **Code Questions**: Tag team members in PR comments
- **Workflow Questions**: Review this document or ask the team

---

## 📚 Additional Resources

- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [GitHub Flow Guide](https://docs.github.com/en/get-started/quickstart/github-flow)
- [Writing Good Commit Messages](https://chris.beams.io/posts/git-commit/)
- [Code Review Best Practices](https://google.github.io/eng-practices/review/)

---

**Happy Coding! 🚀**
