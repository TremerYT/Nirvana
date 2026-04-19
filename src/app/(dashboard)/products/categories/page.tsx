'use client';

import { PlusOutlined, ReloadOutlined } from '@ant-design/icons';
import { Button, Typography } from 'antd';
import CategoriesTable from '../../../../../components/tables/CategoriesTable';

const { Text, Title } = Typography;

const Categories = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div>
          <Title level={2} className="m-0!">
            Categories List
          </Title>
          <Text>Manage Your Categories</Text>
        </div>
        <div className="flex gap-3">
          <Button type="text" icon={<ReloadOutlined style={{ fontSize: 23 }} />} />
          <Button type="primary" icon={<PlusOutlined />} size={'medium'}>
            Add Category
          </Button>
        </div>
      </div>
      <CategoriesTable />
    </>
  );
};

export default Categories;
