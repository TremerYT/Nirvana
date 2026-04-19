import { theme, ThemeConfig } from 'antd';

export const lightTheme: ThemeConfig = {
  token: {
    colorPrimary: '#1668dc',
    borderRadius: 6,
    fontFamily: '"Poppins", sans-serif',
  },
  components: {
    Layout: {
      headerBg: '#ffffff',
      siderBg: '#f5f5f5',
    },
    Typography: {
      fontWeightStrong: 100,
    },
  },
};

export const darkTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: '#1668dc',
    borderRadius: 6,
  },
};
