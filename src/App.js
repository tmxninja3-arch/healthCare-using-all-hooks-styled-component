
import { useContext, useMemo, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ConfigProvider, theme as antdTheme } from 'antd';

import { ThemeContext } from './context/ThemeContext';
import useLocalStorage from './hooks/useLocalStorage';

import { lightTheme, darkTheme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import { AppContainer, MainContent } from './styles/AppStyles';

import Header from './components/layout/Header';
import DashboardPage from './pages/DashboardPage';
import PatientListPage from './pages/PatientListPage';

const App = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  const [patients, setPatients] = useLocalStorage('patients', []);

  const criticalCount = useMemo(() => {
    return patients.filter((p) => p.heartRate > 120).length;
  }, [patients]);

  const averageBMI = useMemo(() => {
    if (patients.length === 0) return '0.0';
    const total = patients.reduce((sum, p) => sum + p.bmi, 0);
    return (total / patients.length).toFixed(1);
  }, [patients]);

  const addPatient = useCallback(
    (newPatient) => {
      setPatients((prev) => [...prev, newPatient]);
    },
    [setPatients]
  );

  const deletePatient = useCallback(
    (id) => {
      setPatients((prev) => prev.filter((p) => p.id !== id));
    },
    [setPatients]
  );

  /**
   * Ant Design theme configuration
   * We sync antd's algorithm with our isDarkMode state
   * and override primary colour to match our brand.
   */
  const antDesignTheme = useMemo(
    () => ({
      algorithm: isDarkMode
        ? antdTheme.darkAlgorithm
        : antdTheme.defaultAlgorithm,
      token: {
        colorPrimary: isDarkMode ? '#58a6ff' : '#4361ee',
        colorError: isDarkMode ? '#f85149' : '#ef233c',
        colorSuccess: isDarkMode ? '#3fb950' : '#06d6a0',
        colorWarning: isDarkMode ? '#e3b341' : '#ff9f1c',
        colorInfo: isDarkMode ? '#79c0ff' : '#4cc9f0',
        borderRadius: 8,
        fontFamily:
          "'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      },
    }),
    [isDarkMode]
  );

  return (
    // ConfigProvider wraps EVERYTHING for antd theming
    <ConfigProvider theme={antDesignTheme}>
      <StyledThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <AppContainer>
          <Header />
          <MainContent>
            <Routes>
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
    </ConfigProvider>
  );
};

export default App;