import { Button, Heading, Link, TextField } from "@radix-ui/themes";

export default function Login() {
	return (
		<div className="mt-40">
			<Heading className="text-center mb-6">Login</Heading>
			<div className="max-w-72 flex align-center  flex-col gap-4 mx-auto">
				<TextField.Root placeholder="Username" type="text" />
				<TextField.Root placeholder="Password" type="password" />
				<Button>Login</Button>
				<Link className="text-center" href="/auth/register">
					Register
				</Link>
			</div>
		</div>
	);
}
