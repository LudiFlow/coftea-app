import {useRouter} from 'next/router';

import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import StyledProductList from '../../components/ProductList/styled';
import useStore from '../../hooks/useStore';

export default function Product() {
	const products = useStore(state => state.products);

	const router = useRouter();
	const [filter] = router.query.product ?? [''];

	return (
		<>
			<Header />
			<StyledProductList>
				{products
					.filter(product => {
						if (filter.length === 0) {
							return true;
						} else {
							return product.category === filter;
						}
					})
					.map(product => (
						<ProductCard
							key={product.id}
							id={product.id}
							name={product.name}
							price={product.price}
							imgUrl={product.imgUrl}
						/>
					))}
			</StyledProductList>
		</>
	);
}
