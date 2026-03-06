/**
 * DashboardPage.js — NEW
 * ------------------------
 * Renders on route: /
 *
 * Composes:
 *   1. DashboardStats — total patients, critical count, average BMI
 *   2. PatientForm    — form to add new patients
 *
 * This page is purely presentational — it receives all data
 * and callbacks as props from App.js.
 *
 * HOOKS USED IN THIS FILE:
 *   None directly — this is a "page layout" component that
 *   delegates to child components where hooks live.
 *
 * WHY SEPARATE PAGE FILES?
 *   - Follows the "Pages compose Components" pattern
 *   - Each route maps to exactly one page
 *   - Pages handle layout, components handle behaviour
 *   - Makes it trivial to add route-level code splitting later
 */
import DashboardStats from '../components/dashboard/DashboardStats';
import PatientForm from '../components/patient/PatientForm';
import {
  PageWrapper,
  PageTitle,
  PageDescription,
  DashboardGrid,
} from '../styles/PageStyles';

const DashboardPage = ({
  totalPatients,
  criticalCount,
  averageBMI,
  onAddPatient,
}) => {
  return (
    <PageWrapper>
      {/* Page header */}
      <PageTitle>📊 Dashboard Overview</PageTitle>
      <PageDescription>
        Monitor patient statistics at a glance and register new patients.
      </PageDescription>

      <DashboardGrid>
        {/* Statistics cards */}
        <DashboardStats
          totalPatients={totalPatients}
          criticalCount={criticalCount}
          averageBMI={averageBMI}
        />

        {/* Patient registration form */}
        <PatientForm onAddPatient={onAddPatient} />
      </DashboardGrid>
    </PageWrapper>
  );
};

export default DashboardPage;