import styled from 'styled-components';
import { THEME } from '../../shared/theme';

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url('https://img.freepik.com/free-vector/realistic-white-golden-geometric-background_79603-2032.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: #962169c7;
  border-radius: 4px;
  padding: 30px;
  width: 500px;
  height: 600px;
  cursor: pointer;
  box-shadow: -3px 0px 10px 8px rgba(0, 0, 0, 0.2);
  transform: scale(1);
  margin-bottom: 20px;
  &:hover {
    transform: scale(1.03);
    transition: 0.3s;
  }
`;

export const Title = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  width: 450px;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageWrapper = styled.div`
  height: 460px;
  width: 100%;
  margin-bottom: 15px;
  border: 3px solid ${THEME.COLORS.MAIN};
`;

export const Image = styled.img`
  height: 455px;
  width: 100%;
  object-fit: cover;
`;
