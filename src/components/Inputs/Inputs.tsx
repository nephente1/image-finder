import { useContext, useRef } from 'react';
import { StateContext } from '../../context/appContext';
import { ButtonComponent } from '../Button/ButtonComponent';
import { CapitalizedText, FlexColumnContainer, FlexGapContainer, Input } from '../styles';

export const Inputs = () => {
  const inputRefName = useRef<HTMLInputElement>(null);
  const inputRefSurname = useRef<HTMLInputElement>(null);
  const { updateUserData, userData } = useContext(StateContext);

  const sendData = () => {
    if (inputRefName.current && inputRefSurname.current) {
      updateUserData(inputRefName.current.value, inputRefSurname.current.value);
    }
  };

  return (
    <FlexColumnContainer>
      <h2>
        Fill your name and surname:{' '}
        <CapitalizedText>
          {' '}
          {userData.name} {userData.surname}
        </CapitalizedText>
      </h2>
      <FlexGapContainer aligned="end">
        <FlexColumnContainer gap={5}>
          <label htmlFor="name">Name:</label>
          <Input aria-label="name" name="name" placeholder="type your name" ref={inputRefName} />
        </FlexColumnContainer>
        <FlexColumnContainer gap={5}>
          <label htmlFor="surname">Surname:</label>
          <Input aria-label="surname" name="surname" placeholder="type your surname" ref={inputRefSurname} />
        </FlexColumnContainer>
        <ButtonComponent name="set your data" onClick={sendData} />
      </FlexGapContainer>
    </FlexColumnContainer>
  );
};
