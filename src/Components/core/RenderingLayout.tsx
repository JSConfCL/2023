import styled from "@emotion/styled";

const FlexLayout = styled.div<{ height: string }>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 1.5rem 1rem;

  img {
    height: ${({ height }) => height};
  }
`;

const RenderingLayout = (props: {
  constributorTypeName: string;
  children: any;
}) => {
  return (
    <>
      {props.constributorTypeName === "Platinum Sponsor" && (
        <FlexLayout height="100px">{props.children}</FlexLayout>
      )}
      {props.constributorTypeName === "Gold Sponsor" && (
        <FlexLayout height="60px">{props.children}</FlexLayout>
      )}
      {props.constributorTypeName === "Silver Sponsor" && (
        <FlexLayout height="40px">{props.children}</FlexLayout>
      )}
      {props.constributorTypeName === "Bronze Sponsor" && (
        <FlexLayout height="30px">{props.children}</FlexLayout>
      )}
    </>
  );
};

export default RenderingLayout;
