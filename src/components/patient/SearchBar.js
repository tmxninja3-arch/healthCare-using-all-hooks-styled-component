
import { Input, Switch, Card, Space, Typography } from 'antd';
import { AlertOutlined } from '@ant-design/icons';

const { Search } = Input;
const { Text } = Typography;

const SearchBar = ({
  searchText,
  onSearchChange,
  criticalFilter,
  onToggleCriticalFilter,
}) => {
  return (
    <Card title="🔍 Search & Filter" size="small">
      <Space direction="vertical" style={{ width: '100%' }} size="middle">
        {/* Search input */}
        <Search
          placeholder="Search patient by name…"
          value={searchText}
          onChange={(e) => onSearchChange(e.target.value)}
          allowClear
          size="large"
        />

        {/* Critical filter toggle */}
        <Space align="center">
          <Switch
            checked={criticalFilter}
            onChange={onToggleCriticalFilter}
            checkedChildren={<AlertOutlined />}
            unCheckedChildren={<AlertOutlined />}
          />
          <Text type={criticalFilter ? 'danger' : 'secondary'}>
            {criticalFilter
              ? 'Showing Critical Only'
              : 'Show All Patients'}
          </Text>
        </Space>
      </Space>
    </Card>
  );
};

export default SearchBar;