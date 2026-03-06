/**
 * PatientList.js
 * ---------------
 * Renders the patient grid or an empty-state message.
 *
 * Receives the already-filtered list from App so it
 * stays purely presentational.
 */
import PatientCard from './PatientCard';
import {
  ListSection,
  ListHeader,
  ListTitle,
  PatientCount,
  PatientGrid,
  EmptyMessage,
} from '../../styles/PatientListStyles';

const PatientList = ({ patients, totalCount, onDeletePatient }) => {
  // --- empty states ---
  if (totalCount === 0) {
    return (
      <ListSection>
        <EmptyMessage>
          <span>🩺</span>
          No patients yet. Add your first patient above!
        </EmptyMessage>
      </ListSection>
    );
  }

  if (patients.length === 0) {
    return (
      <ListSection>
        <EmptyMessage>
          <span>🔍</span>
          No patients match your search criteria.
        </EmptyMessage>
      </ListSection>
    );
  }

  return (
    <ListSection>
      <ListHeader>
        <ListTitle>📋 Patient Records</ListTitle>
        <PatientCount>
          Showing {patients.length} of {totalCount}
        </PatientCount>
      </ListHeader>

      <PatientGrid>
        {patients.map((patient) => (
          <PatientCard
            key={patient.id}
            patient={patient}
            onDelete={onDeletePatient}
          />
        ))}
      </PatientGrid>
    </ListSection>
  );
};

export default PatientList;