import Head from 'next/head';

import Header from '../components/Header';
import ProductList from '../components/ProductList';

export default function HomePage() {
	return (
		<>
			<Head>
				<title key="title">CoffTea</title>
				<meta key="description" name="description" content="This is our capstone-project" />
			</Head>
			<Header />
			<ProductList />;
		</>
	);
}
