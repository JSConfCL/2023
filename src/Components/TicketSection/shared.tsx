import styled from "@emotion/styled";
import { ViewportSizes } from "../../../styles/theme";

export const Paragraph = styled.p`
  color: #fff;
  font-size: 18px;
  @media (min-width: ${ViewportSizes.Phone}px) {
    font-size: 24px;
  }
  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    font-size: 28px;
  }

  @media (min-width: ${ViewportSizes.Desktop}px) {
    font-size: 28px;
  }
`;
