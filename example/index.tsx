import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const product = {
	id: '1',
	title: 'Coffee Mug - Card version 0.02',
	// img: './coffee-mug.png',
}

const App = () => {
	return (
		<>
			<ProductCard
				product={ product }
				initialValues={ {
					count: 4,
					maxCount: 10
				} }
			>
				{
					( { reset, count, isMaxCountReached, maxCount, increaseBy } ) => (
						<>
							<ProductImage/>
							<ProductTitle/>
							<ProductButtons/>
						</>
					)
				}
			</ProductCard>
		</>
	);
};

ReactDOM.render( <App/>, document.getElementById( 'root' ) );
