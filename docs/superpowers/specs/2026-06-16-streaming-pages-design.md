# Streaming Platform — Full UI Expansion

## Overview
Create 8 new static HTML pages to complete the SPLY streaming platform UI, plus update nav links on 6 existing pages. All pages follow the established dark theme (black `#0b0b0c`, cyan `#71c7f1`, pink `#ef19b5`) and share the same nav/footer shell via `assets/style.css` and `assets/main.js`.

## Pages

### 1. login.html
- Login equivalent of sign-up.html
- Glassmorphism card (rgba(87,130,193,0.28), backdrop-filter blur, 28px radius)
- Fields: Email, Password (with eye icon toggle)
- "Mot de Passe Oublier?" link → reset flow
- "SE CONNECTER" button (cyan `#71c7f1`)
- "or continue with" social login row
- Link to sign-up.html: "Pas encore de compte? S'inscrire"
- Welcome text: "Bon retour dans l'arène" (Ethnocentric)

### 2. suivis.html (Following)
- Tabs: "En ligne" (Online, default active), "Tous" (All)
- Stream cards grid (5 columns, `.stream-grid`)
- Empty state when no follows: illustration + "Vous ne suivez aucune chaîne" + "Découvrir des streamers" CTA to parcourir.html
- Each card: thumbnail, LIVE badge, avatar, streamer name, game, viewer count

### 3. profil.html
- Cover banner (620px) + avatar overlay (120px rounded)
- Username, display name, bio text
- Stats row: "X abonnés · Y abonnements · Z vues"
- Tabs: "Streams", "Vidéos", "À propos"
- "À propos" tab: bio, social links, joined date
- Edit profile button (outline)

### 4. parametres.html
- Two-column: sidebar nav + content panel
- Nav items: "Profil", "Compte", "Notifications", "Confidentialité"
- Profil: avatar upload, display name, bio, links
- Compte: email, password change, 2FA toggle
- Notifications: toggle rows (follows, subscriptions, messages, etc.)
- Confidentialité: who can message, blocked users
- Save button per section

### 5. messages.html
- Two-column: channel list (320px) + conversation
- Channel list: search input, contact rows (avatar, name, last message preview, unread count, timestamp)
- Conversation: header (avatar + name), scrollable messages, input area with send
- Messages: bubbles with avatar, username, text, timestamp
- Responsive: single column on mobile with back button

### 6. notifications.html
- Header: "Notifications" + "Tout marquer comme lu" button
- Grouped by time: "Aujourd'hui", "Cette semaine", "Plus tôt"
- Each notification: icon (follow/subscription/host/raid), text description, timestamp, unread dot
- Click to navigate to relevant content

### 7. recherche.html
- Pre-filled search input with the query
- Tabs: "Tout", "Chaînes", "Catégories", "Vidéos"
- "Tout" tab: mixes channel results + category results
- "Chaînes": stream cards grid
- "Catégories": category cards grid
- Empty state: "Aucun résultat pour [query]"

### 8. cree.html (Create Stream)
- Dashboard-style layout
- Two-column: form (left) + preview (right)
- Form fields: Titre du stream, Catégorie (dropdown), Tags (comma entry), Langue
- Stream key display with copy button
- "Go Live" toggle / button
- Quick stats: quality, fps, bitrate
- Preview: current stream thumbnail or placeholder

## Nav Updates (6 existing files)
- All pages: Suivis link → `suivis.html` (was `categorie.html`)
- All pages: Se connecter link → `login.html` (was `sign-up.html`)

## Design System
- Same fonts: Ethnocentric (headings, from local .otf), Poppins (body), Inter (UI), Epilogue (form inputs)
- Same colors: `--bg-primary: #000000`, `--accent-blue: #71c7f1`, `--accent-pink: #ef19b5`
- Same component classes: `.nav`, `.stream-grid`, `.stream-card`, `.btn`, `.footer-link`, etc.
- Same responsive breakpoints: 1440px, 1200px, 768px, 480px

## No-Build Architecture
- Pure static HTML (no framework, no bundler)
- Shared CSS: `assets/style.css`
- Shared JS: `assets/main.js`
- All pages in project root as standalone `.html` files
