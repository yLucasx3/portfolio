import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "@/constants/colors";
import { sizes } from "@/constants/sizes";

export const Container = styled.header`
  position: fixed;
  width: 100vw;
  max-width: 100vw;
  height: 11.12em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;

  span {
    padding-left: 7em;
  }
`;

export const NavigationContainer = styled(motion.nav)`
  position: absolute;
  top: 1.39em;
  right: 3.41em;
  background-color: ${colors.white};
  color: ${colors.primary};
  font-size: ${sizes.lg};

  ul {
    margin: 1.2em 0;

    li {
      list-style: none;
      cursor: pointer;

      a {
        line-height: 2.5;
        text-decoration: none;

        &:hover::after {
          content: "";
          width: 20px;
          height: 20px;
          background-color: red;
        }
      }
    }
  }
`;
