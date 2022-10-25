/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";
import Link from "next/link";
import { Get } from "type-fest";
import { ViewportSizes } from "../../../styles/theme";
import { FooterQueryQuery } from "../../graphql/footer.generated";
import { JSConfLogo } from "../svgs/logo";

type Props = {
  page: Get<FooterQueryQuery, "page.footer">;
};

const StyledFooter = styled.footer(
  ({ theme }) => `
  background-color: ${theme.colors.jsconfYellow};
  color: ${theme.colors.jsconfBlack};
  z-index: 100;
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;
  flex-direction: column;
`
);

const StyledWrapper = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0px 48px",
  height: 100,
  width: "100%",
  maxWidth: 1440,
  [theme.breakpoints.phoneOnly]: {
    flexDirection: "column",
    height: "100%",
    padding: "32px 16px",
  },
  [theme.breakpoints.tabletLandscapeOnly]: {
    flexDirection: "column",
    height: "100%",
    padding: "32px 16px",
  },
}));

const StyledLinksContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;
  @media (min-width: ${ViewportSizes.Phone}px) {
    flex-direction: column;
  }
  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    gap: 15px;
    flex-direction: row;
  }
  @media (min-width: ${ViewportSizes.Desktop}px) {
    gap: 20px;
    flex-direction: row;
  }
`;

const StyledLink = styled.li`
  padding: 16px;
  font-weight: 400;
  font-family: "Koulen";
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const StyledJSConfLogoWrapper = styled.div`
  height: 100%;
  max-height: 50px;
  aspect-ratio: 1/1;
`;

export const Footer = (page: Props) => {
  return (
    <StyledFooter>
      <StyledWrapper>
        <StyledJSConfLogoWrapper>
          <JSConfLogo />
        </StyledJSConfLogoWrapper>
        <StyledLinksContainer>
          {page.page?.linksCollection?.items.map((item) => {
            return (
              <StyledLink key={item?.sys.id}>
                {item?.isBlank ? (
                  <Link rel="preconnect" href={item?.link!} passHref>
                    <a target="_blank">{item?.contenido}</a>
                  </Link>
                ) : (
                  <Link href={item?.link!}>{item?.contenido}</Link>
                )}
              </StyledLink>
            );
          })}
        </StyledLinksContainer>
      </StyledWrapper>
    </StyledFooter>
  );
};

export default Footer;
