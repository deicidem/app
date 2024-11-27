import RegisterForm from "./RegisterForm";

export default function Register() {
	return (
		<div className="flex flex-col items-center bg-white rounded-xl p-8 ">
			<h1 className="text-3xl font-medium text-center mb-6">Регистрация</h1>
			<RegisterForm />
		</div>
	);
}
