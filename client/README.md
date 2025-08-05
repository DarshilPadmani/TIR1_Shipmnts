# React Vite Boilerplate

A clean, scalable React application built with Vite, featuring modern React patterns, routing, and styling.

## 🚀 Features

- **React 18** - Latest React with hooks and functional components
- **Vite** - Lightning fast build tool with HMR
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client with interceptors
- **Environment Variables** - Easy configuration management
- **Responsive Design** - Mobile-first approach

## 📁 Project Structure

```
client/
├── public/
├── src/
│   ├── components/
│   │   └── Navbar.jsx      # Reusable navigation component
│   ├── pages/
│   │   └── Home.jsx        # Home page component
│   ├── services/
│   │   └── api.js          # Axios instance with interceptors
│   ├── App.jsx             # Main app component with routing
│   ├── main.jsx            # React app entry point
│   └── index.css           # Global styles with Tailwind
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── postcss.config.js       # PostCSS configuration
```

## 🛠️ Setup & Installation

1. **Navigate to client directory**
   ```bash
   cd client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Copy the example environment file
   cp .env.example .env
   
   # Edit .env with your API endpoint
   # VITE_API_BASE_URL=http://localhost:5000/api
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

The application will open at `http://localhost:3000`

## 🔥 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🌐 API Integration

The app includes a pre-configured Axios instance in `src/services/api.js` with:

- Base URL configuration via environment variables
- Request/Response interceptors
- Authentication token handling
- Error handling for common HTTP status codes
- 10-second timeout

### Example Usage:

```javascript
import api from '../services/api'

// GET request
const response = await api.get('/samples')

// POST request
const newItem = await api.post('/samples', { name: 'Test' })

// PUT request
const updated = await api.put('/samples/123', { name: 'Updated' })

// DELETE request
await api.delete('/samples/123')
```

## 🎨 Styling

The project uses **Tailwind CSS** with:

- Custom color palette (primary colors)
- Responsive utilities
- Custom component classes in `src/index.css`
- Pre-built button styles (`.btn-primary`, `.btn-secondary`)

## 🧭 Routing

React Router DOM is configured with:

- `BrowserRouter` for clean URLs
- Basic route structure in `App.jsx`
- Ready for additional routes

### Adding New Routes:

```javascript
// In App.jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
```

## 📱 Components

### Navbar
- Responsive navigation with mobile menu
- Active link highlighting
- Mobile-first hamburger menu

### Home Page
- Hero section
- API connection testing
- Feature showcase cards

## 🔧 Environment Variables

Create a `.env` file in the client directory:

```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_NODE_ENV=development
```

**Note:** Vite requires the `VITE_` prefix for environment variables to be exposed to the client.

## 🚀 Quick Test

1. Start the development server: `npm run dev`
2. Visit: `http://localhost:3000`
3. Test API connection using the button on the home page
4. Navigate using the responsive navbar

## 🔗 Backend Integration

This frontend is designed to work with the Node.js + Express backend in the `../server` directory. 

To run the full stack:

1. Start the backend: `cd ../server && npm run dev`
2. Start the frontend: `cd client && npm run dev`
3. Test the connection using the "Test API Connection" button

## 📝 Notes

- The project is configured for modern JavaScript (ES6+)
- All components use functional components with hooks
- Styled with Tailwind CSS for rapid development
- Ready for authentication, state management, and additional features
- Perfect foundation for technical interviews and rapid prototyping

## 🤝 Ready for Interview

This boilerplate provides a solid React foundation that you can quickly extend during technical interviews. The structure is clean, follows React best practices, and includes modern tooling.
