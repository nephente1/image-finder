import styled from 'styled-components';
import { THEME } from '../../shared/theme';

export const SelectWrapper = styled.select`
  height: 34px;
  width: 200px;
  background: ${THEME.COLORS.TRANSPARENT_BLACK};
  color: ${THEME.COLORS.LIGHT_GREY};
  border: 1px solid #5b5074;
  border-radius: 4px;
  padding: 4px 6px;
  cursor: pointer;
  z-index: 1;
  text-transform: uppercase;
  &:focus {
    outline: 0;
  }
`;

export const Option = styled.option`
  color: ${THEME.COLORS.MAIN};
  background: ${THEME.COLORS.LIGHT_GREY};
  border: none;
  border-radius: 0px;
  border: 1px solid ${THEME.COLORS.TRANSPARENT_BLUE};
  text-transform: uppercase;
  &:first-of-type {
    text-transform: capitalize;
  }
`;
