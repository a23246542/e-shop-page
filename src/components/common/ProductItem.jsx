import React from 'react';

const item = {
  name: 'Item 1',
  type: 'A',
  price: 100,
  available: true,
};

const items = [
  { name: 'Item 1', type: 'A', price: 100, available: true },
  { name: 'Item 2', type: 'B', price: 200, available: false },
  { name: 'Item 3', type: 'C', price: 300, available: true },
];

const ProductItem = (props = item) => {
  const { name, type, price, available } = props;
  return (
    // <div className="pa3">
    //   <table className="collapse ba br2 b--black-10 pv2 ph3 bg-white">
    //     <thead>
    //       <tr className="striped--light-gray">
    //         <th className="pv2 ph3 tl f6 fw6 ttu bg-light-gray black">
    //           商品名稱
    //         </th>
    //         <th className="pv2 ph3 tl f6 fw6 ttu bg-light-gray black">類別</th>
    //         <th className="pv2 ph3 tl f6 fw6 ttu bg-light-gray black">價格</th>
    //         <th className="pv2 ph3 tl f6 fw6 ttu bg-light-gray black">庫存</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {items.map((item, index) => (
    //         <tr key={index} className="striped--light-gray">
    //           <td className="pv2 ph3">{item.name}</td>
    //           <td className="pv2 ph3">{item.type}</td>
    //           <td className="pv2 ph3">${item.price}</td>
    //           <td className="pv2 ph3">{item.available ? '是' : '否'}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
    <div className="flex flex-wrap bg-white pa2 mv1 ba b--black-10">
      <div className="w-25 pa2">{item.name}</div>
      <div className="w-25 pa2">{item.type}</div>
      <div className="w-25 pa2">${item.price}</div>
      <div className="w-25 pa2">{item.available ? '是' : '否'}</div>
    </div>
  );
};

export default ProductItem;
