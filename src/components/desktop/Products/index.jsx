import React from 'react';
import ProductList from './ProductList';
import FilterPanel from '@/components/common/FilterPanel';

const Product = () => {
  return (
    <div className="flex flex-wrap pa4 bg-near-white min-vh-100">
      {/* 左側篩選面板 */}
      <div className="pr4" style={{ width: '400px' }}>
        <FilterPanel />
      </div>

      {/* 右側商品列表 */}
      <div className="flex-grow-1">
        <ProductList />
      </div>
    </div>
  );
};

export default Product;
