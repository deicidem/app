"use client";

import { Menu } from "antd";
import MenuDivider from "antd/es/menu/MenuDivider";
import MenuItem from "antd/es/menu/MenuItem";
import Link from "next/link";
import { usePathname } from "next/navigation";

function useActivePath() {
	const pathname = usePathname();

	const isActivePath = (path: string) => {
		if (path === "/" && pathname !== path) {
			return false;
		}
		return pathname.startsWith(path);
	};

	return isActivePath;
}

const mainLinks = [
	{
		label: "Главная",
		path: "/",
	},
];

const authLinks = [
	{
		label: "Вход",
		path: "/auth/login",
	},
	{
		label: "Регистрация",
		path: "/auth/register",
	},
];

export default function Navigation() {
	const isActivePath = useActivePath();

	return (
		<Menu
			theme="dark"
			mode="horizontal"
			selectedKeys={mainLinks
				.concat(authLinks)
				.filter(({ path }) => isActivePath(path))
				.map(({ path }) => path)}
		>
			{mainLinks.map(({ label, path }) => (
				<MenuItem key={path} className={isActivePath(path) ? "active" : ""}>
					<Link href={path}>{label}</Link>
				</MenuItem>
			))}
			<MenuDivider className="flex-grow" />
			{authLinks.map(({ label, path }) => (
				<MenuItem key={path} className={isActivePath(path) ? "active" : ""}>
					<Link href={path}>{label}</Link>
				</MenuItem>
			))}
		</Menu>
	);
}
