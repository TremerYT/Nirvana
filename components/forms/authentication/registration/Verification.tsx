import { Col, Form, Input, Row } from 'antd';

const Verification = () => {
  return (
    <Row justify="center" className="py-5">
      <Col>
        <Form.Item
          name="otp"
          rules={[
            { required: true, message: 'OTP is required' },
            { len: 6, message: 'OTP must be 6 digits' },
          ]}
        >
          <Input.OTP length={6} />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default Verification;
