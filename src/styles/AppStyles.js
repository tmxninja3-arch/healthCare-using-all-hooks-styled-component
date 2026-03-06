/**
 * AppStyles.js — UPDATED
 * -----------------------
 * Simplified since page-specific layouts moved
 * to PageStyles.js and individual page components.
 * TopSection removed (no longer needed in App.js).
 */
import styled from 'styled-components';

/* Root wrapper — full viewport height */
export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
  transition: background-color 0.3s ease;
`;

/* Centres content with a max-width */
export const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;