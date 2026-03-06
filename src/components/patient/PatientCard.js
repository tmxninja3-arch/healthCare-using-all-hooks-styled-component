/**
 * PatientCard.js
 * ---------------
 * Displays a single patient's information.
 * Wrapped in React.memo so it only re-renders when its
 * own props change — critical for long lists.
 *
 * Performance: React.memo, receives stable onDelete via useCallback
 */
import { memo } from 'react';
import {
  Card,
  CardHeader,
  PatientName,
  DeleteBtn,
  CardBody,
  InfoRow,
  InfoLabel,
  InfoValue,
  HeartRateValue,
  BMIBadge,
  BMIRow,
} from '../../styles/PatientCardStyles';

/** Determine BMI category string */
const getBMICategory = (bmi) => {
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 25) return 'Normal';
  if (bmi < 30) return 'Overweight';
  return 'Obese';
};

const PatientCard = ({ patient, onDelete }) => {
  const {
    id,
    name,
    age,
    weight,
    height,
    heartRate,
    bmi,
  } = patient;

  // Heart rate above 120 bpm is considered critical
  const isCritical = heartRate > 120;
  const bmiCategory = getBMICategory(bmi);

  return (
    <Card $critical={isCritical}>
      <CardHeader>
        <PatientName>
          {isCritical && '🔴 '}
          {name}
        </PatientName>
        <DeleteBtn
          onClick={() => onDelete(id)}
          title="Delete patient"
          aria-label={`Delete ${name}`}
        >
          ✕
        </DeleteBtn>
      </CardHeader>

      <CardBody>
        <InfoRow>
          <InfoLabel>Age</InfoLabel>
          <InfoValue>{age} years</InfoValue>
        </InfoRow>

        <InfoRow>
          <InfoLabel>Weight</InfoLabel>
          <InfoValue>{weight} kg</InfoValue>
        </InfoRow>

        <InfoRow>
          <InfoLabel>Height</InfoLabel>
          <InfoValue>{height} cm</InfoValue>
        </InfoRow>

        <InfoRow>
          <InfoLabel>Heart Rate</InfoLabel>
          <HeartRateValue $critical={isCritical}>
            {heartRate} bpm {isCritical && '⚠️'}
          </HeartRateValue>
        </InfoRow>

        <BMIRow>
          <InfoRow>
            <InfoLabel>BMI</InfoLabel>
            <InfoValue>{bmi}</InfoValue>
          </InfoRow>
          <BMIBadge $category={bmiCategory}>{bmiCategory}</BMIBadge>
        </BMIRow>
      </CardBody>
    </Card>
  );
};

// React.memo – prevents unnecessary re-renders
export default memo(PatientCard);