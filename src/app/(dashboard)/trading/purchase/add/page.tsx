'use client';

import AddPurchaseForm from '@/components/forms/purchases/AddPurchaseForm';
import { Typography } from 'antd';

const { Title, Text } = Typography;

const AddPurchase = () => {
  return (
    <>
      <div className="flex flex-col items-start mb-5">
        <Title level={2} className="m-0!">
          Add Purchase
        </Title>
        <Text>Create and manage your purchases</Text>
      </div>
      <AddPurchaseForm />
    </>
  );
};

export default AddPurchase;
