'use client';

import BusinessDetailsForm from "../../../../components/forms/authentication/registration/BusinessDetailsForm";
import UserDetailsForm from "../../../../components/forms/authentication/registration/UserDetailsForm";
import Verification from "../../../../components/forms/authentication/registration/Verification";
import {useState} from "react";
import {Button, Form, Steps} from "antd";
import {RegisterFormType} from "../../../../types/FormTypes";
import {useRouter} from "next/navigation";
import {ArrowLeftOutlined} from "@ant-design/icons";

const Register = () => {
	const [current, setCurrent] = useState(0);
	const [loading, setLoading] = useState(false);
	const [form] = Form.useForm<RegisterFormType>();
	const router = useRouter();
	
	const next = async () => {
		try {
			// await form.validateFields();
			setCurrent((prev) => prev + 1);
		} catch (err) {
			console.log("Validation failed:", err);
		}
	};
	
	const prev = () => setCurrent((prev) => prev - 1);
	
	const handleFinish = async () => {
		try {
			await form.validateFields();
			console.log("Form submitted:", form.getFieldsValue());
		} catch (err) {
			console.log("Validation failed:", err);
		}
	};
	
	const steps = [
		{
			key: "Business Details",
			title: "Welcome to Nirvana",
			subtitle: "Enter your business details",
			content: <BusinessDetailsForm/>,
		},
		{
			key: "User Details",
			title: "Register with Nirvana",
			subtitle: "Fill the details below to proceed",
			content: <UserDetailsForm/>,
		},
		{
			key: "Verification",
			title: "Verify OTP",
			subtitle: "Enter the OTP sent to +254712345678",
			content: <Verification/>,
		},
	];
	
	const isFirst = current === 0;
	const isLast = current === steps.length - 1;
	
	return (
		<>
			<Button
				type="text"
				icon={<ArrowLeftOutlined className="text-xl!"/>}
				onClick={() => router.push("/auth/login")}
				className="mb-10 w-1/6"
			/>
			<Steps
				current={current}
				items={steps.map((item) => ({title: item.key}))}
				responsive={false}
			/>
			
			<div className="p-5 flex flex-col justify-center items-center">
				<h2 className="text-3xl font-bold!">{steps[current].title}</h2>
				<p>{steps[current].subtitle}</p>
			</div>
			
			<Form form={form} layout="vertical" requiredMark={false} className="my-4">
				{steps[current].content}
				<div className={`flex ${isFirst ? "justify-center" : "justify-between"}`}>
					{!isFirst && (
						<Button
							onClick={prev}
							loading={loading}
							className="bg-gray-200! px-20! py-8! rounded-2xl!  font-bold!"
						>
							Previous
						</Button>
					)}
					
					{!isLast && (
						<Button
							onClick={next}
							loading={loading}
							className="bg-black! text-white! px-20! py-8! rounded-2xl! font-bold!"
						>
							Continue
						</Button>
					)}
					
					{isLast && (
						<Button
							onClick={handleFinish}
							loading={loading}
							className="bg-purple-700! text-white! px-20! py-8! rounded-2xl! text-lg! font-bold!"
						>
							Create Account
						</Button>
					)}
				</div>
			</Form>
		</>
	);
};

export default Register;