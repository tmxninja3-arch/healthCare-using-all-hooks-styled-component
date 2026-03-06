/**
 * PatientForm.js
 * ---------------
 * Collects patient data, calculates BMI and
 * calls the parent's addPatient callback.
 *
 * Hooks demonstrated: useState, useRef, useEffect
 */
import { useState, useRef, useEffect } from 'react';
import {
  FormContainer,
  FormTitle,
  FormGrid,
  InputGroup,
  Label,
  Input,
  SubmitButton,
} from '../../styles/PatientFormStyles';

// Initial (empty) form state
const EMPTY_FORM = {
  name: '',
  age: '',
  weight: '',
  height: '',
  heartRate: '',
};

const PatientForm = ({ onAddPatient }) => {
  /**
   * useState – controlled inputs for every form field.
   */
  const [formData, setFormData] = useState(EMPTY_FORM);

  /**
   * useRef – reference to the name input so we can
   * auto-focus it on mount and after each submission.
   */
  const nameInputRef = useRef(null);

  /**
   * useEffect – auto-focus the name input once the
   * component mounts (empty dependency array).
   */
  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  /** Generic change handler for all inputs */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /** Calculate BMI: weight(kg) / (height(m))² */
  const calculateBMI = (weight, heightCm) => {
    const heightM = heightCm / 100;
    return (weight / (heightM * heightM)).toFixed(1);
  };

  /** Form submission */
  const handleSubmit = (e) => {
    e.preventDefault(); // HTML5 validation has already passed

    const { name, age, weight, height, heartRate } = formData;
    const bmi = parseFloat(calculateBMI(Number(weight), Number(height)));

    const newPatient = {
      id: Date.now(), // simple unique id
      name: name.trim(),
      age: Number(age),
      weight: Number(weight),
      height: Number(height),
      heartRate: Number(heartRate),
      bmi,
      createdAt: new Date().toISOString(),
    };

    onAddPatient(newPatient);

    // Reset form & re-focus name input
    setFormData(EMPTY_FORM);
    nameInputRef.current?.focus();
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>➕ Add Patient</FormTitle>

      <FormGrid>
        {/* Name – full width, auto-focused */}
        <InputGroup className="full-width">
          <Label htmlFor="name">Patient Name</Label>
          <Input
            ref={nameInputRef}
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
            minLength={2}
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="age">Age (years)</Label>
          <Input
            id="age"
            name="age"
            type="number"
            placeholder="35"
            value={formData.age}
            onChange={handleChange}
            required
            min={0}
            max={150}
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="weight">Weight (kg)</Label>
          <Input
            id="weight"
            name="weight"
            type="number"
            step="0.1"
            placeholder="70"
            value={formData.weight}
            onChange={handleChange}
            required
            min={1}
            max={500}
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="height">Height (cm)</Label>
          <Input
            id="height"
            name="height"
            type="number"
            placeholder="175"
            value={formData.height}
            onChange={handleChange}
            required
            min={30}
            max={300}
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="heartRate">Heart Rate (bpm)</Label>
          <Input
            id="heartRate"
            name="heartRate"
            type="number"
            placeholder="80"
            value={formData.heartRate}
            onChange={handleChange}
            required
            min={20}
            max={300}
          />
        </InputGroup>

        <SubmitButton type="submit">Add Patient</SubmitButton>
      </FormGrid>
    </FormContainer>
  );
};

export default PatientForm;