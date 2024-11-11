import { useContext, useRef } from 'react';
import { StateContext } from '../../context/appContext';
import { sortingOptions } from '../../shared/utils';
import { ButtonComponent } from '../Button/ButtonComponent';
import { Select } from '../Select/Select';
import { FlexGapContainer, Input } from '../styles';

export const CategorySelector = () => {
  const { selectedOption, updateSelectedOption, updateCustomOption } = useContext(StateContext);
  const inputRefCategory = useRef<HTMLInputElement>(null);

  const getData = () => {
    if (inputRefCategory.current) {
      updateCustomOption(inputRefCategory.current.value);
    }
  };

  return (
    <FlexGapContainer>
      <h3>Choose an image category : </h3>
      <Select options={sortingOptions} value={selectedOption} onChange={updateSelectedOption} />
      {selectedOption === 'other' && (
        <>
          <Input placeholder="type your category" ref={inputRefCategory} />
          <ButtonComponent name="search" onClick={getData} />
        </>
      )}
    </FlexGapContainer>
  );
};
