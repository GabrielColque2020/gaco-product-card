import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ProductImage, ProductCard } from "../../src/";
import { product2 } from "../data/products";


describe('ProductImage', () => {
	test('debe de mostrar el componente correctamente con la imagen personalizada', () => {
		const rerender = render(<ProductImage img={"https://hola.jpg"}/>);
		expect(rerender.baseElement).toMatchSnapshot();
	});

	test('debe de mostrar el componente con la imagen del producto', () => {
		const rerender = render(
			<ProductCard product={product2}>
				{
					()=> (
						<ProductImage/>
					)
				}
			</ProductCard>
		);
		expect(rerender.baseElement).toMatchSnapshot();
	});
});