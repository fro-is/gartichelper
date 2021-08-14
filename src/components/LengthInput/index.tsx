import React from 'react';

import { FilterInputContainer } from './styles';

const FilterInput: React.FC = ({ children }) => {
  return <FilterInputContainer>{children}</FilterInputContainer>;
};

export default FilterInput;
