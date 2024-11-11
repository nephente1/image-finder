import React from 'react';
import { CategorySelector } from '../components/CategorySelector/CategorySelector';
import { Inputs } from '../components/Inputs/Inputs';
import { UnsplashImage } from '../components/UnsplashImage/UnsplashImage';
import { FlexColumnContainer } from '../components/styles';
import { StateContext } from '../context/appContext';

export const MainPage = () => {
  const { selectedOption } = React.useContext(StateContext);

  return (
    <>
      <Inputs />
      <CategorySelector />
      <FlexColumnContainer>{selectedOption && <UnsplashImage category={selectedOption} />}</FlexColumnContainer>
    </>
  );
};
