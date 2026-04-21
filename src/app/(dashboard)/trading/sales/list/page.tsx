'use client';

import SalesReturnTable from '@/components/tables/SaleReturnsTable';
import SalesTable from '@/components/tables/SalesTable';
import { FileExcelFilled, FilePdfFilled, PlusOutlined, ReloadOutlined } from '@ant-design/icons';
import { Button, Tabs, Typography } from 'antd';

const { Title, Text } = Typography;

const ListSales = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div>
          <Title level={2} className="m-0!">
            Sales List
          </Title>
          <Text>Manage your Sales</Text>
        </div>
        <div className="flex gap-3">
          <Button type="text" icon={<FilePdfFilled style={{ fontSize: 23, color: 'red' }} />} />
          <Button type="text" icon={<FileExcelFilled style={{ fontSize: 23, color: 'green' }} />} />
          <Button type="text" icon={<ReloadOutlined style={{ fontSize: 23 }} />} />
          <Button type="primary" icon={<PlusOutlined />} size={'medium'}>
            Add Sale
          </Button>
        </div>
      </div>
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: 'Sales List',
            key: 'sales',
            children: <SalesTable />,
          },
          {
            label: 'Sale Return',
            key: 'saleReturn',
            children: <SalesReturnTable />,
          },
        ]}
      />
    </>
  );
};

export default ListSales;
