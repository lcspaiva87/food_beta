
import { Container } from "./styles";
import { AiFillHome ,AiOutlineHistory,AiOutlineSetting} from "react-icons/ai";
import { MdOutlineMenuBook } from "react-icons/md";
import { RiShoppingCart2Line } from "react-icons/ri";
import { RxExit } from "react-icons/rx";
import Link from "next/link";

export function Aside() {
	return (
		<Container>
			<ul
			>
				<li>
					<Link href="/">
						<span className="icon"><AiFillHome /> </span>
						<span className="title">Home</span>
					</Link>
				</li>

				<li>
					<Link href="/menu">
						<span className="icon"><MdOutlineMenuBook /> </span>
						<span className="title">Menu</span>
					</Link>
				</li>
				<li>
					<Link href="/history">
						<span className="icon"><AiOutlineHistory /> </span>
						<span className="title">Historico</span>
					</Link>
				</li>
				<li>
					<Link href="/payment">
						<span className="icon"><RiShoppingCart2Line /> </span>
						<span className="title">Pedido</span>
					</Link>
				</li>
				<li>
					<Link href="/Configuração">
						<span className="icon"><AiOutlineSetting /> </span>
						<span className="title">Configuração</span>
					</Link>
				</li>
				<li>
					<Link href="/Sair">
						<span className="icon"><RxExit /> </span>
						<span className="title">Sair</span>
					</Link>
				</li>
			</ul>
		</Container>
	);
}
