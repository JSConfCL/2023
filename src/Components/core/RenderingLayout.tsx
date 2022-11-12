import styled from "@emotion/styled";

const FlexLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  margin: 1.5rem 1rem;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  margin: 1.5rem 1rem;
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
  }
`;

const RenderingLayout = (props: {
  constributorTypeName: string;
  children: any;
}) => {
  return (
    <>
      {props.constributorTypeName === "Platinum Sponsor" && (
        <FlexLayout>{props.children}</FlexLayout>
      )}
      {props.constributorTypeName === "Gold Sponsor" && (
        <FlexLayout>{props.children}</FlexLayout>
      )}
      {props.constributorTypeName === "Silver Sponsor" && (
        <FlexLayout>{props.children}</FlexLayout>
      )}
      {props.constributorTypeName === "Bronze Sponsor" && (
        <GridLayout>{props.children}</GridLayout>
      )}
    </>
  );
};

export default RenderingLayout;
