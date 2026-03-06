/**
 * Header.js — UPDATED
 * --------------------
 * Now includes navigation buttons for Dashboard and Patient List.
 *
 * NEW HOOKS USED:
 *
 *   useNavigate (react-router-dom)
 *     → Programmatically navigate to different routes
 *     → Called inside click handlers: navigate('/') or navigate('/patients')
 *     → Returns a stable function reference (no need for useCallback wrapper)
 *
 *   useLocation (react-router-dom)
 *     → Returns the current location object { pathname, search, hash }
 *     → We read location.pathname to determine which button is "active"
 *     → Re-renders the component whenever the URL changes
 *     → This is what makes the active highlight update in real time
 *
 *   useContext (unchanged)
 *     → Reads isDarkMode and toggleTheme from ThemeContext
 */
import { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import {
  HeaderWrapper,
  Logo,
  NavGroup,
  NavButton,
  HeaderControls,
  ThemeButton,
} from '../../styles/HeaderStyles';

const Header = () => {
  // ── useContext ──
  // Read theme state from context (avoids prop drilling)
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  // ── useNavigate ──
  // Returns a function we call to change the URL programmatically.
  // navigate('/') goes to Dashboard, navigate('/patients') goes to list.
  // This replaces <Link> components when we need button-style navigation.
  const navigate = useNavigate();

  // ── useLocation ──
  // Returns { pathname: '/patients', search: '', hash: '' }
  // We compare pathname to determine which nav button is currently active.
  // React re-renders this component whenever the URL changes,
  // so the active highlight updates instantly.
  const location = useLocation();

  // Derive active state from current pathname
  const isDashboardActive = location.pathname === '/';
  const isPatientListActive = location.pathname === '/patients';

  return (
    <HeaderWrapper>
      {/* Logo — clicking it navigates to dashboard */}
      <Logo onClick={() => navigate('/')}>
        🏥 Smart Patient Dashboard
      </Logo>

      {/* ── Navigation Buttons ── */}
      <NavGroup>
        {/*
          NavButton $active prop:
            - Uses useLocation().pathname to check if we're on '/'
            - $active is a styled-components transient prop (not sent to DOM)
            - When true: button gets highlighted background + bottom indicator
        */}
        <NavButton
          $active={isDashboardActive}
          onClick={() => navigate('/')}
          aria-current={isDashboardActive ? 'page' : undefined}
        >
          📊 Dashboard
        </NavButton>

        <NavButton
          $active={isPatientListActive}
          onClick={() => navigate('/patients')}
          aria-current={isPatientListActive ? 'page' : undefined}
        >
          👥 Patient List
        </NavButton>
      </NavGroup>

      {/* ── Theme Toggle ── */}
      <HeaderControls>
        <ThemeButton onClick={toggleTheme}>
          {isDarkMode ? '☀️ Light' : '🌙 Dark'}
        </ThemeButton>
      </HeaderControls>
    </HeaderWrapper>
  );
};

export default Header;