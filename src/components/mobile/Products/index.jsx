import React from 'react';
import ProductCard from '@/components/common/ProductCard';
import FilterPanel from '@/components/common/FilterPanel';
import ProductList from './ProductList';

const Products = () => {
  return (
    <div className="min-vh-100 bg-near-white pa3">
      <FilterPanel />
      <ProductList />
    </div>
  );
};

export default Products;
