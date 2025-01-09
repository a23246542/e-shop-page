import React from 'react';
import ProductList from './ProductList';
import FilterPanel from '@/components/common/FilterPanel';
import Sorter from '@/components/common/Sorter';

const Product = () => {
  return (
    <div>
      <div className="flex">
        <FilterPanel />
        <Sorter />
      </div>
      <ProductList />
    </div>
  );
};

export default Product;
