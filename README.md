## Job Board Application

This is a Job Board Application built with WorkOS, Next.js 14, ESLint, and Prettier. The goal of this project is to create a platform for job postings and applications, with seamless authentication using WorkOS.

## Prerequisites

- npm, yarn or pnpm (pnpm is recommended)
- WorkOS account
- MongoDB account

## Getting Started

### Clone the repository

```bash
git clone https://github.com/ferhatkefsiz/job-board.git
```

```bash
cd job-board
```

### Install dependencies

```bash
pnpm install
```

### Environment Variables

Create a `.env.local` file in the root of the project and add the following environment variables:

```bash
WORKOS_API_KEY=
WORKOS_CLIENT_ID=
WORKOS_COOKIE_PASSWORD=
NEXT_PUBLIC_WORKOS_REDIRECT_URI="http://localhost:3000/callback"
```

### WorkOS Configuration Guide

#### Sign Up and Log In to WorkOS

#### Create a New Project

After logging in, go to the Dashboard, Click on Create New Project Give your project a name (e.g., "Job Board App"), Click Create.

#### Obtain API Keys

Once the project is created, you'll be directed to the project settings. Under the API Keys section, you'll find your Client ID and Secret Key. Copy these keys, as they will be required in your application’s environment file (`.env.local`).

### Create Role

Go to the Roles section in the WorkOS Dashboard, click on Create Role, and give your role a name (e.g. "Employer", "Job Seeker"). You can also add permissions to the role.

### Run the development server

```bash
pnpm dev
```

Open `http://localhost:3000` in your browser to see the application.
