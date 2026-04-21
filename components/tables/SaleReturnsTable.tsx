import { DeleteOutlined, EditOutlined, EyeOutlined, FileTextOutlined } from '@ant-design/icons';
import { Button, Space, Table, Tag, Tooltip } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { JSX, useState } from 'react';
import { salesMockData } from '../../mock/mock';

interface Sales {
  referenceNumber: string;
  date: string;
  customerName: string;
  status: string;
  biller: string;
  grandTotal: string;
  paid: string;
  due: string;
  paymentStatus: string;
}

const columns: ColumnsType<Sales> = [
  {
    title: 'REFERENCE NUMBER',
    dataIndex: 'referenceNumber',
    key: 'referenceNumber',
  },
  {
    title: 'DATE',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'CUSTOMER NAME',
    dataIndex: 'customerName',
    key: 'customerName',
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
    key: 'status',
    render: (text: string, record: { status: string }): JSX.Element => (
      <Tag
        color={record.status === 'incomplete' ? 'red' : record.status === 'complete' ? 'green' : ''}
      >
        {record.status}
      </Tag>
    ),
  },
  {
    title: 'BILLER',
    dataIndex: 'biller',
    key: 'biller',
  },
  {
    title: 'PAYMENT STATUS',
    dataIndex: 'paymentStatus',
    key: 'paymentStatus',
    render: (text: string, record: { paymentStatus: string }): JSX.Element => (
      <Tag
        color={
          record.paymentStatus === 'unpaid'
            ? 'red'
            : record.paymentStatus === 'paid'
              ? 'green'
              : record.paymentStatus === 'partial'
                ? 'orange'
                : ''
        }
      >
        {record.paymentStatus}
      </Tag>
    ),
  },
  {
    title: 'GRAND TOTAL',
    dataIndex: 'grandTotal',
    key: 'grandTotal',
  },
  {
    title: 'PAID',
    dataIndex: 'paid',
    key: 'paid',
  },
  {
    title: 'DUE',
    dataIndex: 'due',
    key: 'due',
  },
  {
    title: 'ACTION',
    dataIndex: 'action',
    key: 'action',
    render: (_, record): JSX.Element => (
      <Space size={'middle'}>
        <Tooltip title="Edit">
          <Button icon={<EditOutlined style={{ color: 'blue' }} />} />
        </Tooltip>
        <Tooltip title="Delete">
          <Button icon={<DeleteOutlined style={{ color: 'red' }} />} />
        </Tooltip>
      </Space>
    ),
  },
];

const SalesReturnTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (selectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  return (
    <Table
      rowKey={'referenceNumber'}
      columns={columns}
      dataSource={salesMockData}
      pagination={{ pageSize: 10 }}
      rowSelection={{
        selectedRowKeys,
        onChange: onSelectChange,
      }}
    />
  );
};

export default SalesReturnTable;
