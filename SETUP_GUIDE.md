# 🚀 KAU Cafeteria — Setup Guide
## No credit card. No billing. Completely free.

---

## PART 1 — Setting Up JSONBin (Daily Menu Storage)

JSONBin is a free online storage service. No billing, no credit card needed.
You just sign up with your email and get an API key.

### Step 1: Create a JSONBin Account
1. Go to: **https://jsonbin.io**
2. Click **"Sign Up"** (top right)
3. Sign up with your email or Google account
4. Confirm your email if asked

### Step 2: Create Your First Bin
A "bin" is just an online container that holds your menu data.

1. After logging in, click **"Create Bin"** (the big + button)
2. In the editor box, paste this:
   {}
3. Click **"Create Bin"**
4. You'll see a URL like: https://api.jsonbin.io/v3/b/abc123xyz
   The part after /b/ is your BIN ID — copy it! (e.g. abc123xyz)

### Step 3: Get Your API Key
1. Click your profile icon (top right) → "API Keys"
2. Under "Secret Key", click "Generate Key" if none exists
3. Copy the key — it starts with $2b$...

### Step 4: Paste into Your Project
1. Open the file: JS/jsonbin-config.js
2. Replace the placeholder values with your real ones:

   API_KEY: "$2b$10$yourActualKeyHere"
   BIN_ID:  "abc123xyz"

Save the file. That's it for setup!

---

## PART 2 — Deploying to GitHub Pages (Free Hosting)

### Step 1: Create a GitHub Account
Go to https://github.com and sign up for free.

### Step 2: Create a New Repository
1. Click "+" (top right) → "New repository"
2. Name it: kau-cafeteria
3. Set to Public
4. Click "Create repository"

### Step 3: Upload Your Files
1. On the new repo page, click "uploading an existing file"
2. Drag and drop ALL the files and folders from your KAU_Cafeteria folder
3. Write a commit message: Initial upload
4. Click "Commit changes"

### Step 4: Enable GitHub Pages
1. Click "Settings" tab in your repository
2. Left sidebar → "Pages"
3. Under Branch, select "main"
4. Click "Save"
5. Wait 1-2 minutes

### Step 5: Your Site is Live!
Your URL will be:
   https://YOUR-GITHUB-USERNAME.github.io/kau-cafeteria

---

## PART 3 — How to Update the Menu Daily

Every day, the cafeteria admin:
1. Goes to: https://your-username.github.io/kau-cafeteria/admin/index.html
2. Today's date is already selected — click "Load / Edit This Day's Menu"
3. Adds dishes for Breakfast, Lunch, Dinner
4. Clicks "Save Menu"

Students see it instantly on the homepage.

---

## Summary

| What             | Service      | Cost    |
|------------------|--------------|---------|
| Menu storage     | JSONBin      | Free    |
| Website hosting  | GitHub Pages | Free    |
| Custom domain    | Optional     | ~$10/yr |

No credit card needed. Ever.

---

Stuck? Paste the error message to Claude and it will help you fix it!
