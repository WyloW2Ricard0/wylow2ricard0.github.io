# Portfolio Web Application

React + TypeScript + Material-UI (MUI) portfolio application with Supabase authentication and database integration.

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **UI Framework**: Material-UI (MUI) v6
- **Routing**: React Router v6
- **State Management**: Context API
- **Backend**: Supabase (Authentication + Database)
- **Build Tool**: Create React App
- **Hosting**: GitHub Pages

## Project Structure

```
src/
├── assets/              # Static files (images, icons, articles)
├── components/
│   ├── atoms/          # Basic components
│   ├── molecules/      # Component compositions
│   ├── organisms/      # Complex components
│   ├── templates/      # Page templates
│   └── layouts/        # Layout components
├── contexts/           # Context API (Auth, Theme)
├── hooks/              # Custom React hooks
├── lib/                # Utilities (Supabase client)
├── pages/              # Page components
├── styles/             # Global styles
├── types/              # TypeScript type definitions
├── App.tsx             # Main App component
└── index.tsx           # Entry point
```

## Setup Instructions

### 1. Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Supabase account

### 2. Installation

```bash
# Install dependencies
npm install

# Create .env file
cp .env.example .env
```

### 3. Supabase Configuration

Create a `.env` file in the root directory with your Supabase credentials:

```env
REACT_APP_SUPABASE_URL=https://your-project.supabase.co
REACT_APP_SUPABASE_ANON_KEY=your-anon-key-here
REACT_APP_BASENAME=/
```

### 4. Running the Application

```bash
# Development
npm start

# Build for production
npm run build

# Test
npm test
```

## Database Schema (Supabase)

### Users Table (Auto-created by Supabase Auth)

### Courses Table

```sql
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  content TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Applications Table

```sql
CREATE TABLE applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  url VARCHAR(512) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## Features

- ✅ User Authentication (Sign In, Sign Up)
- ✅ Protected Routes (Dashboard, Courses, Applications)
- ✅ Responsive Design with MUI
- ✅ TypeScript for type safety
- ✅ Context API for state management
- ✅ Supabase Integration

## Deployment to GitHub Pages

### 1. Update package.json

The `homepage` field is already set to `https://wylow2ricard0.github.io`

### 2. Install gh-pages

```bash
npm install --save-dev gh-pages
```

### 3. Deploy

```bash
npm run deploy
```

The site will be available at: https://wylow2ricard0.github.io

## MUI Templates Integration

This project uses Material-UI components directly. To use official MUI templates:

1. Visit: https://github.com/mui/material-ui/tree/v7.3.6/docs/data/material/getting-started/templates
2. Available templates:
   - Blog Template
   - Dashboard Template
   - Sign In / Sign Up Templates
   - Checkout Template
   - Marketing Page Template
   - CRUD Dashboard Template

Components can be imported and adapted as needed.

## Environment Variables

- `REACT_APP_SUPABASE_URL`: Your Supabase project URL
- `REACT_APP_SUPABASE_ANON_KEY`: Your Supabase anonymous key
- `REACT_APP_BASENAME`: Base URL path (default: `/`)

## Contributing

See CONTRIBUTING.md for contribution guidelines.

## License

See LICENSE.md for license information.

## Support

For issues and questions, please create a GitHub issue.
