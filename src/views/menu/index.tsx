import Link from "next/link";
import { memo, useState } from "react";
import { Container } from "./styles";

const MenuView = () => {
	const [show, setShow] = useState(false);
	return (
		<Container>
            Menu
		</Container>
	);
};

export default memo(MenuView);
