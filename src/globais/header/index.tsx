import { Box, BoxDate, BoxUser, Container } from "./styles";
import {CgChevronDoubleLeft} from "react-icons/cg";
export function Header() {
	return (
		<Container>
			<Box>
				<BoxDate>
					<CgChevronDoubleLeft  fontSize={30}/>
				</BoxDate>
				<BoxUser>
					<span>ola,😊</span>
					<span> lucas paiva</span>
				</BoxUser>
			</Box>
		</Container>
	);
}
