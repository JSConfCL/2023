import styled from "@emotion/styled";

const Stick = styled.div`
  position: fixed;
  z-index: 101;
  display: block;
  width: 100%;
  bottom: 20px;
  right: 0;
`;

const StickContainer = ({ children }: { children: any }) => {
  return <Stick>{children}</Stick>;
};

export default StickContainer;
