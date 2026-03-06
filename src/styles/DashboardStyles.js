import styled from 'styled-components';

export const StatsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

/* Each stat card accepts $accent (colour name key) */
export const StatCard = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadow};
  border-left: 4px solid ${({ theme, $accent }) => theme[$accent] || theme.primary};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadowHover};
  }
`;

export const StatIcon = styled.span`
  font-size: 1.8rem;
`;

export const StatValue = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin: 0.25rem 0;
`;

export const StatLabel = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textSecondary};
`;

export const StatChange = styled.span`
  font-size: 0.8rem;
  color: ${({ $positive, theme }) =>
    $positive ? theme.success : theme.danger};
  font-weight: 600;
`;