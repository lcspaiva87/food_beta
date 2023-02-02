import Link from "next/link";
import { IconType } from "react-icons";
import { AiFillHome } from "react-icons/ai";
import ActiveLink from "../ActiveLink";

interface NavLinkProps {
    title: string
    href: string
    icon: any
}
export function NavLink({ href, icon, title }: NavLinkProps) {
	return (
		<ActiveLink href={href} passHref >
			<li>
				<Link href="/">
					<span className="icon">{icon} </span>
					<span className="title"> {title} </span>
				</Link>
			</li>

		</ActiveLink>
	);
}
