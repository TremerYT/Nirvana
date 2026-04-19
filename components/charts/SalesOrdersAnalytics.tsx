'use client';
import { months } from '@/constants/constants';
import { useTheme } from '@/hooks/useTheme';
import { Card, Select, Tag } from 'antd';
import dynamic from 'next/dynamic';
import { MdTrendingUp } from 'react-icons/md';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const SalesOrdersAnalytics = () => {
  const { isDark } = useTheme();

  const options = {
    chart: {
      type: 'bar' as const,
      height: '100%',
      background: 'transparent',
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 10,
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: '12px',
        colors: ['#fff'],
      },
    },
    xaxis: {
      categories: ['Completed', 'Processing', 'Cancelled', 'Returned'],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        align: 'left' as const,
        offsetX: -12,
        style: {
          colors: isDark ? '#ffffff' : '#000000',
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    colors: ['#8080ff'],
    tooltip: {
      theme: isDark ? ('dark' as const) : ('light' as const),
    },
  };

  const series = [
    {
      name: 'Amount',
      data: [200, 600, 300, 500],
    },
  ];

  return (
    <Card
      title="Sales & Orders Analytics"
      extra={<Select options={months} defaultValue="january" className="w-35" />}
    >
      <div>
        <div>
          <h1 className="text-md">Total Orders</h1>
          <div className="flex gap-2 items-center">
            <p className="text-3xl">202</p>
            <Tag
              color="#ccffcc"
              icon={<MdTrendingUp color="#33cc33" className="text-2xl" />}
              className="py-0.5! flex! items-center gap-1"
            >
              <span style={{ color: '#33cc33', fontWeight: 'bold' }} className="text-[15px]">
                61%
              </span>
            </Tag>
            <p>vs 500 last month</p>
          </div>
        </div>
      </div>
      <Chart options={options} series={series} type="bar" height={290} />
    </Card>
  );
};

export default SalesOrdersAnalytics;
