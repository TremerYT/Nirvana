import { Card, Typography } from 'antd';

const { Title, Text } = Typography;

const AddSalesPage = () => {
  return (
    <>
      <div className="flex flex-col items-start mb-5">
        <Title level={2} className="m-0!">
          Add Sale
        </Title>
        <Text>Create and manage your Sales</Text>
      </div>
      <Card></Card>
    </>
  );
};

export default AddSalesPage;
