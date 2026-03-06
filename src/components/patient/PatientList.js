
import { Empty, Row, Col, Typography } from 'antd';
import PatientCard from './PatientCard';

const { Title, Text } = Typography;

const PatientList = ({ patients, totalCount, onDeletePatient }) => {
  if (totalCount === 0) {
    return (
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description={
          <Text type="secondary">
            No patients yet. Add your first patient from the Dashboard!
          </Text>
        }
        style={{ padding: '3rem 0' }}
      />
    );
  }

  if (patients.length === 0) {
    return (
      <Empty
        description={
          <Text type="secondary">
            No patients match your search criteria.
          </Text>
        }
        style={{ padding: '3rem 0' }}
      />
    );
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 16,
        }}
      >
        <Title level={4} style={{ margin: 0 }}>
          📋 Patient Records
        </Title>
        <Text type="secondary">
          Showing {patients.length} of {totalCount}
        </Text>
      </div>

      <Row gutter={[16, 16]}>
        {patients.map((patient) => (
          <Col xs={24} sm={24} md={12} lg={8} key={patient.id}>
            <PatientCard patient={patient} onDelete={onDeletePatient} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PatientList;