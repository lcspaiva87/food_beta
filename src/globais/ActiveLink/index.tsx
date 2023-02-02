
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";
interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    shouldMatchExactHref?: boolean;
}
export default function ActiveLink({
	children,
	shouldMatchExactHref = false,
	...rest
}: ActiveLinkProps) {
	const { asPath,route } = useRouter();
	let isActive = false;
	const linkAspath = String(asPath).replace("#", "");
	const linkHref = String(rest.href).replace("#", "/");


	if (linkAspath === linkHref ) {
		isActive = true;
	}
	return (
		<Link {...rest}>
			{cloneElement(children, {
				color: isActive ? "#FF0080" : "red",
			})}
		</Link>
	);
}


