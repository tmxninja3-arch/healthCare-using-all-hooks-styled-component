import { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Space, Tooltip } from 'antd';
import {
  DashboardOutlined,
  TeamOutlined,
  SunOutlined,
  MoonOutlined,
  MedicineBoxOutlined,
} from '@ant-design/icons';
import { ThemeContext } from '../../context/ThemeContext';
import { HeaderWrapper } from '../../styles/HeaderStyles';

const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();

  const isDashboardActive = location.pathname === '/';
  const isPatientListActive = location.pathname === '/patients';

  return (
    <HeaderWrapper>
      {/* Logo */}
      <div
        onClick={() => navigate('/')}
        style={{
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '1.4rem',
          fontWeight: 700,
          color: 'inherit',
        }}
      >
        <MedicineBoxOutlined /> Smart Patient Dashboard
      </div>

      {/* Navigation Buttons using antd Button */}
      <Space size="small">
        <Button
          type={isDashboardActive ? 'primary' : 'text'}
          icon={<DashboardOutlined />}
          onClick={() => navigate('/')}
          style={{
            color: isDashboardActive ? undefined : 'inherit',
          }}
        >
          Dashboard
        </Button>

        <Button
          type={isPatientListActive ? 'primary' : 'text'}
          icon={<TeamOutlined />}
          onClick={() => navigate('/patients')}
          style={{
            color: isPatientListActive ? undefined : 'inherit',
          }}
        >
          Patient List
        </Button>
      </Space>

      {/* Theme Toggle using antd Button + Tooltip */}
      <Tooltip
        title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        <Button
          ghost
          shape="round"
          icon={isDarkMode ? <SunOutlined /> : <MoonOutlined />}
          onClick={toggleTheme}
        >
          {isDarkMode ? 'Light' : 'Dark'}
        </Button>
      </Tooltip>
    </HeaderWrapper>
  );
};

export default Header;