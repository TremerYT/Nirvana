import { Table, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { JSX } from 'react';

interface SaleTransaction {
  date: string;
  customerName: string;
  status: string;
  biller: string;
  grandTotal: number;
  paid: number;
  due: number;
  paymentStatus: string;
}

interface PurchaseTransaction {
  date: string;
  referenceNumber: string;
  supplierName: string;
  wareHouse: string;
  status: string;
  grandTotal: number;
  paid: number;
  due: number;
  paymentStatus: string;
}

const recentSalesColumns: ColumnsType<SaleTransaction> = [
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
];

const recentPurchasesColumns: ColumnsType<PurchaseTransaction> = [
  {
    title: 'DATE',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'REFERENCE',
    dataIndex: 'referenceNumber',
    key: 'referenceNumber',
  },
  {
    title: 'SUPPLIER NAME',
    dataIndex: 'supplierName',
    key: 'supplierName',
  },
  {
    title: 'WAREHOUSE',
    dataIndex: 'wareHouse',
    key: 'warehouse',
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
    key: 'status',
    render: (value: string): JSX.Element => (
      <Tag
        color={
          value === 'pending'
            ? 'red'
            : value === 'received'
              ? 'green'
              : value === 'ordered'
                ? 'blue'
                : ''
        }
      >
        {value}
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
    title: 'PAYMENT STATUS',
    dataIndex: 'paymentStatus',
    key: 'paymentStatus',
    render: (value: string): JSX.Element => (
      <Tag
        color={
          value === 'unpaid'
            ? 'red'
            : value === 'paid'
              ? 'green'
              : value === 'partial'
                ? 'orange'
                : ''
        }
      >
        {value}
      </Tag>
    ),
  },
];

export const RecentSalesTransactions = () => {
  return <Table columns={recentSalesColumns} />;
};

export const RecentPurchasesTransaction = () => {
  return <Table columns={recentPurchasesColumns} />;
};
