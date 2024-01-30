import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "@/constants/colors";

export const Button = styled(motion.button)`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 48px;
  height: 32px;
  margin-right: 7em;
`;

export const Line = styled(motion.div)`
  height: 2px;
  background-color: ${colors.primary};
  width: 100%;
  position: absolute;
`;
