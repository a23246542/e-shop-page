import React, { useState, useMemo } from 'react';
import ProductList from './ProductList';
import FilterPanel from '@/components/common/FilterPanel';
import useProduct from '@/hooks/useProduct';

const Product = () => {
  const [filters, setFilters] = useState({});

  const products = useProduct({ filters });
  return (
    <div className="flex flex-wrap pa4 bg-near-white min-vh-100">
      {/* 左側篩選面板 */}
      <div className="pr4" style={{ width: '400px' }}>
        <FilterPanel onSubmit={(form) => setFilters(form)} />
      </div>

      {/* 右側商品列表 */}
      <div className="flex-grow-1">
        <ProductList items={products} />
      </div>
    </div>
  );
};

export default Product;
