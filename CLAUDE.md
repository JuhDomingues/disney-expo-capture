# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

- **Development server**: `npm run dev` (runs on port 8080)
- **Build production**: `npm run build`
- **Build development**: `npm run build:dev`
- **Lint code**: `npm run lint`
- **Preview build**: `npm run preview`

## Project Architecture

This is a React-based landing page application built with modern web technologies. The project follows a component-based architecture with these key characteristics:

### Core Stack
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite with SWC for fast compilation
- **Styling**: Tailwind CSS with custom Disney-themed gradients and colors
- **UI Components**: shadcn/ui components with Radix UI primitives
- **Routing**: React Router DOM for client-side navigation
- **State Management**: TanStack Query for server state, React Hook Form for form state
- **Icons**: Lucide React

### Project Structure
- `src/pages/`: Main page components (Index.tsx is the landing page)
- `src/components/`: Reusable components organized by feature
  - `HeroSection.tsx`, `FormSection.tsx`, `RegulamentSection.tsx`, `Footer.tsx`
  - `ui/`: Complete shadcn/ui component library
- `src/hooks/`: Custom React hooks (mobile detection, toast notifications)
- `src/lib/`: Utility functions and shared logic
- `src/assets/`: Static assets including Disney-themed images

### Key Features
- Disney-themed promotional landing page with form capture
- Responsive design with mobile-first approach
- Custom Tailwind configuration with Disney brand colors and gradients
- Form handling with validation using React Hook Form + Zod
- Toast notifications using Sonner
- Component development tooling in development mode

### Styling System
- CSS variables for theming in `src/index.css`
- Custom Tailwind utilities for Disney brand elements
- Shadcn/ui components with consistent design tokens
- Custom gradients: `gradient-primary`, `gradient-golden`, `gradient-hero`
- Custom shadows: `divine`, `golden`

### Development Notes
- TypeScript configuration relaxed for rapid development (noImplicitAny: false, etc.)
- ESLint configured with React hooks and refresh plugins
- Path alias `@/` points to `src/` directory
- Component library managed through `components.json` configuration

### Form Architecture
The main form is in `FormSection.tsx` and likely captures user data for a Disney-related promotion or contest. The app includes regulation sections suggesting this is a promotional campaign.