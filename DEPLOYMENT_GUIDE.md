# Step-by-Step Deployment Guide

## Option 1: Deploy to Vercel (Recommended - FREE)

Vercel is the easiest way to deploy Next.js apps. It's free for personal projects and offers excellent performance.

### Step 1: Initialize Git Repository (if not already done)

Open Terminal in your project folder:

```bash
cd /Users/sarah/Documents/Western\ Spaces/Claude/prop-123/prop-123-analysis
git init
git add .
git commit -m "Initial commit - Prop 123 AMI Analysis"
```

### Step 2: Push to GitHub

1. Go to [github.com](https://github.com) and sign in (or create account)
2. Click the "+" icon in top right → "New repository"
3. Name it: `prop-123-analysis`
4. **DO NOT** initialize with README (we already have code)
5. Click "Create repository"

6. Back in Terminal, run these commands (replace YOUR_USERNAME with your GitHub username):

```bash
git remote add origin https://github.com/YOUR_USERNAME/prop-123-analysis.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" (you can sign up with your GitHub account - easiest!)
3. After signing in, click "Add New..." → "Project"
4. Click "Import Git Repository"
5. Find your `prop-123-analysis` repository and click "Import"
6. **Leave all settings as default** (Vercel auto-detects Next.js)
7. Click "Deploy"

That's it! Vercel will:
- Build your project
- Deploy it to a URL like `prop-123-analysis.vercel.app`
- Give you a live link in ~2 minutes

### Step 4: Get Your Live URL

Once deployment completes, you'll see:
- ✅ "Congratulations!" message
- A URL like: `https://prop-123-analysis.vercel.app`
- Click "Visit" to see your live site!

### Step 5: Future Updates

Whenever you want to update the site:

```bash
# Make your changes to the files
git add .
git commit -m "Update [describe what you changed]"
git push
```

Vercel automatically redeploys when you push to GitHub!

---

## Option 2: Deploy to Netlify (Also FREE)

### Step 1: Push to GitHub (same as above)

Follow steps 1-2 from Option 1 above.

### Step 2: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose "Deploy with GitHub"
5. Select your `prop-123-analysis` repository
6. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
7. Click "Deploy"

Your site will be live at a URL like `prop-123-analysis.netlify.app`

---

## Option 3: Custom Domain (Optional)

Once deployed, you can add a custom domain like `prop123analysis.com`:

### On Vercel:
1. In your project dashboard → "Settings" → "Domains"
2. Add your domain
3. Follow DNS instructions (Vercel guides you through it)

### On Netlify:
1. In your site dashboard → "Domain settings"
2. Click "Add custom domain"
3. Follow DNS instructions

---

## Troubleshooting

### "Git not found" error
Install Git: [git-scm.com/downloads](https://git-scm.com/downloads)

### GitHub authentication issues
Use a personal access token instead of password:
1. GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token with "repo" permissions
3. Use token as password when pushing

### Build fails on Vercel/Netlify
- Check that `npm run build` works locally first
- Look at build logs for specific errors
- Most common issue: Node version (Vercel/Netlify use Node 18+ by default)

---

## Quick Reference: Important URLs

After deployment, save these:

- **Live Site**: Your `.vercel.app` or `.netlify.app` URL
- **Admin Dashboard**: Where you manage deployments
- **GitHub Repo**: Where your code lives
- **Analytics** (optional): Both platforms offer free analytics

---

## Cost

- ✅ **Vercel Free Tier**: Unlimited personal projects, excellent for this use case
- ✅ **Netlify Free Tier**: 100GB bandwidth/month, plenty for a policy site
- ✅ **GitHub**: Free for public repositories

**Total cost: $0** unless you want a custom domain (~$12/year)

---

## Need Help?

If you run into issues:
1. Check build logs in Vercel/Netlify dashboard
2. Verify `npm run build` works locally
3. Check that all files were pushed to GitHub (`git status`)

The most common issue is forgetting to push changes to GitHub before expecting them to appear on the live site!
