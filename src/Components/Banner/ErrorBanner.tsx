import styled from "@emotion/styled";
import { transparentize } from "polished";
import { AlertCircle } from "react-feather";

const StyledBanner = styled.div`
  border-radius: 8px;
  background: ${({ theme }) => transparentize(0.5, theme.colors.jsconfRed)};
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  display: flex;
  gap: 1rem;
`;

const StyledTitle = styled.h2`
  text-align: center;
  flex-direction: column;
  font-size: 1.25em;
  line-height: 8px;
`;

export const ErrorBanner = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <StyledBanner>
      <StyledTitle>
        <AlertCircle size={16} style={{ marginRight: 8 }} />
        {title}
      </StyledTitle>
      <span>{children}</span>
    </StyledBanner>
  );
};
