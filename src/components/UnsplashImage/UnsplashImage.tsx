import React from 'react';
import { useNavigate } from 'react-router';
import { useImageQuery } from '../../api';
import { StateContext } from '../../context/appContext';
import { ButtonComponent } from '../Button/ButtonComponent';
import { CapitalizedText, CenterAlignedContainer, CenterJustifiedContainer, Loader } from '../styles';
import { ImageThumbWrapper, ImageThumb } from './UnsplashImage.styles';

interface UnsplashImageProps {
  category: string;
}

export const UnsplashImage: React.FC<UnsplashImageProps> = ({ category }) => {
  const navigate = useNavigate();
  const { customOption } = React.useContext(StateContext);
  const imageCategory = category === 'other' ? customOption : category;
  const { data: image, isLoading, error, refetch } = useImageQuery(imageCategory);

  if (error instanceof Error)
    return (
      <p>
        Error: {error.message}, please try again <ButtonComponent name="Refresh data" onClick={handleReject} />
      </p>
    );
  if (isLoading) return <Loader data-testid="loader" />;
  if (!category || (category === 'other' && customOption === '')) return <p>Please select an image category...</p>;

  const handleAccept = () => {
    navigate('/generate');
  };

  function handleReject() {
    refetch();
  }

  return (
    <CenterJustifiedContainer>
      <h3>
        Picture from <CapitalizedText>{imageCategory}</CapitalizedText> category
      </h3>
      <ImageThumbWrapper>
        <ImageThumb key={image?.id} src={image?.urls.regular} alt={image?.alt_description || category} />
      </ImageThumbWrapper>
      <CenterAlignedContainer>
        <ButtonComponent name="Accept" onClick={handleAccept} />
        <ButtonComponent name="Reject" onClick={handleReject} />
      </CenterAlignedContainer>
    </CenterJustifiedContainer>
  );
};
