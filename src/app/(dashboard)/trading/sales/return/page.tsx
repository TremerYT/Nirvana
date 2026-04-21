'use client';

import AddSaleReturnForm from '@/components/forms/sales/AddSaleReturnForm';
import { Typography } from 'antd';
const { Title, Text } = Typography;

const AddSaleReturn = () => {
  return (
    <>
      <div className="flex flex-col items-start mb-5">
        <Title level={2} className="m-0!">
          Add Sale
        </Title>
        <Text>Create and manage your Sales</Text>
      </div>
      <AddSaleReturnForm />
    </>
  );
};

export default AddSaleReturn;
