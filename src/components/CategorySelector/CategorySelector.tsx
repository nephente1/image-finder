import { useContext, useRef } from 'react';
import { StateContext } from '../../context/appContext';
import { sortingOptions } from '../../shared/utils';
import { ButtonComponent } from '../Button/ButtonComponent';
import { Select } from '../Select/Select';
import { FlexColumnContainer, FlexGapContainer, Input } from '../styles';

export const CategorySelector = () => {
  const { selectedOption, updateSelectedOption, updateCustomOption } = useContext(StateContext);
  const inputRefCategory = useRef<HTMLInputElement>(null);

  const getData = () => {
    if (inputRefCategory.current) {
      updateCustomOption(inputRefCategory.current.value);
    }
  };

  return (
    <FlexColumnContainer>
      <h2>Choose an image category : </h2>
      <FlexGapContainer aligned="end">
        <Select options={sortingOptions} value={selectedOption} onChange={updateSelectedOption} />
        {selectedOption === 'other' && (
          <>
            <FlexColumnContainer gap={5}>
              <label htmlFor="category">Option select</label>
              <Input aria-label="category" name="category" placeholder="type your category" ref={inputRefCategory} />
            </FlexColumnContainer>
            <ButtonComponent name="search" onClick={getData} />
          </>
        )}
      </FlexGapContainer>
    </FlexColumnContainer>
  );
};
