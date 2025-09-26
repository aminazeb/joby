# Joby Frontend

## Overview
This is the frontend for the Joby application, built with React, Vite, and Tailwind CSS. It connects to the Laravel backend for authentication, job postings, and role-based dashboards.

## Setup Instructions

### 1. Install Dependencies
```sh
npm install
```

### 2. Environment Setup
Create a `.env` file in the project root:
```env
VITE_API_URL=http://localhost:8000
```

### 3. Start Development Server
```sh
npm run dev
```

Open the app at [http://localhost:5173](http://localhost:5173)

## Features
- Register, login, and logout pages
- Role-based dashboard (admin/user)
- Job postings list and management
- Responsive UI with Tailwind CSS

## API Integration
- All API calls use `VITE_API_URL` from `.env`
- Auth token and user info are stored in `localStorage`
- See backend README for API details

## Folder Structure
- `src/pages/` — Main pages (Register, Login, Dashboard, etc.)
- `src/components/` — Reusable UI components
- `src/assets/` — Static assets

## Assumptions Made

## Partial Implementation includes
- basic auth flow
- Role based dashboard page

## Known Issues
- UI themes not applied
