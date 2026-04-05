'use client';

import {Calendar} from 'antd';
import dayjs from 'dayjs';
import React from 'react';

const DashboardCalendar: React.FC = () => {
	const today = dayjs().startOf('day');
	return (
		<Calendar
			fullscreen={false}
			validRange={[today, today.add(30, 'day')]}
		/>
	);
};

export default DashboardCalendar;