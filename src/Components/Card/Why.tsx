import styled from "@emotion/styled";
import { Document } from "@contentful/rich-text-types";
import { H2 } from "../core/Typography";
import Description from "../core/Description";
import Image from "../core/Image";

type WhyCardProps =
  | {
      number: number;
      title?: string | undefined;
      description?:
        | {
            json?: Document | undefined;
          }
        | undefined;
      icon?:
        | {
            url?: string | undefined;
            description?: string | undefined;
          }
        | undefined;
    }
  | undefined;

const Container = styled.section<{ direction: boolean }>`
  padding: 48px 0px;
  padding-left: ${({ direction }) => (!direction ? "48px" : "0px")};
  padding-right: ${({ direction }) => (!direction ? "0px" : "48px")};
  display: flex;
  gap: 32px;
  flex-direction: ${({ direction }) => (!direction ? "row" : "row-reverse")};
  overflow: hidden;
  @media (min-width: 1560px) {
    overflow: visible;
  }
`;

const HR = styled.hr`
  border-width: 1px;
  border-color: #f45b69;
  border-style: solid;
  width: 50%;
  background-color: #f45b69;
`;

const WrapperDescription = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 470px;
  gap: 32px 0px;
`;

const Number = styled.section<{ direction: boolean }>`
  font-family: "Koulen";
  font-style: normal;
  font-weight: 400;
  font-size: 341.766px;
  line-height: 342px;
  /* identical to box height, or 100% */
  display: flex;
  align-items: flex-start;
  min-width: 300px;
  color: #f0e040;
  margin-right: ${({ direction }) => (!direction ? "-48px" : "0px")};
  margin-left: ${({ direction }) => (direction ? "-108px" : "0px")};
`;

const WhyCard = (props: WhyCardProps) => {
  return (
    <Container direction={props?.number! % 2 === 0}>
      <WrapperDescription>
        <H2>{props?.title!}</H2>
        <Description data={props?.description?.json!} />
        <HR />
      </WrapperDescription>
      <Image
        mobile={props?.icon?.url!}
        alt={props?.icon?.description! || ""}
        style={{
          marginTop: "115px",
          borderRadius: "0px 32px 0px 0px",
          width: "100vw",
          maxWidth: "611px",
          minWidth: "611px",
          aspectRatio: "611 / 390",
          objectFit: "cover",
          objectPosition: "bottom",
        }}
      />
      <Number direction={props?.number! % 2 === 0}>0{props?.number!}</Number>
    </Container>
  );
};
export default WhyCard;
