import styled from 'styled-components';

export const FormContainer = styled.form`
  background: ${({ theme }) => theme.card};
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const FormTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  /* let the name field span full width */
  &.full-width {
    grid-column: 1 / -1;
  }
`;

export const Label = styled.label`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 0.3rem;
`;

export const Input = styled.input`
  padding: 0.6rem 0.8rem;
  border: 2px solid ${({ theme }) => theme.inputBorder};
  border-radius: 8px;
  background: ${({ theme }) => theme.inputBg};
  color: ${({ theme }) => theme.text};
  font-size: 0.95rem;
  transition: border-color 0.2s ease;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.inputFocus};
  }

  &::placeholder {
    color: ${({ theme }) => theme.textSecondary};
    opacity: 0.6;
  }
`;

export const SubmitButton = styled.button`
  grid-column: 1 / -1;
  margin-top: 0.5rem;
  padding: 0.75rem;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;

  &:hover {
    background: ${({ theme }) => theme.primaryHover};
  }
  &:active {
    transform: scale(0.98);
  }
`;