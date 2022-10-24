import styled from "@emotion/styled";
import { ViewportSizes } from "../../../styles/theme";

const TitleNumber = styled.span`
  /* identical to box height, or 100% */
  color: #f0e040;
`;
const TitleText = styled.span`
  color: white;
`;

const Title = styled.h2<{ status: "active" | "inactive" }>`
  font-family: "Koulen";
  font-style: normal;
  font-weight: 400;
  gap: 1rem;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  font-size: 20.914px;
  font-size: 2.5rem;
  @media (min-width: ${ViewportSizes.Phone}px) {
    font-size: 5rem;
  }
  ${TitleNumber} {
    opacity: ${({ status }) => (status === "inactive" ? 0.6 : 1)};
    text-decoration: ${({ status }) =>
      status === "inactive" ? "line-through" : "none"};
  }
  ${TitleText} {
    opacity: ${({ status }) => (status === "inactive" ? 0.6 : 1)};
    text-decoration: ${({ status }) =>
      status === "inactive" ? "line-through" : "none"};
  }
`;

export const SectionTile = ({
  status,
  number,
  text,
}: {
  status: "active" | "inactive";
  number: string;
  text: string;
}) => (
  <Title status={status}>
    <TitleNumber>{number}</TitleNumber>
    <TitleText>{text}</TitleText>
  </Title>
);
