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
  gap: 4rem;
  @media (max-width: ${ViewportSizes.Phone}px) {
    gap: 2rem;
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

export const LeftSide = styled.div`
  width: 100%;
  display: flex;
  flex: 2;
  flex-direction: column;
`;

export const RigthSide = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    justify-content: flex-end;
  }

  @media (min-width: ${ViewportSizes.Desktop}px) {
    justify-content: flex-end;
  }
`;

export const ImageWrapper = styled.div`
  transition: width 250ms ease-in-out, height 250ms ease-in-out;
  position: relative;
  height: 250px;
  width: 200px;
  transform: translateY(0px);
  overflow: hidden;

  @media (min-width: ${ViewportSizes.Phone}px) {
    transform: translateY(0);
    overflow: hidden;
    width: 300px;
    height: 400px;
  }

  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    transform: translateY(-150px);
    overflow: visible;
    height: 320px;
    width: 290px;
  }

  @media (min-width: ${ViewportSizes.Desktop}px) {
    transform: translateY(-150px);
    overflow: visible;
    width: 350px;
    height: 350px;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
`;

export const Shadow = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
  background-color: ${({ theme }) => theme.colors.black};
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
`;
