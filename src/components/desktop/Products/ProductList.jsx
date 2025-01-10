import React from 'react';
import { FixedSizeList as List } from 'react-window';
import ProductItem from '../../common/ProductItem';
import items from '@/data/items';

const ProductList = () => {
  return (
    <div className="pa3">
      <div className="flex flex-wrap bg-light-gray pa2 mb1">
        <div className="w-25 pa2 fw6">商品名稱</div>
        <div className="w-25 pa2 fw6">類別</div>
        <div className="w-25 pa2 fw6">價格</div>
        <div className="w-25 pa2 fw6">庫存</div>
      </div>
      {/* {items.map((item, index) => (
        <ProductItem key={index} {...item} />
      ))} */}
      <List
        height={620} // 設置列表的高度
        itemCount={items.length} // 項目數量
        itemSize={63} // 每個項目的高度
        width={'100%'} // 列表的寬度
      >
        {({ index, style }) => {
          const item = items[index];

          return (
            <div style={style}>
              <ProductItem {...item} />
            </div>
          );
        }}
      </List>
    </div>
  );
};

export default ProductList;
