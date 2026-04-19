'use client';

import type { StatisticProps } from 'antd';
import { Card, Statistic } from 'antd';
import { ComponentType } from 'react';

type SummaryCardProps = {
  icon: ComponentType;
  iconColor: string;
  bgIconColor: string;
  value: string | number;
  label: string;
  formatter?: StatisticProps['formatter'];
};

const SummaryCards = ({
  icon: Icon,
  iconColor,
  bgIconColor,
  value,
  label,
  formatter,
}: SummaryCardProps) => {
  return (
    <Card className="rounded-lg">
      <div className="flex items-center justify-between">
        <div
          className="w-12 h-12 rounded-full text-2xl flex items-center justify-center"
          style={{ backgroundColor: bgIconColor, color: iconColor }}
        >
          <Icon />
        </div>
        <div className="text-right">
          <Statistic title={label} value={value} formatter={formatter} prefix="" />
        </div>
      </div>
    </Card>
  );
};

export default SummaryCards;
