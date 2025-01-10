import { useMemo } from 'react';
import items from '@/data/items';

function useProduct({ filters }) {
  const filteredItems = useMemo(() => {
    if (!filters) return items;
    return items
      .filter((item) => {
        const { categories, minPrice, maxPrice, search, inStock } = filters;
        if (search?.trim() && !item.name.includes(search)) return false;
        if (categories?.length > 0 && !categories.includes(item.category))
          return false;
        if (minPrice && item.price < minPrice) return false;
        if (maxPrice && item.price > maxPrice) return false;
        if (inStock && !item.inStock) return false;
        return true;
      })
      .sort((a, b) => {
        if (filters.sort === 'lowToHigh') return a.price - b.price;
        return b.price - a.price;
      });
  }, [filters]);

  return filteredItems;
}

export default useProduct;
