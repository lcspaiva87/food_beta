
import { Layout } from "@/globais/layout";
import { Inter } from "@next/font/google";
import { useRouter } from "next/router";


export default function Home() {
	const {asPath} = useRouter();
	return (
		<>
			<Layout />

		</>
	);
}
