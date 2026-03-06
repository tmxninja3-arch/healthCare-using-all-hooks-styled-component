import styled from 'styled-components';

export const SearchContainer = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadow};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SearchTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const SearchInput = styled.input`
  padding: 0.6rem 0.8rem;
  border: 2px solid ${({ theme }) => theme.inputBorder};
  border-radius: 8px;
  background: ${({ theme }) => theme.inputBg};
  color: ${({ theme }) => theme.text};
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s ease;
  width: 100%;

  &:focus {
    border-color: ${({ theme }) => theme.inputFocus};
  }
`;

/* filter toggle – $active drives appearance */
export const FilterButton = styled.button`
  padding: 0.6rem 1rem;
  border: 2px solid
    ${({ theme, $active }) => ($active ? theme.danger : theme.border)};
  border-radius: 8px;
  background: ${({ theme, $active }) =>
    $active ? theme.dangerLight : 'transparent'};
  color: ${({ theme, $active }) =>
    $active ? theme.danger : theme.textSecondary};
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  &:hover {
    border-color: ${({ theme }) => theme.danger};
    color: ${({ theme }) => theme.danger};
  }
`;