/**
 * PageStyles.js — NEW
 * --------------------
 * Shared styled components used by DashboardPage
 * and PatientListPage for consistent page layouts.
 */
import styled, { keyframes } from 'styled-components';

/* Subtle fade-in when a page mounts */
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const PageWrapper = styled.div`
  animation: ${fadeIn} 0.3s ease;
`;

export const PageTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

export const PageDescription = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

/* Two-column grid for DashboardPage (stats on top, form below) */
export const DashboardGrid = styled.div`
  display: grid;
  gap: 1.5rem;
`;

/* SearchBar sits above the patient list */
export const PatientListLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

/* Patient count badge next to page title */
export const CountBadge = styled.span`
  background: ${({ theme }) => theme.primaryLight};
  color: ${({ theme }) => theme.primary};
  padding: 0.2rem 0.8rem;
  border-radius: 2rem;
  font-size: 0.85rem;
  font-weight: 700;
`;