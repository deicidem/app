import { Button, Container, Heading, Link, TextField } from "@radix-ui/themes";

export default function Register() {
	return (
		<Container className="mt-40">
			<Heading className="text-center mb-6">Register</Heading>
			<div className="max-w-72 flex align-center  flex-col gap-4 mx-auto">
				<TextField.Root placeholder="Username" type="text" />
				<TextField.Root placeholder="Password" type="password" />
				<TextField.Root placeholder="Password confirmation" type="password" />
				<Button>Register</Button>
				<Link className="text-center" href="/auth/login">
					Login
				</Link>
			</div>
		</Container>
	);
}
