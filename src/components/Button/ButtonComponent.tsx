import styled from 'styled-components';
import { THEME } from '../../shared/theme';

export const Button = styled.button`
  background: ${THEME.COLORS.PINK};
  color: ${THEME.COLORS.LIGHT_GREY};
  border: 1px solid ${THEME.COLORS.PINK};
  padding: 6px 16px;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  gap: 4px;
  text-transform: capitalize;
  height: 34px;
  align-items: center;
  min-width: fit-content;

  &:hover {
    background: ${THEME.COLORS.TRANSPARENT_BLUE};
  }
`;

interface ButtonProps {
  onClick?: () => void;
  name: string;
}

export const ButtonComponent = ({ name, onClick }: ButtonProps) => {
  return <Button onClick={onClick}>{name}</Button>;
};
