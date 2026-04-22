'use client';

import AddDescription from '@/components/descriptions/AddSaleDescription';
import AddTable from '@/components/tables/AddSaleTable';
import {
  AutoComplete,
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from 'antd';
import dayjs from 'dayjs';

const AddPurchaseForm = () => {
  const [form] = Form.useForm();
  return (
    <Card>
      <Form form={form} layout="vertical">
        <Row gutter={[16, 16]}>
          <Col span={8}>
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
          <Col span={8}>
            <Form.Item
              name="supplierName"
              label="Supplier"
              rules={[{ required: true, message: 'Please enter customer name' }]}
            >
              <Select options={[]} allowClear />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="wareHouseName" label="Warehouse">
              <Select options={[]} allowClear />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="productName" label="Select Product">
              <AutoComplete
                options={[]}
                onSelect={() => {}}
                onSearch={() => {}}
                filterOption={false}
              >
                <Input.Search size="large" className="w-full" />
              </AutoComplete>
            </Form.Item>
          </Col>
          <Col span={24}>
            <AddTable />
          </Col>
          <Col span={24}>
            <AddDescription />
          </Col>
          <Col span={12}>
            <Form.Item name="shipping" label="Shipping" initialValue={0}>
              <InputNumber min={0} className="w-full!" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="saleStatus"
              label="Sale Status"
              rules={[{ required: true, message: 'Sale status is required' }]}
            >
              <Select
                options={[
                  { value: 'complete', label: 'Complete' },
                  { value: 'inComplete', label: 'Incomplete' },
                  { value: 'drafts', label: 'Drafts' },
                ]}
                allowClear
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="purchaseNote" label="Purchase Note">
              <Input.TextArea rows={5} />
            </Form.Item>
          </Col>
        </Row>
        <div className="flex gap-4 justify-end">
          <Button type={'primary'} htmlType={'submit'} size={'large'}>
            Add Sale
          </Button>
          <Button type={'primary'} htmlType={'reset'} size={'large'} danger>
            Cancel
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default AddPurchaseForm;
