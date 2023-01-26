import styled from "@emotion/styled";
import { useState } from "react";
import { X } from "react-feather";

import { ViewportSizes } from "../../styles/theme";

const Banner = styled.div`
  background-color: ${({ theme }) => theme.colors.jsconfRed};
  color: white;
  margin: 0 auto;
  width: 90%;
  font-size: 1.6em;
  padding: 16px;
  position: relative;

  a {
    text-decoration: underline;
  }
`;

const Actions = styled.div`
  text-align: right;

  @media (min-width: ${ViewportSizes.Phone}px) {
    position: absolute;
    right: 8px;
    top: 8px;
  }
`;

const Button = styled.button`
  background: transparent;
  border: transparent;
  cursor: pointer;
`;
export default function BannerComponent({ children }: { children: any }) {
  const [show, setShow] = useState(true);

  if (!show) {
    return <></>;
  }
  return (
    <Banner>
      <Actions>
        <Button onClick={() => setShow(false)} aria-label="close banner">
          <X size={32} />
        </Button>
      </Actions>
      {children}
    </Banner>
  );
}
