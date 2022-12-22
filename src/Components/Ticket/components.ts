import styled from "@emotion/styled";
import { motion } from "framer-motion";

import { ViewportSizes } from "../../../styles/theme";

export const FakeTicketContainer = styled(motion.div)`
  height: 480px;
  @media (min-width: ${ViewportSizes.Phone}px) {
    height: 380px;
  }
`;
