/**
 * DashboardStats.js — UPDATED WITH ANT DESIGN
 * ----------------------------------------------
 * NEW antd components:
 *
 *   Card — replaces custom StatCard
 *     → Provides consistent padding, shadow, border radius
 *     → hoverable prop adds lift-on-hover effect automatically
 *     → bordered prop controls border visibility
 *
 *   Statistic — purpose-built for displaying numbers
 *     → title prop = label text
 *     → value prop = the number
 *     → prefix prop = icon before the value
 *     → suffix prop = text after the value
 *     → valueStyle prop = inline styles for the value
 *
 *   Row, Col — antd grid system
 *     → Replaces CSS Grid for the 3-column layout
 *     → gutter prop = gap between columns
 *     → xs/sm/md/lg props = responsive column spans
 *     → 24-column grid: span={8} = 1/3 width
 *
 *   Tag — small coloured label
 *     → Shows the change indicator (▲ +2 or ▼ -1)
 *     → color prop accepts "success", "error" etc.
 *
 * NEW antd icons:
 *   TeamOutlined, AlertOutlined, BarChartOutlined,
 *   ArrowUpOutlined, ArrowDownOutlined
 */
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
            valueStyle={{ color: '#4361ee' }}
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
            valueStyle={{ color: '#ef233c' }}
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