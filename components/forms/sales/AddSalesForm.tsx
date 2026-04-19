import { Col, DatePicker, Form, Row, Select } from 'antd';
import dayjs from 'dayjs';

const AddSalesForm = () => {
  const [form] = Form.useForm();
  return (
    <Form form={form}>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Form.Item
            name="date"
            label="Date"
            rules={[{ required: true, message: 'Please enter date' }]}
          >
            <DatePicker disabledDate={(current) => current && current < dayjs().endOf('day')} />
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
      </Row>
    </Form>
  );
};

export default AddSalesForm;
