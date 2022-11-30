import styled from "@emotion/styled";
import { transparentize } from "polished";
import { ReactElement } from "react";

import { jsconfTheme } from "../../../styles/theme";

const BaseAlert = styled.div`
  border-radius: 8px;
  background: ${transparentize(0.5, jsconfTheme.colors.jsconfRed)};
  padding: 16px 24px 24px 24px;
  margin-bottom: 16px;
`;

const BaseAlertTitle = styled.h2`
  margin-bottom: 8px;
  font-size: 1.2em;
`;

export const Alert = (props: {
  children: string | ReactElement | ReactElement[];
  title?: string;
}) => {
  const { children, title, ...rest } = props;
  return (
    <BaseAlert role="alert" {...rest}>
      {title ? <AlertTitle>{title}</AlertTitle> : null}
      {children}
    </BaseAlert>
  );
};

export const AlertTitle = ({
  children,
}: {
  children: string | ReactElement | ReactElement[];
}) => {
  return <BaseAlertTitle>{children}</BaseAlertTitle>;
};
