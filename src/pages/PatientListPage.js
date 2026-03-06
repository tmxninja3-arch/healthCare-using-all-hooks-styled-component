/**
 * PatientListPage.js — NEW
 * --------------------------
 * Renders on route: /patients
 *
 * Composes:
 *   1. SearchBar    — search by name + critical filter toggle
 *   2. PatientList  — grid of PatientCards
 *
 * HOOKS USED IN THIS FILE:
 *
 *   useState
 *     → searchText: the current search query string
 *     → criticalFilter: boolean toggle for critical-only view
 *     WHY HERE and not in App.js?
 *       These are LOCAL UI state for this page only.
 *       When the user navigates away to Dashboard and comes
 *       back, the search resets — that's expected UX.
 *       Keeping state local means App.js doesn't re-render
 *       when the user types in the search box.
 *
 *   useMemo
 *     → filteredPatients: derived from patients + searchText + criticalFilter
 *     → Only recalculates when one of these three actually changes
 *     → Moved here from App.js because filtering only matters on this page
 *
 *   useCallback
 *     → toggleCriticalFilter: stable function for SearchBar
 *     → Prevents SearchBar from unnecessary re-renders
 */
import { useState, useMemo, useCallback } from 'react';
import SearchBar from '../components/patient/SearchBar';
import PatientList from '../components/patient/PatientList';
import {
  PageWrapper,
  PageTitle,
  PageDescription,
  PatientListLayout,
  CountBadge,
} from '../styles/PageStyles';

const PatientListPage = ({ patients, onDeletePatient }) => {
  /**
   * useState — search text input
   * Local to this page: resets when navigating away.
   * This is INTENTIONAL — search context is page-specific.
   */
  const [searchText, setSearchText] = useState('');

  /**
   * useState — critical filter toggle
   * When true, only patients with heart rate > 120 are shown.
   */
  const [criticalFilter, setCriticalFilter] = useState(false);

  /**
   * useMemo — filtered patient list
   *
   * Dependencies: [patients, searchText, criticalFilter]
   *
   * WHEN IT RECALCULATES:
   *   ✓ User types in search       → searchText changes
   *   ✓ User toggles critical      → criticalFilter changes
   *   ✓ Patient added/deleted       → patients changes
   *
   * WHEN IT SKIPS:
   *   ✗ Theme toggled              → none of the 3 deps changed
   *   ✗ Window resized             → none of the 3 deps changed
   *
   * For 1000 patients, this saves potentially thousands
   * of string comparison operations per unrelated re-render.
   */
  const filteredPatients = useMemo(() => {
    let result = patients;

    // Text search — case-insensitive substring match
    if (searchText.trim()) {
      const query = searchText.toLowerCase().trim();
      result = result.filter((p) =>
        p.name.toLowerCase().includes(query)
      );
    }

    // Critical filter — heart rate above 120 bpm
    if (criticalFilter) {
      result = result.filter((p) => p.heartRate > 120);
    }

    return result;
  }, [patients, searchText, criticalFilter]);

  /**
   * useCallback — stable toggle function
   * Prevents SearchBar from re-rendering when unrelated state changes.
   * Empty dependency array because we use functional state update.
   */
  const toggleCriticalFilter = useCallback(() => {
    setCriticalFilter((prev) => !prev);
  }, []);

  return (
    <PageWrapper>
      {/* Page header with patient count badge */}
      <PageTitle>
        👥 Patient Records
        <CountBadge>{patients.length} total</CountBadge>
      </PageTitle>
      <PageDescription>
        View, search, and manage all registered patients.
        Filter by name or show only critical cases.
      </PageDescription>

      <PatientListLayout>
        {/* Search and filter controls */}
        <SearchBar
          searchText={searchText}
          onSearchChange={setSearchText}
          criticalFilter={criticalFilter}
          onToggleCriticalFilter={toggleCriticalFilter}
        />

        {/* Patient cards grid */}
        <PatientList
          patients={filteredPatients}
          totalCount={patients.length}
          onDeletePatient={onDeletePatient}
        />
      </PatientListLayout>
    </PageWrapper>
  );
};

export default PatientListPage;