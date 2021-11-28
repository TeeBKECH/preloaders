import React from 'react';
import s from './Item.module.scss';

const Item = (props) => {
  return (
    <div className={s.Item}>
      <img src={props.path} className={s.Item_loader} alt="preloader" />
      <h3 className={s.h3}>{props.name}</h3>
    </div>
  )
}

export default Item
