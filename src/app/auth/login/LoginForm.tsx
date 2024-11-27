"use client";

import { Button, Form, FormProps, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import Link from "next/link";

type FieldType = {
	username?: string;
	password?: string;
	remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
	console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
	console.log("Failed:", errorInfo);
};

export default function LoginForm() {
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
			<FormItem label={null} style={{ marginBottom: 16 }}>
				<Button block type="primary" htmlType="submit">
					Войти
				</Button>
			</FormItem>
			<FormItem label={null} className="text-center">
				<Button block>
					<Link href="/auth/register">Зарегистрироваться</Link>
				</Button>
			</FormItem>
		</Form>
	);
}
