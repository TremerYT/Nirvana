import { AutoComplete, Col, DatePicker, Form, Input, Row, Select } from 'antd';
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
      </Row>
    </Form>
  );
};

export default AddSalesForm;
