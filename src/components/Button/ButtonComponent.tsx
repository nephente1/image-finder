import styled from 'styled-components';
import { THEME } from '../../shared/theme';

export const Button = styled.button`
  background: ${THEME.COLORS.TRANSPARENT_BLUE};
  color: ${THEME.COLORS.LIGHT_GREY};
  border: 1px solid #5b5074;
  padding: 6px 16px;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  gap: 4px;
  text-transform: capitalize;
  height: 34px;

  &:hover {
    background: ${THEME.COLORS.PINK};
  }
`;

interface ButtonProps {
  onClick?: () => void;
  name: string;
}

export const ButtonComponent = ({ name, onClick }: ButtonProps) => {
  return <Button onClick={onClick}>{name}</Button>;
};
