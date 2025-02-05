import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ProductTitle, ProductCard } from "../../src/";
import { product1 } from "../data/products";


describe('ProductTitle', () => {
	test('debe de mostrar el componente correctamente con el titulo personalizado', () => {
		const rerender = render(<ProductTitle title={"Custom Product"} className={"custom-class"} />);
		expect(rerender.baseElement).toMatchSnapshot();
	});

	test('debe de mostrar el componente con el nombre del producto', () => {
		const rerender = render(
			<ProductCard product={product1}>
				{
					()=> (
						<ProductTitle/>
					)
				}
			</ProductCard>
		);
		expect(rerender.baseElement).toMatchSnapshot();
	});
});