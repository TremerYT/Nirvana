import AddSaleDescription from '@/components/descriptions/AddSaleDescription';
import AddSaleTable from '@/components/tables/AddSaleTable';
import { AutoComplete, Button, Col, DatePicker, Form, Input, InputNumber, Row, Select } from 'antd';
import dayjs from 'dayjs';

const AddSalesForm = () => {
  const [form] = Form.useForm();
  return (
    <Form form={form} layout="vertical">
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Form.Item
            name="date"
            label="Date"
            rules={[{ required: true, message: 'Please enter date' }]}
          >
            <DatePicker
              disabledDate={(current) => current && current < dayjs().startOf('day')}
              className="w-full!"
            />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            name="customerName"
            label="Customer"
            rules={[{ required: true, message: 'Please enter customer name' }]}
          >
            <Select options={[]} allowClear />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="wareHouseName" label="Warehouse">
            <Select options={[]} allowClear />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            name="biller"
            label="Biller"
            rules={[{ required: true, message: 'message is required' }]}
          >
            <Select options={[]} allowClear />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item name="productName" label="Select Product">
            <AutoComplete options={[]} onSelect={() => {}} onSearch={() => {}} filterOption={false}>
              <Input.Search size="large" className="w-full" />
            </AutoComplete>
          </Form.Item>
        </Col>
        <Col span={24}>
          <AddSaleTable />
        </Col>
        <Col span={24}>
          <AddSaleDescription />
        </Col>
        <Col span={8}>
          <Form.Item name="shipping" label="Shipping" initialValue={0}>
            <InputNumber min={0} className="w-full!" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="saleStatus"
            label="Sale Status"
            rules={[{ required: true, message: 'Sale status is required' }]}
          >
            <Select
              options={[
                { value: 'complete', label: 'Complete' },
                { value: 'inComplete', label: 'Incomplete' },
              ]}
              allowClear
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="paymentStatus"
            label="Payment Status"
            rules={[{ required: true, message: 'Payment Status is required' }]}
          >
            <Select
              options={[
                { value: 'paid', label: 'Paid' },
                { value: 'unpaid', label: 'Unpaid' },
                { value: 'partially', label: 'Partially' },
              ]}
              allowClear
            />
          </Form.Item>
        </Col>
      </Row>
      <div className="flex gap-4 justify-end">
        <Button type={'primary'} htmlType={'submit'} size={'large'}>
          Add Product
        </Button>
        <Button type={'primary'} htmlType={'reset'} size={'large'} danger>
          Cancel
        </Button>
      </div>
    </Form>
  );
};

export default AddSalesForm;
