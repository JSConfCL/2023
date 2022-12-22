import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState, useRef } from "react";
import { usePopper } from "react-popper";

export const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const StyledTooltip = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  opacity: 0;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.jsconfYellow};
  border-width: 2px;
  font-size: 0.75rem;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 4px;
  animation: ${fadeIn} 250ms ease-in 75ms forwards;
`;

export const ToolTip = ({
  children,
  content,
}: {
  children: React.ReactNode;
  content: React.ReactNode;
}) => {
  const [visible, setVisible] = useState(false);
  const referenceRef = useRef(null);
  const popperRef = useRef(null);

  const { styles, attributes } = usePopper(
    referenceRef.current,
    popperRef.current,
    {
      placement: "top",
      modifiers: [
        {
          name: "offset",
          enabled: true,
          options: {
            offset: [5, 10],
          },
        },
      ],
    }
  );

  return (
    <React.Fragment>
      <span
        ref={referenceRef}
        onPointerEnter={() => setVisible(true)}
        onPointerLeave={() => setVisible(false)}
      >
        {children}
      </span>
      {visible && (
        <StyledTooltip
          ref={popperRef}
          style={styles.popper}
          {...attributes.popper}
        >
          {content}
        </StyledTooltip>
      )}
    </React.Fragment>
  );
};
