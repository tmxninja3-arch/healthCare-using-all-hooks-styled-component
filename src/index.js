/**
 * index.js — UPDATED
 * -------------------
 * Added BrowserRouter at the TOP of the tree.
 *
 * WHY here and not inside App.js?
 *   BrowserRouter provides the routing context.
 *   Every component that uses useNavigate, useLocation,
 *   <Routes>, <Route>, or <Link> MUST be a descendant
 *   of BrowserRouter. Placing it here guarantees that
 *   even App.js itself can use router hooks if needed.
 *
 * Render tree:
 *   React.StrictMode
 *     → BrowserRouter        ← NEW (provides routing context)
 *       → ThemeProvider       (provides theme context)
 *         → App
 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* BrowserRouter wraps EVERYTHING so router hooks work everywhere */}
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);