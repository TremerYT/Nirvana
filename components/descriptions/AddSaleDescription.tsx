import { Descriptions } from 'antd';

const items = [
  {
    label: 'Total Amount',
    value: 0,
  },
  {
    label: 'Order Tax',
    value: 0,
  },
  {
    label: 'Shipping',
    value: 0,
  },
  {
    label: 'Discount',
    value: 0,
  },
  {
    label: 'Grand Total',
    value: 0,
  },
];

const AddSaleDescription = () => {
  return (
    <div className="flex justify-end">
      <Descriptions bordered size="small" layout="horizontal" column={1} className="w-1/2">
        {items.map((item) => (
          <Descriptions.Item key={item.label} label={item.label}>
            {item.value}
          </Descriptions.Item>
        ))}
      </Descriptions>
    </div>
  );
};

export default AddSaleDescription;
