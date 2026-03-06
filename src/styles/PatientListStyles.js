import styled from 'styled-components';

export const ListSection = styled.section`
  margin-top: 2rem;
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const ListTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

export const PatientCount = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textSecondary};
`;

export const PatientGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.25rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const EmptyMessage = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1.1rem;

  span {
    font-size: 3rem;
    display: block;
    margin-bottom: 1rem;
  }
`;