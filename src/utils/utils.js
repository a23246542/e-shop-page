import { categoryOptions } from './options';

export const categoryLabelMap = categoryOptions.reduce((acc, option) => {
  acc[option.value] = option.label;
  return acc;
}, {});
