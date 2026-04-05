declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Database
      DATABASE_URL: string;

      // Next.js
      NEXTAUTH_URL: string;
      NEXTAUTH_SECRET: string;

      // API
      NEXT_PUBLIC_API_URL: string;
      API_BASE_URL: string;

      // Email Service
      EMAIL_HOST: string;
      EMAIL_PORT: string;
      EMAIL_USER: string;
      EMAIL_PASS: string;
      EMAIL_FROM: string;

      // JWT
      JWT_SECRET: string;
      JWT_EXPIRES_IN: string;

      // OAuth
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;

      // SMS Service
      TWILIO_ACCOUNT_SID: string;
      TWILIO_AUTH_TOKEN: string;
      TWILIO_PHONE_NUMBER: string;

      // Redis
      REDIS_URL: string;

      // AWS S3
      AWS_ACCESS_KEY_ID: string;
      AWS_SECRET_ACCESS_KEY: string;
      AWS_REGION: string;
      AWS_S3_BUCKET: string;

      // Application
      NODE_ENV: 'development' | 'production' | 'test';
      PORT: string;

      // Rate Limiting
      RATE_LIMIT_WINDOW_MS: string;
      RATE_LIMIT_MAX_REQUESTS: string;

      // CORS
      ALLOWED_ORIGINS: string;
    }
  }
}

export {};
