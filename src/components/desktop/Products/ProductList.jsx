import React from 'react';
import ProductItem from '../../common/ProductItem';

const items = [
  { name: 'Item 1', type: 'A', price: 100, available: true },
  { name: 'Item 2', type: 'B', price: 200, available: false },
  { name: 'Item 3', type: 'C', price: 300, available: true },
];

const ProductList = () => {
  return (
    <div className="pa3">
      <div className="flex flex-wrap bg-light-gray pa2">
        <div className="w-25 pa2 fw6">商品名稱</div>
        <div className="w-25 pa2 fw6">類別</div>
        <div className="w-25 pa2 fw6">價格</div>
        <div className="w-25 pa2 fw6">庫存</div>
      </div>
      {items.map((item, index) => (
        <ProductItem key={index} {...item} />
      ))}
    </div>
  );
};

export default ProductList;
