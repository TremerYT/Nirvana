import { DeleteOutlined } from '@ant-design/icons';
import { Avatar, Button, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface AddSaleTable {}

const columns: ColumnsType<AddSaleTable> = [
  {
    title: 'IMAGE',
    dataIndex: 'mainImage',
    key: 'mainImage',
    render: (image: string) => <Avatar src={image} size={50} shape="square" />,
  },
  {
    title: 'PRODUCT NAME',
    dataIndex: 'productName',
    key: 'productName',
  },
  {
    title: 'PRODUCT CODE',
    dataIndex: 'productCode',
    key: 'productCode',
  },
  {
    title: 'UNIT',
    dataIndex: 'unit',
    key: 'unit',
  },
  {
    title: 'PRICE',
    dataIndex: 'unitPrice',
    key: 'unitPrice',
  },
  {
    title: 'QUANTITY',
    key: 'quantity',
    render: (_, record) => (
      <Space>
        <Button size="small" type="primary" onClick={() => {}}>
          -
        </Button>
        <span style={{ minWidth: 24, textAlign: 'center' }}></span>
        <Button size="small" type="primary" onClick={() => {}}>
          +
        </Button>
      </Space>
    ),
  },
  {
    title: 'DISCOUNT',
    dataIndex: 'discountValue',
    key: 'discountValue',
  },
  {
    title: 'TAX',
    dataIndex: 'taxValue',
    key: 'taxValue',
  },
  {
    title: 'SUB TOTAL',
    dataIndex: 'subTotal',
    key: 'subTotal',
  },
  {
    title: 'ACTION',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Button icon={<DeleteOutlined style={{ color: 'red' }} />} onClick={() => {}} />
      </Space>
    ),
  },
];

const AddTable = () => {
  return <Table columns={columns} />;
};

export default AddTable;
