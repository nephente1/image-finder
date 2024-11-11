import { useQueryClient } from '@tanstack/react-query';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { ButtonComponent } from '../components/Button/ButtonComponent';
import { CardComponent } from '../components/CardComponent/CardComponent';
import { ContainerTitle, CenterJustifiedContainer } from '../components/styles';
import { StateContext } from '../context/appContext';

export const GenerateCard = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { selectedOption, customOption, userData } = useContext(StateContext);
  const { name, surname } = userData;
  const imageCategory = selectedOption === 'other' ? customOption : selectedOption;
  const cachedImage: { urls: { regular: string } } | undefined = queryClient.getQueryData(['image', imageCategory]);

  return (
    <>
      <ContainerTitle>Generate Card</ContainerTitle>
      <CenterJustifiedContainer>
        {cachedImage && name && surname ? (
          <CardComponent category={selectedOption} name={name} surname={surname} imageSrc={cachedImage.urls.regular} />
        ) : (
          <h3>Please select an image category and fill your name and surname</h3>
        )}
        <ButtonComponent name="Back" onClick={() => navigate(-1)} />
      </CenterJustifiedContainer>
    </>
  );
};
