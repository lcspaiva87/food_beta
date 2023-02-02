import Link from "next/link";
import { memo, useState } from "react";
import { Container } from "./styles";
import MenuView from "../menu/index";
import { useRouter } from "next/router";
const HomeView = () => {
	const [show, setShow] = useState(false);

	const {asPath} = useRouter();
	return (
		<Container>
			<h1>home</h1>
			{asPath === "/menu" && <MenuView />}
		</Container>
	);
};

export default memo(HomeView);
