import React, { useState } from 'react';
import FilterPanel from '@/components/common/FilterPanel';
import ProductList from './ProductList';
import useProduct from '@/hooks/useProduct';

const Products = () => {
  const [filters, setFilters] = useState({});
  const products = useProduct({ filters });

  return (
    <div className="min-vh-100 bg-near-white pa3">
      <FilterPanel onSubmit={(form) => setFilters(form)} />
      <ProductList items={products} />
    </div>
  );
};

export default Products;
