#!/bin/bash

echo "🚀 Prop 123 Deployment Script"
echo "================================"
echo ""

# Check if we have a remote already
if git remote get-url origin 2>/dev/null; then
    echo "✓ Git remote already configured"
    REMOTE_URL=$(git remote get-url origin)
    echo "  Remote: $REMOTE_URL"
else
    echo "⚠️  No GitHub remote configured yet"
    echo ""
    echo "Please follow these steps:"
    echo ""
    echo "1. Go to: https://github.com/new"
    echo "2. Repository name: prop-123-analysis"
    echo "3. Make it Public"
    echo "4. DO NOT initialize with README"
    echo "5. Click 'Create repository'"
    echo ""
    echo "6. Then copy the URL that looks like:"
    echo "   https://github.com/YOUR_USERNAME/prop-123-analysis.git"
    echo ""
    read -p "Paste your repository URL here: " REPO_URL

    if [ ! -z "$REPO_URL" ]; then
        git remote add origin "$REPO_URL"
        echo "✓ Remote added!"
    else
        echo "❌ No URL provided. Exiting."
        exit 1
    fi
fi

echo ""
echo "Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ SUCCESS! Code is now on GitHub!"
    echo ""
    echo "Next step: Deploy to Vercel"
    echo "1. Go to: https://vercel.com/new"
    echo "2. Sign in with GitHub"
    echo "3. Import your 'prop-123-analysis' repository"
    echo "4. Click Deploy!"
    echo ""
else
    echo "❌ Push failed. You may need to authenticate with GitHub."
    echo ""
    echo "Try this:"
    echo "1. Go to: https://github.com/settings/tokens"
    echo "2. Generate new token (classic)"
    echo "3. Select 'repo' scope"
    echo "4. Use the token as your password when pushing"
fi
