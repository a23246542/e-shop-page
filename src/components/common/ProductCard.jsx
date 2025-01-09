import React from 'react';

const item = {
  name: 'Item 1',
  category: 'A',
  price: 100,
  inStock: true,
};

const ProductCard = (props = item) => {
  const { name, category, price, inStock } = props;
  return (
    <div className="ba b--black-10 pa3 bg-white br3 shadow-1">
      <h2 className="f5 fw6 mb2">{name}</h2>
      <div className="flex flex-column">
        <div className="mb2">
          <span className="fw6">商品名稱: </span>
          <span>{name}</span>
        </div>
        <div className="mb2">
          <span className="fw6">類別: </span>
          <span>{category}</span>
        </div>
        <div className="mb2">
          <span className="fw6">價格: </span>
          <span>${price}</span>
        </div>
        <div>
          <span className="fw6">庫存: </span>
          <span>{inStock ? '有庫存' : '無庫存'}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
