import LoginForm from "./LoginForm";

export default function Login() {
	return (
		<div className="flex flex-col items-center bg-white rounded-xl p-8 ">
			<h1 className="text-3xl font-medium text-center mb-6">Авторизация</h1>
			<LoginForm />
		</div>
	);
}
