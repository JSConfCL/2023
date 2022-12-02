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

const atroposCSS = css`
  /***
  This CSS is literally taken from the library node_modules/atropos/atropos.css
  ***/

  .atropos {
    position: relative;
    display: block;
    perspective: 1200px;
    transform: translate3d(0, 0, 0);
  }
  .atropos-rotate-touch,
  .atropos-rotate-scroll-x,
  .atropos-rotate-scroll-y {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .atropos-rotate-touch-scroll-y {
    touch-action: pan-y;
  }
  .atropos-rotate-touch-scroll-x {
    touch-action: pan-x;
  }
  .atropos-rotate-touch {
    touch-action: none;
  }
  .atropos-scale,
  .atropos-rotate {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition-property: transform;
    display: block;
  }
  .atropos-shadow,
  .atropos-highlight {
    position: absolute;
    pointer-events: none;
    transition-property: transform, opacity;
    display: block;
    opacity: 0;
  }
  .atropos-shadow {
    z-index: -1;
    background: #000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    filter: blur(30px);
  }
  .atropos-highlight {
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-image: radial-gradient(
      circle at 50%,
      rgba(255, 255, 255, 0.25),
      transparent 50%
    );
    z-index: 0;
  }
  .atropos-rotate {
    position: relative;
  }
  .atropos-inner {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    transform-style: preserve-3d;
    transform: translate3d(0, 0, 0);
    display: block;
  }
  .atropos-active {
    z-index: 1;
  }
  .atropos-active .atropos-shadow {
    opacity: 1 !important;
  }
  [data-atropos-offset] {
    transition-property: transform;
  }
  [data-atropos-opacity] {
    transition-property: opacity;
  }
  [data-atropos-offset][data-atropos-opacity] {
    transition-property: transform, opacity;
  }
`;

export const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={[
        fontsCSS,
        resetCSS,
        atroposCSS,
        css`
          body,
          html {
            font-family: ${theme.elements.global.fontFamily};
            color: ${theme.elements.global.color};
            background-color: ${theme.elements.global.backgroundColor};
          }
          body,
          #__next,
          html {
            height: 100%;

            display: flex;
            flex-direction: column;
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
