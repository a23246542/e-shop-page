import React from 'react';
import ProductCard from '@/components/common/ProductCard';
import FilterPanel from '@/components/common/FilterPanel';
import Sorter from '@/components/common/Sorter';
import ProductList from './ProductList';

const Products = () => {
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

export default Products;
