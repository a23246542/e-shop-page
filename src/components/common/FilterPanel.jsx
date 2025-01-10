import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'A', label: '電子產品' },
  { value: 'B', label: '家居' },
  { value: 'C', label: '服飾' },
  { value: 'D', label: '食品' },
  { value: 'E', label: '美妝' },
];

const initState = {
  search: '',
  category: [],
  minPrice: '',
  maxPrice: '',
  sort: 'lowToHigh',
  inStock: false,
};

const FilterPanel = (props) => {
  const [formState, setFormState] = useState(initState);
  console.log({ formState });

  const handleChange = (name, value) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    props?.onSubmit?.(formState);
  };

  const handleReset = () => {
    setFormState(initState);
  };

  return (
    <div className="bg-white br2 pa3 shadow-1 mb4">
      <div className="flex flex-wrap items-center">
        {/* 搜尋框 */}
        <div className="w-100 mb1">
          <input
            type="search"
            placeholder="搜尋商品..."
            className="w-100 pa2 br2 ba b--silver"
            value={formState.search}
            onChange={(e) => handleChange('search', e.target.value)}
          />
        </div>

        {/* 類別篩選 */}
        <div className="w-100 pr2 mb1">
          <h3 className="f6 fw6 mb2">類別</h3>
          <Select
            isMulti
            options={options}
            value={options.find((opt) =>
              formState.category.includes(opt.value)
            )}
            onChange={(selected) => {
              handleChange(
                'category',
                selected.map((item) => item.value)
              );
            }}
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
              value={formState.minPrice}
              onChange={(e) => handleChange('minPrice', e.target.value)}
            />
            <input
              type="number"
              placeholder="最高"
              className="w-50 ml1 pa2 br2 ba b--silver"
              value={formState.maxPrice}
              onChange={(e) => handleChange('maxPrice', e.target.value)}
            />
          </div>
          {/* 排序選擇 */}
          <select
            className="pa2 br2 ba b--silver bg-white"
            value={formState.sort}
            onChange={(e) => handleChange('sort', e.target.value)}
          >
            <option>價格由低到高</option>
            <option>價格由高到低</option>
          </select>
        </div>

        {/* 庫存篩選 */}
        <div className="w-100 flex items-center justify-end">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr2 v-mid"
              checked={formState.inStock}
              onChange={(e) => handleChange('inStock', e.target.checked)}
            />
            <span className="f6 v-mid">僅顯示有庫存</span>
          </label>
        </div>

        {/* 分隔線 */}
        <div className="w-100 bb b--light-gray mb3"></div>

        {/* 按鈕區域 */}
        <div className="w-100 flex justify-end">
          <button
            className="f6 bn bg-light-gray hover-bg-moon-gray gray ph3 pv2 br2 mr2"
            onClick={handleReset}
          >
            重置
          </button>
          <button
            className="f6 bn bg-blue hover-bg-dark-blue white ph3 pv2 br2"
            onClick={handleSubmit}
          >
            套用篩選
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
