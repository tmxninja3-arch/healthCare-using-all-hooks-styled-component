import styled, { css, keyframes } from 'styled-components';

/* slide-in animation for newly rendered cards */
const slideIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0);    }
`;

export const Card = styled.article`
  background: ${({ theme, $critical }) =>
    $critical ? theme.dangerLight : theme.card};
  border-radius: 12px;
  padding: 1.25rem;
  box-shadow: ${({ theme }) => theme.shadow};
  border-left: 4px solid
    ${({ theme, $critical }) => ($critical ? theme.danger : theme.primary)};
  position: relative;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  animation: ${slideIn} 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadowHover};
  }

  /* red glow for critical patients */
  ${({ $critical, theme }) =>
    $critical &&
    css`
      box-shadow: 0 0 0 1px ${theme.dangerLight},
        ${theme.shadow};
    `}
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
`;

export const PatientName = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
`;

export const DeleteBtn = styled.button`
  background: ${({ theme }) => theme.dangerLight};
  color: ${({ theme }) => theme.danger};
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.danger};
    color: #fff;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
`;

export const InfoLabel = styled.span`
  color: ${({ theme }) => theme.textSecondary};
`;

export const InfoValue = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

/* heart-rate value turns red when critical */
export const HeartRateValue = styled.span`
  font-weight: 700;
  color: ${({ theme, $critical }) =>
    $critical ? theme.danger : theme.success};
`;

/* BMI badge – colour depends on category */
export const BMIBadge = styled.span`
  display: inline-block;
  padding: 0.2rem 0.7rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 700;
  margin-top: 0.5rem;

  ${({ $category, theme }) => {
    switch ($category) {
      case 'Underweight':
        return css`
          background: ${theme.infoLight};
          color: ${theme.info};
        `;
      case 'Normal':
        return css`
          background: ${theme.successLight};
          color: ${theme.success};
        `;
      case 'Overweight':
        return css`
          background: ${theme.warningLight};
          color: ${theme.warning};
        `;
      case 'Obese':
        return css`
          background: ${theme.dangerLight};
          color: ${theme.danger};
        `;
      default:
        return css`
          background: ${theme.primaryLight};
          color: ${theme.primary};
        `;
    }
  }}
`;

export const BMIRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid ${({ theme }) => theme.border};
`;