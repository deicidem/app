"use client";

import { Button, Form, FormProps, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import Link from "next/link";

type FieldType = {
	username?: string;
	password?: string;
	passwordConfirmation?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
	console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
	console.log("Failed:", errorInfo);
};

export default function RegisterForm() {
	return (
		<Form
			name="basic"
			layout="vertical"
			style={{ maxWidth: 600 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
		>
			<FormItem<FieldType>
				label="Логин"
				name="username"
				rules={[{ required: true, message: "Введите логин" }]}
			>
				<Input />
			</FormItem>
			<FormItem<FieldType>
				label="Пароль"
				name="password"
				rules={[{ required: true, message: "Введите пароль" }]}
			>
				<Input.Password />
			</FormItem>
			<FormItem<FieldType>
				label="Подтверждение пароля"
				name="passwordConfirmation"
				rules={[{ required: true, message: "Введите пароль" }]}
			>
				<Input.Password />
			</FormItem>
			<FormItem label={null} style={{ marginBottom: 16 }}>
				<Button block type="primary" htmlType="submit">
					Зарегистрироваться
				</Button>
			</FormItem>
			<FormItem label={null} className="text-center">
				<Button block>
					<Link href="/auth/login">Войти</Link>
				</Button>
			</FormItem>
		</Form>
	);
}
