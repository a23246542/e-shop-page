import React, { useState, useEffect } from 'react';
import { FixedSizeGrid as Grid } from 'react-window';
import ProductCard from '@/components/common/ProductCard';

const columnCount = 2; // 設置列數
const padding = 16 + 16; // 內邊距
const width = document.documentElement.clientWidth - padding;
const columnWidth = width / columnCount; // 每列的寬度
const ProductList = (props) => {
  const { items } = props;
  return (
    <div className="w-100">
      <Grid
        className="hide-scrollbar"
        width={width} // 列表的寬度
        columnCount={columnCount} // 列數
        columnWidth={columnWidth} // 每列的寬度
        height={600} // 設置列表的高度
        rowHeight={200} // 每行的高度
        rowCount={Math.ceil(items.length / columnCount)} // 行數
      >
        {({ columnIndex, rowIndex, style }) => {
          const index = rowIndex * columnCount + columnIndex;
          if (index >= items.length) return null;
          const item = items[index];
          return (
            <div style={style}>
              <div className="w-100 pa2" style={{ maxWidth: '100%' }}>
                <ProductCard {...item} />
              </div>
            </div>
          );
        }}
      </Grid>
    </div>
  );
};

export default ProductList;
