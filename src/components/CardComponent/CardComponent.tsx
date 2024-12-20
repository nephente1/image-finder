import { Card, ImageWrapper, Image, Title } from './CardComponent.styles';

interface CardProps {
  category: string;
  name: string;
  surname: string;
  imageSrc: string;
}

export const CardComponent = ({ category, name, surname, imageSrc }: CardProps) => {
  return (
    <Card>
      <ImageWrapper>
        <Image role="img" src={imageSrc} alt={category} />
      </ImageWrapper>
      <Title>
        {name} {surname}
      </Title>
    </Card>
  );
};
