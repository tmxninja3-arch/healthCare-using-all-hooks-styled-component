import { memo } from 'react';
import {
  Card,
  Tag,
  Descriptions,
  Popconfirm,
  Button,
  Badge,
} from 'antd';
import {
  DeleteOutlined,
  WarningOutlined,
  HeartOutlined,
} from '@ant-design/icons';

const getBMICategory = (bmi) => {
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 25) return 'Normal';
  if (bmi < 30) return 'Overweight';
  return 'Obese';
};

const getBMIColor = (category) => {
  switch (category) {
    case 'Underweight':
      return 'blue';
    case 'Normal':
      return 'green';
    case 'Overweight':
      return 'orange';
    case 'Obese':
      return 'red';
    default:
      return 'default';
  }
};

const PatientCard = ({ patient, onDelete }) => {
  const { id, name, age, weight, height, heartRate, bmi } = patient;
  const isCritical = heartRate > 120;
  const bmiCategory = getBMICategory(bmi);

  // The card content — used with or without Badge.Ribbon
  const cardContent = (
    <Card
      size="small"
      title={
        <span>
          {isCritical && <WarningOutlined style={{ color: '#ef233c', marginRight: 6 }} />}
          {name}
        </span>
      }
      extra={
        <Popconfirm
          title="Delete patient"
          description={`Remove ${name} from records?`}
          onConfirm={() => onDelete(id)}
          okText="Yes"
          cancelText="No"
          okButtonProps={{ danger: true }}
        >
          <Button
            danger
            shape="circle"
            size="small"
            icon={<DeleteOutlined />}
          />
        </Popconfirm>
      }
      hoverable
      style={{
        borderLeft: `4px solid ${isCritical ? '#ef233c' : '#4361ee'}`,
      }}
    >
      <Descriptions size="small" column={2}>
        <Descriptions.Item label="Age">{age} yrs</Descriptions.Item>
        <Descriptions.Item label="Weight">{weight} kg</Descriptions.Item>
        <Descriptions.Item label="Height">{height} cm</Descriptions.Item>
        <Descriptions.Item label="Heart Rate">
          <span
            style={{
              color: isCritical ? '#ef233c' : '#06d6a0',
              fontWeight: 700,
            }}
          >
            <HeartOutlined /> {heartRate} bpm
            {isCritical && ' ⚠️'}
          </span>
        </Descriptions.Item>
        <Descriptions.Item label="BMI" span={2}>
          {bmi}{' '}
          <Tag color={getBMIColor(bmiCategory)}>{bmiCategory}</Tag>
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );

  // Wrap in Badge.Ribbon if critical
  if (isCritical) {
    return (
      <Badge.Ribbon text="CRITICAL" color="red">
        {cardContent}
      </Badge.Ribbon>
    );
  }

  return cardContent;
};

export default memo(PatientCard);