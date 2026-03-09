import { memo, useRef, useEffect } from 'react';
import { Card, Statistic, Row, Col, Tag } from 'antd';
import {
  TeamOutlined,
  AlertOutlined,
  BarChartOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from '@ant-design/icons';

const DashboardStats = ({ totalPatients, criticalCount, averageBMI }) => {
  const prevCountRef = useRef(totalPatients);
  const change = totalPatients - prevCountRef.current;

  useEffect(() => {
    prevCountRef.current = totalPatients;
  }, [totalPatients]);

  return (
    <Row gutter={[16, 16]}>
      {/* Total Patients */}
      <Col xs={24} sm={8}>
        <Card hoverable>
          <Statistic
            title="Total Patients"
            value={totalPatients}
            prefix={<TeamOutlined />}
            Style={{ color: '#4361ee' }}
          />
          {change !== 0 && (
            <Tag
              color={change > 0 ? 'success' : 'error'}
              icon={
                change > 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />
              }
              style={{ marginTop: 8 }}
            >
              {change > 0 ? `+${change}` : change}
            </Tag>
          )}
        </Card>
      </Col>

      {/* Critical Patients */}
      <Col xs={24} sm={8}>
        <Card hoverable>
          <Statistic
            title="Critical (HR > 120)"
            value={criticalCount}
            prefix={<AlertOutlined />}
            Style={{ color: '#ef233c' }}
          />
        </Card>
      </Col>

      {/* Average BMI */}
      <Col xs={24} sm={8}>
        <Card hoverable>
          <Statistic
            title="Average BMI"
            value={averageBMI}
            prefix={<BarChartOutlined />}
            valueStyle={{ color: '#06d6a0' }}
            precision={1}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default memo(DashboardStats);