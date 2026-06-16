# Streaming UI Platform — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create 8 new HTML pages and update nav links on 6 existing pages to complete the SPLY streaming platform UI.

**Architecture:** Static HTML pages sharing a common CSS/JS shell (`assets/style.css`, `assets/main.js`). Each page is self-contained with its own content. Shared components via CSS classes. Page-specific layouts use inline styles.

**Tech Stack:** Pure HTML5 + CSS3 + Vanilla JS. No framework. No build step.

---

### Task 1: Update Nav Links on All 6 Existing Pages

**Files:** Modify `index.html`, `parcourir.html`, `categorie.html`, `chat.html`, `streameur.html`, `sign-up.html`

- [ ] Replace `href="categorie.html"` in Suivis nav link → `href="suivis.html"` on all 6 pages
- [ ] Replace `Se connecter` link: `href="sign-up.html"` → `href="login.html"` on all 6 pages

### Task 2: Create login.html

**Files:** Create `login.html`

- Glassmorphism card (same style as sign-up.html) with fields: Email, Password
- "Mot de Passe Oublier?" link, "SE CONNECTER" button (cyan), social login row
- Welcome text "Bon retour dans l'arène" (Ethnocentric)
- Link to sign-up: "Pas encore de compte? S'inscrire"
- Nav: Acceuil active, Suivis → suivis.html, Se connecter → login.html (active)

### Task 3: Create suivis.html (Following)

**Files:** Create `suivis.html`

- Tabs: "En ligne" (active), "Tous"
- Stream cards using `.stream-grid` (5-col) with live badges, avatars, viewer counts
- Empty state: illustration + "Vous ne suivez aucune chaîne" + CTA to parcourir.html
- Nav: Suivis active

### Task 4: Create profil.html

**Files:** Create `profil.html`

- Cover banner, avatar (120px), username, bio, stats row
- Tabs: "Streams", "Vidéos", "À propos"
- "À propos": bio, social links, joined date. Edit profile button
- Nav: Acceuil active

### Task 5: Create parametres.html

**Files:** Create `parametres.html`

- Sidebar nav: Profil, Compte, Notifications, Confidentialité
- Content panel with sections per nav item
- Forms (inputs, toggles) with save buttons
- Nav: Acceuil active

### Task 6: Create messages.html

**Files:** Create `messages.html`

- Two-column: channel list (320px) + conversation
- Channel list: search, contact rows with unread badges
- Conversation: message bubbles, input area with send
- Responsive: single column on mobile with back button
- Nav: Acceuil active

### Task 7: Create notifications.html

**Files:** Create `notifications.html`

- Header: "Notifications" + "Tout marquer comme lu"
- Grouped: "Aujourd'hui", "Cette semaine", "Plus tôt"
- Each: icon, text, timestamp, unread dot
- Nav: Acceuil active

### Task 8: Create recherche.html (Search Results)

**Files:** Create `recherche.html`

- Pre-filled search input with query parameter
- Tabs: "Tout", "Chaînes", "Catégories", "Vidéos"
- Results as stream cards or category cards
- Empty state for no results
- Nav: Acceuil active

### Task 9: Create cree.html (Go Live / Creator Dashboard)

**Files:** Create `cree.html`

- Two-column: form (title, category, tags, language) + preview panel
- Stream key with copy button, "Go Live" button
- Quick stats (quality, fps, bitrate)
- Nav: Acceuil active

### Task 10: Verify All Pages

- Open each page, confirm nav links work, footer is present, no broken images
- Confirm login.html accessible from Se connecter button
- Confirm suivis.html accessible from Suivis nav link
