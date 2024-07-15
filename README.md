<!--This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel
# Event Dazzle

## Project Overview
Event Dazzle is a web application that provides information about all the events happening nearby and allows users to book tickets for these events. Whether it's a concert, movie premiere, seminar, or webinar, Event Dazzle has got you covered. The application uses location APIs to find the nearest events and offers a seamless ticket booking experience.

This project is made using Next.js and TypeScript, with Clerk for user authorization and Stripe as the payment gateway.

## Features
- **Event Listings**: Browse through a variety of events including concerts, movie premieres, seminars, webinars, and more.
- **Location-Based Search**: Find events happening near you using location APIs.
- **User Authentication**: Secure user login and registration using Clerk.
- **Ticket Booking**: Book tickets for events with integrated Stripe payment gateway.
- **Responsive Design**: Mobile-friendly interface for easy access on any device.

## Technologies Used
- **Frontend**: Next.js, TypeScript
- **Authorization**: Clerk
- **Payment Gateway**: Stripe
- **Database**: MongoDB
- **Other Tools**: Git, GitHub, VSCode

## How to Run
1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/event-dazzle.git

2. **Navigate to the project directory**:
   ```sh
   cd event-dazzle

3. **Install dependencies**:
   ```sh
   npm install

4. **Set up environment variables**:
   - Create a .env file in the root directory.
   - Add your Clerk, Stripe API keys and MongoDB Password.
    
5. **Start the development server**:
   ```sh
   npm run dev
