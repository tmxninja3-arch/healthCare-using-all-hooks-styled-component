/**
 * DashboardStats.js
 * ------------------
 * Renders three statistics cards: total patients,
 * critical patient count and average BMI.
 *
 * Hooks demonstrated: useRef, useEffect (for previous count)
 * Performance       : React.memo wrapper
 */
import { memo, useRef, useEffect } from 'react';
import {
  StatsGrid,
  StatCard,
  StatIcon,
  StatValue,
  StatLabel,
  StatChange,
} from '../../styles/DashboardStyles';

const DashboardStats = ({ totalPatients, criticalCount, averageBMI }) => {
  /**
   * useRef – store the PREVIOUS patient count so we can
   * display a change indicator (▲ / ▼).  The ref survives
   * re-renders without causing new ones.
   */
  const prevCountRef = useRef(totalPatients);

  // Compute change BEFORE the effect updates the ref
  const change = totalPatients - prevCountRef.current;

  /**
   * useEffect – update the ref AFTER render so the next
   * render can compare against the "old" value.
   */
  useEffect(() => {
    prevCountRef.current = totalPatients;
  }, [totalPatients]);

  return (
    <StatsGrid>
      {/* --- Total Patients --- */}
      <StatCard $accent="primary">
        <StatIcon>👥</StatIcon>
        <StatValue>{totalPatients}</StatValue>
        <StatLabel>Total Patients</StatLabel>
        {change !== 0 && (
          <StatChange $positive={change > 0}>
            {change > 0 ? `▲ +${change}` : `▼ ${change}`}
          </StatChange>
        )}
      </StatCard>

      {/* --- Critical Patients --- */}
      <StatCard $accent="danger">
        <StatIcon>🚨</StatIcon>
        <StatValue>{criticalCount}</StatValue>
        <StatLabel>Critical (HR &gt; 120)</StatLabel>
      </StatCard>

      {/* --- Average BMI --- */}
      <StatCard $accent="success">
        <StatIcon>📊</StatIcon>
        <StatValue>{averageBMI}</StatValue>
        <StatLabel>Average BMI</StatLabel>
      </StatCard>
    </StatsGrid>
  );
};

// React.memo – skip re-render when props are unchanged
export default memo(DashboardStats);