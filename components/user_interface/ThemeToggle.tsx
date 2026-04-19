'use client';

import { MoonFilled, SunFilled } from '@ant-design/icons';
import { Switch } from 'antd';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggle = () => {
  const { isDark, toggle } = useTheme();
  return (
    <Switch
      checked={isDark}
      onChange={toggle}
      checkedChildren={<MoonFilled />}
      unCheckedChildren={<SunFilled />}
    />
  );
};

export default ThemeToggle;
