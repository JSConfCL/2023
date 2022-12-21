import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Anchor, H1, H2, H3, P } from "../core/Typography";
import styled from "@emotion/styled";
import { ViewportSizes } from "../../../styles/theme";

const StyledH1 = styled(H1)`
  font-size: 3rem;
  @media (min-width: ${ViewportSizes.Phone}px) {
    font-size: 4rem;
  }
  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    font-size: 5rem;
  }
  @media (min-width: ${ViewportSizes.Desktop}px) {
    font-size: 5rem;
  }
`;
const StyledH2 = styled(H2)`
  font-size: 2rem;
  @media (min-width: ${ViewportSizes.Phone}px) {
    font-size: 3rem;
  }
  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    font-size: 4rem;
  }
  @media (min-width: ${ViewportSizes.Desktop}px) {
    font-size: 4rem;
  }
`;

const StyledH3 = styled(H3)`
  margin-top: 32px;
`;

const Table = styled.table`
  padding: 16px;

  td,
  th {
    padding: 16px;
    border: ${({ theme }) => `1px solid ${theme.colors.jsconfYellow}`};
  }
  th {
    border: 0px;
    color: ${({ theme }) => theme.colors.jsconfBlack};
    font-weight: 600;
    background: ${({ theme }) => theme.colors.jsconfYellow};
  }

  th:last-child {
    border-radius: 0px 20px 0px 0px;
  }
`;

export const Bold = styled.p`
  font-weight: 700;
`;

type Props = {
  children: string;
};

export const CustomMarkdown = (props: Props) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: (args: any) => <StyledH1 {...args} />,
        h2: (args: any) => <StyledH2 {...args} />,
        h3: (args: any) => <StyledH3 {...args} />,
        p: (args: any) => <P {...args} />,
        a: (args: any) => <Anchor {...args} />,
        strong: (args: any) => <Bold {...args} />,
        table: (args: any) => <Table {...args} />,
      }}
    >
      {props.children}
    </ReactMarkdown>
  );
};
