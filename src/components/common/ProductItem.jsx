import React from 'react';

const ProductItem = (props) => {
  const { name, category, price, inStock } = props;
  return (
    <div className="flex flex-wrap bg-white pa2 mv1 ba b--black-10">
      <div className="w-25 pa2">{name}</div>
      <div className="w-25 pa2">{category}</div>
      <div className="w-25 pa2">${price}</div>
      <div className="w-25 pa2">{inStock ? '是' : '否'}</div>
    </div>
  );
};

export default ProductItem;
