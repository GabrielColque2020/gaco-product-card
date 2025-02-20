﻿import React, { createContext, CSSProperties, JSX } from "react";

import { useProduct } from "../hooks/useProduct";
import { InitialValues, onChangeArgs, Product, ProductCardHandlers, ProductContextProps } from "../interfaces/interfaces";

import styles from '../styles/styles.module.css';

export const ProductContext = createContext( {} as ProductContextProps );
const { Provider } = ProductContext;

export interface Props {
	product: Product;
	// children?: ReactElement | ReactElement[];
	children: (args: ProductCardHandlers) => JSX.Element;
	className?: string;
	style?: CSSProperties;
	onChange?: ( args: onChangeArgs ) => void;
	value?: number;
	initialValues?: InitialValues;
}

export const ProductCard = ( { product, children, className, style, onChange, value, initialValues }: Props ) => {

	const {
		counter,
		isMaxCountReached,
		maxCount,
		increaseBy,
		reset
	} = useProduct( { onChange, product, value, initialValues } );

	return (
		<Provider value={ {
			counter,
			increaseBy,
			maxCount,
			product
		} }>
			<div
				className={ `${ styles.productCard } ${ className }` }
				style={ style }>
				{ children({
					count: counter,
					isMaxCountReached,
					maxCount: initialValues?.maxCount,
					product,

					increaseBy,
					reset
				}) }
			</div>
		</Provider>
	)
}