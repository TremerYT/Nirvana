import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Card, Input, Select, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';
import { mockProducts } from '../../mock/mock';

interface Product {
  productCode: string;
  productName: string;
  categoryName: string;
  brandName: string;
  status: string;
  unitPrice: number;
}

const columns: ColumnsType<Product> = [
  {
    title: 'PRODUCT CODE',
    dataIndex: 'productCode',
    key: 'productCode',
  },
  {
    title: 'PRODUCT NAME',
    dataIndex: 'productName',
    key: 'productName',
  },
  {
    title: 'CATEGORY',
    dataIndex: 'categoryName',
    key: 'categoryName',
  },
  {
    title: 'BRAND',
    dataIndex: 'brandName',
    key: 'brandName',
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
    key: 'status',
    render: (text: string) => <Tag color={text === 'Active' ? 'green' : 'red'}>{text}</Tag>,
  },
  {
    title: 'UNIT PRICE',
    dataIndex: 'unitPrice',
    key: 'unitPrice',
  },
  {
    title: 'QUANTITY',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'DISCOUNT',
    dataIndex: 'discount',
    key: 'discount',
  },
  {
    title: 'ACTION',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Button icon={<EyeOutlined />} onClick={() => console.log(record)} />
        <Button icon={<EditOutlined />} onClick={() => console.log(record)} />
        <Button danger icon={<DeleteOutlined />} onClick={() => console.log(record)} />
      </Space>
    ),
  },
];

const ProductsTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (selectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  return (
    <Card
      title={
        <Input.Search
          placeholder="Search by product name or product code"
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
        dataSource={mockProducts}
        rowKey="productCode"
        pagination={{ pageSize: 10 }}
        rowSelection={{
          selectedRowKeys,
          onChange: onSelectChange,
        }}
      />
    </Card>
  );
};

export default ProductsTable;
