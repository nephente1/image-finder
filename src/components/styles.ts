import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { THEME } from '../shared/theme';

export const AppLayout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background: #e5e5e5;
  font-size: 16px;
  background: radial-gradient(#8d4747, #24275a);
`;

export const Container = styled.main`
  width: 80%;
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
  color: ${THEME.COLORS.LIGHT_GREY};
`;

export const ContainerTitle = styled.div`
  font-size: 26px;
  font-weight: bold;
  color: ${THEME.COLORS.LIGHT_GREY};
  text-transform: capitalize;
`;

export const Footer = styled.footer`
  height: 40px;
`;

export const CenterAlignedContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin: 5px 0;
`;

export const CenterJustifiedContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 5px 0;
  flex-direction: column;
`;

export const FlexColumnContainer = styled.section<{ gap?: number }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.gap ? props.gap + 'px' : '15px')};
`;

export const FlexGapContainer = styled.div<{ aligned?: string }>`
  display: flex;
  gap: 10px;
  align-items: ${(props) => (props.aligned ? props.aligned : 'center')};

  @media (max-width: 650px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const Input = styled.input`
  height: 34px;
  width: 200px;
  background: ${THEME.COLORS.TRANSPARENT_BLACK};
  color: ${THEME.COLORS.LIGHT_GREY};
  border: 1px solid #5b5074;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  z-index: 1;
  text-transform: capitalize;
  &:focus {
    outline: 0;
    border: 1px solid ${THEME.COLORS.PINK};
  }
`;

export const CapitalizedText = styled.span`
  text-transform: capitalize;
  color: #f8a5d8c7;
`;

const loadingSpinner = keyframes`
  from { transform: rotate(0deg)}
  to { transform: rotate(360deg)}
`;

export const Loader = styled.div<{ position?: string }>`
  width: ${(props) => (props.position === 'absolute' ? '100%' : '100px')};
  height: ${(props) => (props.position === 'absolute' ? '100%' : '100px')};
  margin: auto;
  position: ${(props) => (props.position === 'absolute' ? 'absolute' : 'relative')};
  top: 0;
  left: 0;

  &::after {
    content: ' ';
    display: block;
    position: absolute;
    width: 80px;
    height: 80px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #a77da3 transparent #a77da3 transparent;
    animation: ${loadingSpinner} 1.4s linear infinite;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

export const LinkCustom = styled(Link)`
  color: ${THEME.COLORS.LIGHT_GREY};
`;
