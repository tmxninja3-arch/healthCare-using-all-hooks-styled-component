/**
 * DashboardPage.js — UPDATED
 * ----------------------------
 * Uses antd Typography for page title/description.
 * Child components (DashboardStats, PatientForm) now
 * use antd internally.
 */
import { Typography } from 'antd';
import DashboardStats from '../components/dashboard/DashboardStats';
import PatientForm from '../components/patient/PatientForm';
import { PageWrapper } from '../styles/PageStyles';

const { Title, Paragraph } = Typography;

const DashboardPage = ({
  totalPatients,
  criticalCount,
  averageBMI,
  onAddPatient,
}) => {
  return (
    <PageWrapper>
      <Title level={2}>📊 Dashboard Overview</Title>
      <Paragraph type="secondary">
        Monitor patient statistics at a glance and register new patients.
      </Paragraph>

      <DashboardStats
        totalPatients={totalPatients}
        criticalCount={criticalCount}
        averageBMI={averageBMI}
      />

      <PatientForm onAddPatient={onAddPatient} />
    </PageWrapper>
  );
};

export default DashboardPage;