@echo off
echo Setting up Next.js Portfolio with shadcn/ui...
echo.

echo Installing basic dependencies...
npm install

echo.
echo Installing shadcn/ui dependencies...
npm install clsx tailwind-merge class-variance-authority
npm install @radix-ui/react-slot lucide-react

echo.
echo Installing shadcn/ui components...
npx shadcn@latest add button card badge input textarea separator tooltip

echo.
echo Installing additional dependencies...
npm install framer-motion next-themes zod

echo.
echo Starting development server...
npm run dev

