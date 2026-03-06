/**
 * App.js — UPDATED
 * ------------------
 * Major change: replaced single-page layout with React Router.
 *
 * NEW HOOKS / FEATURES:
 *
 *   Routes + Route (react-router-dom)
 *     → Declares which component renders at which URL path
 *     → Only ONE route matches and renders at a time
 *     → Replaces the old single-page layout with two distinct pages
 *
 * WHAT MOVED WHERE:
 *
 *   STAYED in App.js:
 *     ✓ patients state (useLocalStorage) — shared by both pages
 *     ✓ addPatient (useCallback) — used by DashboardPage
 *     ✓ deletePatient (useCallback) — used by PatientListPage
 *     ✓ criticalCount (useMemo) — used by DashboardPage stats
 *     ✓ averageBMI (useMemo) — used by DashboardPage stats
 *     ✓ Theme context reading
 *     ✓ StyledThemeProvider wrapping
 *
 *   MOVED to PatientListPage.js:
 *     ✗ searchText (useState) — local to patient list view
 *     ✗ criticalFilter (useState) — local to patient list view
 *     ✗ filteredPatients (useMemo) — derived in patient list view
 *     ✗ toggleCriticalFilter (useCallback) — used only there
 *
 *   WHY this split?
 *     searchText and criticalFilter are PAGE-LOCAL state.
 *     They only matter when the user is on /patients.
 *     Keeping them in App.js would cause App to re-render
 *     on every keystroke in the search box, which would
 *     wastefully re-run the Routes matching logic.
 *
 * RENDER TREE:
 *   StyledThemeProvider
 *     → GlobalStyle
 *     → AppContainer
 *       → Header (with nav — always visible)
 *       → MainContent
 *         → Routes
 *           → "/" renders DashboardPage
 *           → "/patients" renders PatientListPage
 */
import { useContext, useMemo, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

// Context & custom hook
import { ThemeContext } from './context/ThemeContext';
import useLocalStorage from './hooks/useLocalStorage';

// Theme & styles
import { lightTheme, darkTheme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import { AppContainer, MainContent } from './styles/AppStyles';

// Layout components (always visible)
import Header from './components/layout/Header';

// Page components (rendered by router)
import DashboardPage from './pages/DashboardPage';
import PatientListPage from './pages/PatientListPage';

const App = () => {
  /* ═══════════════════════════════════════════
   *  THEME (useContext)
   * ═══════════════════════════════════════════ */
  const { isDarkMode } = useContext(ThemeContext);
  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  /* ═══════════════════════════════════════════
   *  PATIENT DATA (useLocalStorage = useState + useEffect)
   * ═══════════════════════════════════════════ */
  const [patients, setPatients] = useLocalStorage('patients', []);

  /* ═══════════════════════════════════════════
   *  MEMOISED STATISTICS (useMemo)
   *  Used by DashboardPage — computed from ALL patients
   * ═══════════════════════════════════════════ */

  /**
   * useMemo — count patients with heart rate > 120
   * Recalculates only when the patients array changes.
   */
  const criticalCount = useMemo(() => {
    return patients.filter((p) => p.heartRate > 120).length;
  }, [patients]);

  /**
   * useMemo — average BMI across all patients
   */
  const averageBMI = useMemo(() => {
    if (patients.length === 0) return '0.0';
    const total = patients.reduce((sum, p) => sum + p.bmi, 0);
    return (total / patients.length).toFixed(1);
  }, [patients]);

  /* ═══════════════════════════════════════════
   *  STABLE CALLBACKS (useCallback)
   *  Passed down to pages → memo'd children benefit
   * ═══════════════════════════════════════════ */

  /**
   * useCallback — add a new patient to the list.
   * Functional update: prev => [...prev, newPatient]
   * means we never need 'patients' in the dependency array.
   */
  const addPatient = useCallback(
    (newPatient) => {
      setPatients((prev) => [...prev, newPatient]);
    },
    [setPatients]
  );

  /**
   * useCallback — delete a patient by their unique id.
   */
  const deletePatient = useCallback(
    (id) => {
      setPatients((prev) => prev.filter((p) => p.id !== id));
    },
    [setPatients]
  );

  /* ═══════════════════════════════════════════
   *  RENDER
   * ═══════════════════════════════════════════ */
  return (
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <AppContainer>
        {/* Header is OUTSIDE Routes — always visible on every page */}
        <Header />

        <MainContent>
          {/*
            Routes — only the matching Route renders.
            
            "/" exact match → DashboardPage
            "/patients"    → PatientListPage
            
            React Router v6 uses element prop (not component/render).
            We pass props directly to the page component JSX.
          */}
          <Routes>
            {/* ── Dashboard Route ── */}
            <Route
              path="/"
              element={
                <DashboardPage
                  totalPatients={patients.length}
                  criticalCount={criticalCount}
                  averageBMI={averageBMI}
                  onAddPatient={addPatient}
                />
              }
            />

            {/* ── Patient List Route ── */}
            <Route
              path="/patients"
              element={
                <PatientListPage
                  patients={patients}
                  onDeletePatient={deletePatient}
                />
              }
            />
          </Routes>
        </MainContent>
      </AppContainer>
    </StyledThemeProvider>
  );
};

export default App;