'use client';

import { FileExcelFilled, FilePdfFilled, PlusOutlined, ReloadOutlined } from '@ant-design/icons';
import { Button, Typography } from 'antd';
import ProductsTable from '../../../../../components/tables/ProductsTable';

const { Title, Text } = Typography;

const ListProducts = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div>
          <Title level={2} className="m-0!">
            Product List
          </Title>
          <Text>Manage your products</Text>
        </div>
        <div className="flex gap-3">
          <Button type="text" icon={<FilePdfFilled style={{ fontSize: 23, color: 'red' }} />} />
          <Button type="text" icon={<FileExcelFilled style={{ fontSize: 23, color: 'green' }} />} />
          <Button type="text" icon={<ReloadOutlined style={{ fontSize: 23 }} />} />
          <Button type="primary" icon={<PlusOutlined />} size={'medium'}>
            Add Product
          </Button>
        </div>
      </div>
      <ProductsTable />
    </>
  );
};
export default ListProducts;
