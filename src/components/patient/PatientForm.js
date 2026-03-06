
import { useRef, useEffect } from 'react';
import { Form, Input, InputNumber, Button, Card } from 'antd';
import {
  UserOutlined,
  PlusOutlined,
  HeartOutlined,
} from '@ant-design/icons';

const PatientForm = ({ onAddPatient }) => {
  /**
   * Form.useForm() — antd hook
   * Returns [form] — a form instance with methods like:
   *   form.resetFields()     → clear all inputs
   *   form.validateFields()  → trigger validation
   *   form.setFieldsValue()  → set values programmatically
   */
  const [form] = Form.useForm();

  const nameInputRef = useRef(null);

  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  const calculateBMI = (weight, heightCm) => {
    const heightM = heightCm / 100;
    return (weight / (heightM * heightM)).toFixed(1);
  };

  /**
   * onFinish — called by antd Form ONLY when all rules pass
   * Receives an object with all field values: { name, age, weight, height, heartRate }
   * No need for e.preventDefault() — antd handles that.
   */
  const handleFinish = (values) => {
    const { name, age, weight, height, heartRate } = values;
    const bmi = parseFloat(calculateBMI(weight, height));

    const newPatient = {
      id: Date.now(),
      name: name.trim(),
      age,
      weight,
      height,
      heartRate,
      bmi,
      createdAt: new Date().toISOString(),
    };

    onAddPatient(newPatient);

    // Reset form using antd's form instance method
    form.resetFields();
    nameInputRef.current?.focus();
  };

  return (
    <Card title="➕ Add Patient" style={{ marginTop: 16 }}>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        requiredMark="optional"
      >
        {/* Name — full width */}
        <Form.Item
          label="Patient Name"
          name="name"
          rules={[
            { required: true, message: 'Please enter patient name' },
            { min: 2, message: 'Name must be at least 2 characters' },
          ]}
        >
          <Input
            ref={nameInputRef}
            placeholder="John Doe"
            prefix={<UserOutlined />}
            size="large"
          />
        </Form.Item>

        {/* Two-column row using inline styles */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16,
          }}
        >
          <Form.Item
            label="Age (years)"
            name="age"
            rules={[
              { required: true, message: 'Required' },
              {
                type: 'number',
                min: 0,
                max: 150,
                message: '0–150',
              },
            ]}
          >
            <InputNumber
              placeholder="35"
              style={{ width: '100%' }}
              size="large"
            />
          </Form.Item>

          <Form.Item
            label="Weight (kg)"
            name="weight"
            rules={[
              { required: true, message: 'Required' },
              {
                type: 'number',
                min: 1,
                max: 500,
                message: '1–500',
              },
            ]}
          >
            <InputNumber
              placeholder="70"
              step={0.1}
              style={{ width: '100%' }}
              size="large"
            />
          </Form.Item>

          <Form.Item
            label="Height (cm)"
            name="height"
            rules={[
              { required: true, message: 'Required' },
              {
                type: 'number',
                min: 30,
                max: 300,
                message: '30–300',
              },
            ]}
          >
            <InputNumber
              placeholder="175"
              style={{ width: '100%' }}
              size="large"
            />
          </Form.Item>

          <Form.Item
            label="Heart Rate (bpm)"
            name="heartRate"
            rules={[
              { required: true, message: 'Required' },
              {
                type: 'number',
                min: 20,
                max: 300,
                message: '20–300',
              },
            ]}
          >
            <InputNumber
              placeholder="80"
              prefix={<HeartOutlined />}
              style={{ width: '100%' }}
              size="large"
            />
          </Form.Item>
        </div>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            icon={<PlusOutlined />}
            size="large"
            block
          >
            Add Patient
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default PatientForm;