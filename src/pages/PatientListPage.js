/**
 * PatientListPage.js — UPDATED
 * ------------------------------
 * Uses antd Typography + Tag for page header.
 * Search/filter state and useMemo logic unchanged.
 */
import { useState, useMemo, useCallback } from 'react';
import { Typography, Tag } from 'antd';
import SearchBar from '../components/patient/SearchBar';
import PatientList from '../components/patient/PatientList';
import { PageWrapper } from '../styles/PageStyles';

const { Title, Paragraph } = Typography;

const PatientListPage = ({ patients, onDeletePatient }) => {
  const [searchText, setSearchText] = useState('');
  const [criticalFilter, setCriticalFilter] = useState(false);

  const filteredPatients = useMemo(() => {
    let result = patients;

    if (searchText.trim()) {
      const query = searchText.toLowerCase().trim();
      result = result.filter((p) =>
        p.name.toLowerCase().includes(query)
      );
    }

    if (criticalFilter) {
      result = result.filter((p) => p.heartRate > 120);
    }

    return result;
  }, [patients, searchText, criticalFilter]);

  const toggleCriticalFilter = useCallback(() => {
    setCriticalFilter((prev) => !prev);
  }, []);


  
  return (
    <PageWrapper>
      <Title level={2}>
        👥 Patient Records{' '}
        <Tag color="blue" style={{ fontSize: '0.6em', verticalAlign: 'middle' }}>
          {patients.length} total
        </Tag>
      </Title>
      <Paragraph type="secondary">
        View, search, and manage all registered patients.
        Filter by name or show only critical cases.
      </Paragraph>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <SearchBar
          searchText={searchText}
          onSearchChange={setSearchText}
          criticalFilter={criticalFilter}
          onToggleCriticalFilter={toggleCriticalFilter}
        />

        <PatientList
          patients={filteredPatients}
          totalCount={patients.length}
          onDeletePatient={onDeletePatient}
        />
      </div>
    </PageWrapper>
  );
};

export default PatientListPage;