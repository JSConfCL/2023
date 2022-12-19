import styled from "@emotion/styled";

import { ViewportSizes } from "../../../styles/theme";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  width: 100vw;
  gap: 2rem;
  max-width: 1440px;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: ${ViewportSizes.Phone}px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  @media (min-width: ${ViewportSizes.Desktop}px) {
    gap: 4rem;
  }
`;
