

# Joby Backend

## Overview
This is the backend for the Joby application, built with Laravel. It provides APIs for user authentication, job postings, and role-based dashboards.

## Setup Instructions

### 1. Install Dependencies
```sh
composer install
```

### 2. Environment Setup
Copy `.env.example` to `.env` and update your database and other environment variables.
```sh
cp .env.example .env
```

### 3. Generate App Key
```sh
php artisan key:generate
```

### 4. Run Migrations
```sh
php artisan migrate
```

### 5. Seed Database
```sh
php artisan db:seed
```

### 6. Start Development Server
```sh
php artisan serve
```

## Seeded Users
- **Admin:**
	- Email: `admin@example.com`
	- Password: `password`
- **User:**
	- Email: `user@example.com`
	- Password: `password`

## Features
- User authentication (register, login, logout)
- Role-based access (admin, user)
- Job postings CRUD
- API endpoints for frontend integration

## Useful Commands
- Run tests:
	```sh
	php artisan test
	```
- Clear cache:
	```sh
	php artisan cache:clear
	```


## API Documentation

### Authentication Endpoints
- `POST /api/register` — Register a new user
- `POST /api/login` — Login and receive token
- `POST /api/logout` — Logout (requires token)
- `GET /api/profile` — Get current user profile (requires token)

### Orion Resource Endpoints
All endpoints below require authentication (`auth:sanctum`).

#### Job Postings
- `GET /api/job-postings` — List all job postings
- `GET /api/job-postings/{id}` — Get a single job posting
- `POST /api/job-postings` — Create a new job posting
- `PUT /api/job-postings/{id}` — Update a job posting
- `DELETE /api/job-postings/{id}` — Delete a job posting (soft delete)
- `GET /api/job-postings/search` — Search job postings
- `GET /api/job-postings/count` — Get job postings count
- `POST /api/job-postings/{id}/restore` — Restore a soft-deleted job posting
- `DELETE /api/job-postings/{id}/force` — Permanently delete a job posting

#### Users
- `GET /api/users` — List all users
- `GET /api/users/{id}` — Get a single user
- `POST /api/users` — Create a new user
- `PUT /api/users/{id}` — Update a user
- `DELETE /api/users/{id}` — Delete a user
- `GET /api/users/search` — Search users
- `GET /api/users/count` — Get users count

For more details, see [Orion documentation](https://orion.starfolkstudio.com/docs/endpoints/resource).

## Assumptions Made
- Uses Spatie roles for user role management
- Only basic validation and error handling implemented

## Known Issues
- Any bugs or incomplete features should be listed here
