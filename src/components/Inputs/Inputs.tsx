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
      <h3>
        Fill your name and surname:{' '}
        <CapitalizedText>
          {' '}
          {userData.name} {userData.surname}
        </CapitalizedText>
      </h3>
      <FlexGapContainer>
        <Input placeholder="type your name" ref={inputRefName} />
        <Input placeholder="type your surname" ref={inputRefSurname} />
        <ButtonComponent name="set your data" onClick={sendData} />
      </FlexGapContainer>
    </FlexColumnContainer>
  );
};
