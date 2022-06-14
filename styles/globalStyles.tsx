import { css, Global, useTheme } from "@emotion/react";

const resetCSS = css`
  /***
  The new CSS reset - version 1.5.1 (last updated 1.3.2022)
  GitHub page: https://github.com/elad2412/the-new-css-reset
***/

  /*
  Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property
  - The "symbol *" part is to solve Firefox SVG sprite bug
*/
  *:where(:not(iframe, canvas, img, svg, video):not(svg *, symbol *)) {
    all: unset;
    display: revert;
  }

  /* Preferred box-sizing value */
  *,
  *::before,
  *::after {
    box-sizing: border-box !important;
  }

  /* Reapply the pointer cursor for anchor tags */
  a,
  button {
    cursor: revert;
  }

  /* Remove list styles (bullets/numbers) */
  ol,
  ul,
  menu {
    list-style: none;
  }

  /* For images to not be able to exceed their container */
  img {
    max-width: 100%;
  }

  /* removes spacing between cells in tables */
  table {
    border-collapse: collapse;
  }

  /* revert the 'white-space' property for textarea elements on Safari */
  textarea {
    white-space: revert;
  }

  /* minimum style to allow to style meter element */
  meter {
    -webkit-appearance: revert;
    appearance: revert;
  }

  /* reset default text opacity of input placeholder */
  ::placeholder {
    color: unset;
  }

  /* fix the feature of 'hidden' attribute.
display:revert; revert to element instead of attribute */
  :where([hidden]) {
    display: none;
  }

  /* revert for bug in Chromium browsers
- fix for the content editable attribute will work properly. */
  :where([contenteditable]) {
    -moz-user-modify: read-write;
    -webkit-user-modify: read-write;
    overflow-wrap: break-word;
    line-break: after-white-space;
    -webkit-line-break: after-white-space;
  }

  /* apply back the draggable feature - exist only in Chromium and Safari */
  :where([draggable="true"]) {
    -webkit-user-drag: element;
  }
`;

const fontsCSS = css`
  // Extracted from https://fonts.googleapis.com/css2?family=Koulen&display=swap%22
  @font-face {
    font-family: "Koulen";
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/koulen/v25/AMOQz46as3KIBPemhXo8sOUcUw.woff2)
      format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  // https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800&family=Koulen&display=swap
  @font-face {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/barlow/v12/7cHpv4kjgoGqM7E_DMs5ynghnQ.woff2)
      format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/barlow/v12/7cHqv4kjgoGqM7E3_-gs51ostz0rdg.woff2)
      format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/barlow/v12/7cHqv4kjgoGqM7E30-8s51ostz0rdg.woff2)
      format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/barlow/v12/7cHqv4kjgoGqM7E3t-4s51ostz0rdg.woff2)
      format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/barlow/v12/7cHqv4kjgoGqM7E3q-0s51ostz0rdg.woff2)
      format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: "Koulen";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/koulen/v25/AMOQz46as3KIBPemhXo8sOUcUw.woff2)
      format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
`;
export const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={[
        fontsCSS,
        resetCSS,
        css`
          body,
          html {
            font-family: ${theme.elements.global.fontFamily};
            color: ${theme.elements.global.color};
            background-color: ${theme.elements.global.backgroundColor};
            max-height: 100vh;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: ${theme.elements.global.headingsFontFamily};
            font-weight: ${theme.elements.global.headingsFontWeight};
          }
        `,
      ]}
    />
  );
};
