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


  console.log("Total Patients:", totalPatients);
  console.log("Critical Patients:", criticalCount);
  console.log("Avg BMI:", averageBMI);
  
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