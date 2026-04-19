'use client';

import { PlusOutlined, ReloadOutlined } from '@ant-design/icons';
import { Button, Typography } from 'antd';
import UnitsTable from '../../../../../components/tables/UnitsTable';

const { Title, Text } = Typography;
const UnitsPage = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div>
          <Title level={2} className="m-0!">
            Product Units
          </Title>
          <Text>Manage your product units</Text>
        </div>
        <div className="flex gap-3">
          <Button type="text" icon={<ReloadOutlined style={{ fontSize: 23 }} />} />
          <Button type="primary" icon={<PlusOutlined />} size={'medium'}>
            Add Unit
          </Button>
        </div>
      </div>
      <UnitsTable />
    </>
  );
};

export default UnitsPage;
