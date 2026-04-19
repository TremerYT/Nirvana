import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Card, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';

interface Unit {
  unitName: string;
  unit: string;
}

const columns: ColumnsType<Unit> = [
  {
    title: 'UNIT NAME',
    dataIndex: 'unitName',
    key: 'unitName',
  },
  {
    title: 'PRODUCT UNIT',
    dataIndex: 'unit',
    key: 'unit',
  },
  {
    title: 'ACTION',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Button icon={<EditOutlined />} onClick={() => console.log(record)} />
        <Button danger icon={<DeleteOutlined />} onClick={() => console.log(record)} />
      </Space>
    ),
  },
];

const UnitsTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (selectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  return (
    <Card>
      <Table
        columns={columns}
        rowKey="unitName"
        pagination={{ pageSize: 10 }}
        rowSelection={{
          selectedRowKeys,
          onChange: onSelectChange,
        }}
      />
    </Card>
  );
};

export default UnitsTable;
