export type RegisterFormType = {
  businessName: string;
  phone: string;
  companyEmail: string;
  city: string;
  zipCode: string;
  address: string;
  terms: boolean;
  fullName: string;
  userName: string;
  email: string;
  userPhoneNumber: string;
  password: string;
  otp?: string;
};

export type LoginFormType = {
  email: string;
  password: string;
  remember?: boolean;
};

export type ResetPasswordType = {
  email: string;
};

export type VerificationFormType = {
  otp: string;
};

export type PasswordResetFormType = {
  password: string;
  confirmPassword: string;
};

export type businessAccountRegisterType = {
  businessName: string;
  phone: string;
  companyEmail: string;
  city: string;
  zipCode: string;
  address: string;
  terms: boolean;
};

export type individualAccountRegisterType = {
  fullName: string;
  email: string;
  idNumber: string;
  userPhoneNumber: string;
  password: string;
  confirmPassword: string;
};
