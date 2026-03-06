/**
 * HeaderStyles.js — SIMPLIFIED
 * ------------------------------
 * Most header elements now use antd Button/Space components.
 * Only the HeaderWrapper remains as a styled-component
 * because it provides the gradient background and sticky positioning
 * that antd doesn't provide out of the box.
 */
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background: ${({ theme }) => theme.headerBg};
  color: ${({ theme }) => theme.headerText};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadow};
  position: sticky;
  top: 0;
  z-index: 100;
  flex-wrap: wrap;
  gap: 0.75rem;

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;