import styled from 'styled-components';

export const ImageThumbWrapper = styled.div`
  height: 90vw;
  width: 90vw;
  max-width: 600px;
  max-height: 600px;
`;

export const ImageThumb = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  box-shadow: -3px 0px 10px 8px rgba(0, 0, 0, 0.2);
`;
