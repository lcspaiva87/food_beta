

import { Aside } from "../aside";
import { Header } from "../header";
import { Container } from "./styles";
export function Layout({ children }:any) {


	return (
		<Container>
			<Header />
			<Aside />
			<div> {children} </div>

		</Container>
	);
}
