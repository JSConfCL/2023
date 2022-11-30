import styled from "@emotion/styled";
import { transparentize } from "polished";
import { ReactNode } from "react";

import { jsconfTheme } from "../../../styles/theme";

const BaseAlert = styled.div`
  border-radius: 8px;
  background: ${transparentize(0.5, jsconfTheme.colors.jsconfRed)};
  padding: 24px 24px 24px 24px;
  display: flex;
  font-size: 1.25rem;
  flex-direction: column;
  gap: 0.75rem;
`;

const BaseAlertTitle = styled.h2`
  font-size: 1.25em;
  text-align: center;
`;

export const Alert = (props: {
  children: ReactNode | undefined;
  title?: string;
}) => {
  const { children, title } = props;
  return (
    <BaseAlert role="alert">
      {title ? <BaseAlertTitle>{title}</BaseAlertTitle> : null}
      <span>{children}</span>
    </BaseAlert>
  );
};
