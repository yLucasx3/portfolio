import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "@/constants/colors";

export const Container = styled.div`
  position: fixed;
  right: 7em;
  top: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15%;
`;

export const SectionNavigator = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

interface SectionNavigatorItemProps {
  $isactive: boolean;
}

export const SectionNavigatorItem = styled(
  motion.span
)<SectionNavigatorItemProps>`
  width: 0;
  height: 0;
  position: relative;
  top: -6px;
  border: 6px solid transparent;
  border-bottom-color: ${colors.primary};
  cursor: pointer;

  &:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    left: -6px;
    top: 6px;
    border: 6px solid transparent;
    border-top-color: ${colors.primary};
  }

  ${({ $isactive }) =>
    $isactive &&
    `
    width: 12px;
    height: 12px;
    border: 2px solid ${colors.primary};
    position: static;

    &:after {
      content: unset;
      position: static;
      left: 0;
    }
  `}
`;
