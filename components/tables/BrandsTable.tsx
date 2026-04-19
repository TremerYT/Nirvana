import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Input, Select, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';
import { mockBrands } from '../../mock/mock';

interface Brand {
  brandCode: string;
  brandImage: string;
  brandName: string;
  status: string;
}

const columns: ColumnsType<Brand> = [
  {
    title: 'BRAND CODE',
    dataIndex: 'brandCode',
    key: 'brandCode',
  },
  {
    title: 'BRAND IMAGE',
    dataIndex: 'brandImage',
    key: 'brandImage',
    render: (image: string) => <Avatar src={image} size={50} shape="square" />,
  },
  {
    title: 'BRAND NAME',
    dataIndex: 'brandName',
    key: 'brandName',
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
    key: 'status',
    render: (text: string) => <Tag color={text === 'active' ? 'green' : 'red'}>{text}</Tag>,
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

const BrandsTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (selectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  return (
    <Card
      title={
        <Input.Search
          placeholder="Search by brand name or brand code"
          allowClear
          className="w-1/3!"
          size={'medium'}
        />
      }
      extra={
        <div className="flex gap-2 w-80">
          <Select
            placeholder="Status"
            allowClear
            className="w-full!"
            options={[
              { label: 'Active', value: 'Active' },
              { label: 'Inactive', value: 'Inactive' },
            ]}
          />
        </div>
      }
    >
      <Table
        columns={columns}
        dataSource={mockBrands}
        rowKey="brandCode"
        pagination={{ pageSize: 10 }}
        rowSelection={{
          selectedRowKeys,
          onChange: onSelectChange,
        }}
      />
    </Card>
  );
};

export default BrandsTable;
