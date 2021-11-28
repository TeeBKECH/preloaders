import React from 'react';
import Item from '../Item/Item';
import s from './Container.module.scss';
import { svg_path } from "../../svg_loaders/svg_path";

export const Container = () => {
	return (
		<main className={s.Container}>
			{
				svg_path.map( (item, index) => {
					return <Item name={item.name} path={item.loader} key={index}/>
				})
			}
		</main>
	)
}