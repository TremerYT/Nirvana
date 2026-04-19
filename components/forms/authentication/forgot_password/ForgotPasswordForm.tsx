'use client';

import { Button, Form, Input } from 'antd';
import { useRouter } from 'next/navigation';
import { ResetPasswordType } from '@/types/FormTypes';

const ForgotPasswordForm = () => {
  const [form] = Form.useForm<ResetPasswordType>();
  const router = useRouter();
  return (
    <Form layout="vertical" form={form} className="w-1/2">
      <Form.Item
        name="email"
        label="Email"
        rules={[
          { required: true, message: 'Email is required' },
          { type: 'email', message: 'Please enter a valid email' },
        ]}
      >
        <Input size="large" className="" />
      </Form.Item>

      <Button
        htmlType="submit"
        className="bg-black! text-white! px-20! py-8! rounded-2xl! font-bold! w-full! mx-auto"
        onClick={() => router.push('/auth/forgot_password/verification')}
      >
        Reset Password
      </Button>
    </Form>
  );
};

export default ForgotPasswordForm;
