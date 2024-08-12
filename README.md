# Flight Booking App

## Overview

This project is a Flight Booking App built with modern web technologies. The app allows users to book flights, manage reservations, and view available seats on flights. The app's backend is powered by PostgreSQL and managed with Prisma ORM, while the frontend is developed using Next.js, TypeScript, and Tailwind CSS.

## Features

- User Authentication: Implemented with Lucia Auth for secure user login and registration.
- Flight Management: Add, update, and view flight details.
- Ticket Booking: Users can book tickets for flights.
- Seat Management: View available seats and manage seat reservations.
- Responsive Design: UI built with ShadCN UI and styled using Tailwind CSS for a responsive and modern design.
- Cloud Deployment: Hosted on Vercel with a cloud database using Supabase.

## Technology Used

- Next.js 14: A React framework for production with server-side rendering and static site generation.
- TypeScript: Type-safe JavaScript.
- PostgreSQL: Relational database for storing application data.
- Prisma: ORM for database management.
- Tailwind CSS: Utility-first CSS framework for styling.
- ShadCN UI: A collection of UI components styled with Tailwind CSS.
- Lucia Auth: Authentication library for securing user access.
- Zod Validation: TypeScript-first schema validation with static type inference
- Supabase: Backend as a service that provides a managed PostgreSQL database.
- Vercel: Platform for front-end frameworks and static sites, perfect for Next.js.

## ERD (Entity Relationship Diagram)
![Flight Booking App](https://github.com/user-attachments/assets/2e743171-2c8b-4109-b46e-26493bc91daa)
### The application data is structured as shown in the following ERD:

- Users: Stores user information including authentication details.
- Airplane: Details about airplanes available in the system.
- Flight: Information about available flights, including departure and arrival details.
- Flight_Seat: Details about the seats on each flight, including seat number and booking status.
- Ticket: Stores booking information for each user, including flight and seat details.

## Getting Started

### Prerequisites
- Node.js 18 or later
- PostgreSQL
- Vercel CLI (for deployment)

### Installation

1. Clone The Repository
```bash
git clone https://github.com/yourusername/flight-booking-app.git
cd flight-booking-app
```

2. Install Dependency
```bash
npm install
```

3. Setup Environment Variable
```bash
DATABASE_URL=your-database-url
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
NEXTAUTH_URL=your-auth-url
```

4. Migrate Database
```bash
npx prisma migrate dev --name init
```

5. Run Development Server
```bash
npm run dev
```
