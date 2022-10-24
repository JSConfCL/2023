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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: ${ViewportSizes.Phone}px) {
    gap: 1rem;
  }

  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    gap: 2rem;
  }

  @media (min-width: ${ViewportSizes.Desktop}px) {
    gap: 2rem;
  }
`;

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: ${ViewportSizes.Phone}px) {
    gap: 1rem;
  }

  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    flex-direction: row;
    gap: 5rem;
  }

  @media (min-width: ${ViewportSizes.Desktop}px) {
    flex-direction: row;
    gap: 9rem;
  }
`;
