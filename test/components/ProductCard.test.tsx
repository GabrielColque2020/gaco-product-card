import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ProductCard } from "../../src/";
import { product1 } from "../data/products";


describe( 'ProductCard', () => {
	test( 'debe de mostrar el componente correctamente', () => {
		const rerender = render(
			<ProductCard product={ product1 }>
				{
					() => (
						<h1>Product Card</h1>
					)
				}
			</ProductCard>
		);
		expect( rerender.baseElement ).toMatchSnapshot();
	} );

	test( 'debe de incrementar el contador', () => {
		const rerender = render(
			<ProductCard product={ product1 }>
				{
					( { count, increaseBy } ) => (
						<>
							<h1>Product Card</h1>
							<span>{ count }</span>
							<button onClick={ () => increaseBy( 1 ) }>Increment</button>
						</>
					)
				}
			</ProductCard>
		);


		expect( rerender.baseElement ).toMatchSnapshot();

		const button = rerender.getByText('Increment');
		fireEvent.click(button);

		expect( rerender.baseElement ).toMatchSnapshot();
	} );
} );