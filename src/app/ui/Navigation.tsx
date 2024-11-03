"use client";

import { Separator, TabNav } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
	const pathname = usePathname();

	return (
		<TabNav.Root className="items-center">
			<TabNav.Link asChild active={pathname === "/"}>
				<Link href="/">Home</Link>
			</TabNav.Link>
			<div className="flex-grow-1 flex-shrink-1 w-full"></div>
			<TabNav.Link asChild active={pathname === "/auth/login"}>
				<Link href="/auth/login">Login</Link>
			</TabNav.Link>
			<Separator orientation="vertical" size="1" />
			<TabNav.Link asChild active={pathname === "/auth/register"}>
				<Link href="/auth/register">Register</Link>
			</TabNav.Link>
		</TabNav.Root>
	);
}
