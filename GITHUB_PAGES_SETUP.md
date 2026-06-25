# GitHub Pages Launch Steps for admin.dopetechservice.com

## 1) Create a GitHub repository
Recommended repo name:
dopetech-admin

## 2) Upload the contents of this package to the repo

## 3) Add GitHub Secrets
Repo -> Settings -> Secrets and variables -> Actions -> New repository secret

Create these secrets:
- VITE_FIREBASE_API_KEY
- VITE_FIREBASE_AUTH_DOMAIN
- VITE_FIREBASE_PROJECT_ID
- VITE_FIREBASE_STORAGE_BUCKET
- VITE_FIREBASE_MESSAGING_SENDER_ID
- VITE_FIREBASE_APP_ID

Values:
- VITE_FIREBASE_API_KEY = AIzaSyD_dDwQp8p-0fhDvvVRf6cdrJCkJXY1U9Q
- VITE_FIREBASE_AUTH_DOMAIN = dopetech-services.firebaseapp.com
- VITE_FIREBASE_PROJECT_ID = dopetech-services
- VITE_FIREBASE_STORAGE_BUCKET = dopetech-services.firebasestorage.app
- VITE_FIREBASE_MESSAGING_SENDER_ID = 337875225852
- VITE_FIREBASE_APP_ID = 1:337875225852:web:e5424c4ddbae75329b5b79

## 4) Enable GitHub Pages
Repo -> Settings -> Pages
Source: GitHub Actions

## 5) Point your custom domain
Create a DNS CNAME:
Host: admin
Target: <your-github-username>.github.io

Example:
admin.dopetechservice.com -> david-tech.github.io
