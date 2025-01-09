import React from 'react';
import Select from 'react-select';

const FilterPanel = () => {
  const options = [
    { value: '', label: '全部類別' },
    { value: '電子產品', label: '電子產品' },
    { value: '家居', label: '家居' },
    { value: '服飾', label: '服飾' },
    { value: '食品', label: '食品' },
  ];
  return (
    <div className="bg-white br2 pa3 shadow-1 mb4">
      <div className="flex flex-wrap items-center">
        {/* 搜尋框 */}
        <div className="w-100 mb1">
          <input
            type="search"
            placeholder="搜尋商品..."
            className="w-100 pa2 br2 ba b--silver"
          />
        </div>

        {/* 類別篩選 */}
        <div className="w-100 pr2 mb1">
          <h3 className="f6 fw6 mb2">類別</h3>
          <Select
            isMulti
            options={options}
            // className="w-100 pa2 br2 ba b--silver bg-white"
          />
        </div>

        {/* 價格範圍 */}
        <div className="w-100">
          <h3 className="f6 fw6 mb2">價格範圍</h3>
          <div className="flex">
            <input
              type="number"
              placeholder="最低"
              className="w-50 mr1 pa2 br2 ba b--silver"
            />
            <input
              type="number"
              placeholder="最高"
              className="w-50 ml1 pa2 br2 ba b--silver"
            />
          </div>
          {/* 排序選擇 */}
          <select className="pa2 br2 ba b--silver bg-white">
            <option>價格由低到高</option>
            <option>價格由高到低</option>
          </select>
        </div>

        {/* 庫存篩選 */}
        <div className="w-100 flex items-center justify-end">
          <label className="flex items-center">
            <input type="checkbox" className="mr2 v-mid" />
            <span className="f6 v-mid">僅顯示有庫存</span>
          </label>
        </div>

        {/* 分隔線 */}
        <div className="w-100 bb b--light-gray mb3"></div>

        {/* 按鈕區域 */}
        <div className="w-100 flex justify-end">
          <button
            className="f6 bn bg-light-gray hover-bg-moon-gray gray ph3 pv2 br2 mr2"
            onClick={() => {
              // 重置邏輯
            }}
          >
            重置
          </button>
          <button
            className="f6 bn bg-blue hover-bg-dark-blue white ph3 pv2 br2"
            onClick={() => {
              // 套用篩選邏輯
            }}
          >
            套用篩選
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
