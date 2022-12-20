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
  @font-face {
    font-family: "Permanent Marker";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/permanentmarker/v16/Fh4uPib9Iyv2ucM6pGQMWimMp004La2Cf5b6jlg.woff2)
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

const atcbCSS = css`
  /***
  This CSS is literally taken from the library node_modules/add-to-calendar-button/assets/css/atcb.css
  ***/
  .atcb {
    display: none;
  }
  :root {
    --base-font-size-l: 16px;
    --base-font-size-m: 16px;
    --base-font-size-s: 16px;
    --font: arial, helvetica, sans-serif;
    --atcb-keyboard-focus: #1e90ff;
    --atcb-background: #f5f5f5;
    --atcb-background-hover: #fff;
    --atcb-border: #d2d2d2;
    --atcb-text: #333;
    --atcb-text-2: #000;
    --atcb-close-background: #e5e5e5;
    --atcb-close-text: #777;
    --atcb-overlay-background: rgba(20 20 20 / 25%);
    --atcb-modal-background: #f5f5f5;
    --atcb-modal-buttons-bar: #c6c8cd;
    --atcb-modal-btn-background: #f5f5f5;
    --atcb-modal-btn-sec-background: #e2e1e6;
    --atcb-modal-btn-background-hover: #fff;
    --atcb-modal-btn-text: #2e2e2e;
    --atcb-modal-btn-text-hover: #161616;
    --atcb-modal-btn-sec-text: #666567;
    --atcb-modal-date-btn-text: #1d1d1e;
    --atcb-modal-date-btn-text-2: #3a3a3f;
    --atcb-modal-date-btn-cal-text: #fff;
    --atcb-modal-date-btn-cal-text-2: #d3d2d7;
    --atcb-modal-date-btn-cal-background: #313132;
    --atcb-modal-date-btn-background: #eae9ed;
    --atcb-modal-date-btn-background-hover: #fff;
    --atcb-shadow-button: rgba(0 0 0 / 30%) 2px 5px 18px -1px,
      rgba(0 0 0 / 25%) 2px 2px 10px -3px;
    --atcb-shadow-button-hover: rgba(0 0 0 / 40%) 2px 5px 18px -1px,
      rgba(0 0 0 / 35%) 2px 2px 10px -3px;
    --atcb-shadow-button-active: rgba(0 0 0 / 50%) 2px 5px 18px -1px,
      rgba(0 0 0 / 45%) 2px 2px 10px -3px;
    --atcb-shadow-list: rgba(0 0 0 / 20%) 2px 5px 18px -1px,
      rgba(0 0 0 / 40%) 2px 2px 10px -3px;
    --atcb-shadow-list-modal: rgba(0 0 0 / 60%) 3px 6px 40px -5px,
      rgba(0 0 0 / 60%) 3px 3px 15px -4px;
    --atcb-shadow-modal: drop-shadow(5px 8px 30px rgba(0 0 0 / 70%));
    --atcb-shadow-modal-date-btn: rgba(0 0 0 / 40%) 1px 3px 15px -4px,
      rgba(0 0 0 / 20%) 1px 1px 8px -4px;
    --atcb-shadow-modal-date-btn-hover: rgba(0 0 0 / 40%) 4px 6px 18px -1px,
      rgba(0 0 0 / 35%) 4px 5px 25px -2px;
    --atcb-shadow-modal-button: rgba(0 0 0 / 10%) 2px 3px 10px -3px,
      rgba(0 0 0 / 25%) 1px 1px 8px -4px;
    --atcb-shadow-modal-button-hover: rgba(0 0 0 / 35%) 3px 5px 15px -2px,
      rgba(0 0 0 / 20%) 2px 4px 25px -6px;
    --atcb-checkmark-background: radial-gradient(
      circle,
      #fff 0,
      rgba(255 255 255 / 80%) 40%,
      rgba(255 255 255 / 0%) 70%
    );
    --bg-cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23777' width='16' height='16' viewBox='0 0 122.878 122.88'%3E%3Cpath d='M1.426 8.313a4.87 4.87 0 0 1 0-6.886 4.87 4.87 0 0 1 6.886 0l53.127 53.127 53.127-53.127a4.87 4.87 0 0 1 6.887 0 4.87 4.87 0 0 1 0 6.886L68.324 61.439l53.128 53.128a4.87 4.87 0 0 1-6.887 6.886L61.438 68.326 8.312 121.453a4.87 4.87 0 0 1-6.886 0 4.87 4.87 0 0 1 0-6.886l53.127-53.128L1.426 8.313h0z'/%3E%3C/svg%3E")
        16 16,
      crosshair;
    --icon-ms365-color: #ea3e23;
    --icon-yahoo-color: #5f01d1;
    --icon-filter: none;
  }
  #atcb-bgoverlay.atcb-dark,
  .atcb-button-wrapper.atcb-dark,
  .atcb-list.atcb-dark,
  .atcb-modal-box.atcb-dark,
  body.atcb-dark #atcb-bgoverlay.atcb-bodyScheme,
  body.atcb-dark .atcb-button-wrapper.atcb-bodyScheme,
  body.atcb-dark .atcb-list.atcb-bodyScheme,
  body.atcb-dark .atcb-modal-box.atcb-bodyScheme {
    --atcb-background: #2e2e2e;
    --atcb-background-hover: #373737;
    --atcb-border: #4d4d4d;
    --atcb-text: #dedede;
    --atcb-text-2: #f1f1f1;
    --atcb-close-background: #282828;
    --atcb-overlay-background: rgba(20 20 20 / 60%);
    --atcb-modal-background: #242424;
    --atcb-modal-buttons-bar: #38383a;
    --atcb-modal-btn-background: #181819;
    --atcb-modal-btn-sec-background: #2e2d30;
    --atcb-modal-btn-background-hover: #434246;
    --atcb-modal-btn-text: #dbdbdb;
    --atcb-modal-btn-text-hover: #fff;
    --atcb-modal-btn-sec-text: #b8b8b8;
    --atcb-modal-date-btn-text: #ebebf0;
    --atcb-modal-date-btn-text-2: #b5b5bd;
    --atcb-modal-date-btn-cal-text: #101010;
    --atcb-modal-date-btn-cal-text-2: #3e3e3f;
    --atcb-modal-date-btn-cal-background: #c7c7cd;
    --atcb-modal-date-btn-background: #363636;
    --atcb-modal-date-btn-background-hover: #474747;
    --atcb-shadow-button: rgba(255 255 255 / 5%) -12px -5px 20px -8px,
      rgba(255 255 255 / 6%) -7px -5px 15px -3px,
      rgba(0 0 0 / 50%) 2px 5px 18px -1px, rgba(0 0 0 / 40%) 3px 3px 20px -3px;
    --atcb-shadow-button-hover: rgba(255 255 255 / 6%) -12px -5px 23px -8px,
      rgba(255 255 255 / 7%) -7px -5px 18px -3px,
      rgba(0 0 0 / 60%) 2px 5px 19px -1px, rgba(0 0 0 / 50%) 3px 3px 22px -3px;
    --atcb-shadow-button-active: rgba(255 255 255 / 7%) -12px -5px 23px -8px,
      rgba(255 255 255 / 8%) -7px -5px 18px -3px,
      rgba(0 0 0 / 70%) 2px 5px 19px -1px, rgba(0 0 0 / 60%) 3px 3px 22px -3px;
    --atcb-shadow-list: rgba(255 255 255 / 5%) -12px -5px 20px -8px,
      rgba(255 255 255 / 6%) -7px -5px 15px -3px,
      rgba(0 0 0 / 50%) 2px 5px 18px -1px, rgba(0 0 0 / 40%) 3px 3px 20px -3px;
    --atcb-shadow-list-modal: rgba(255 255 255 / 8%) -12px -5px 30px -8px,
      rgba(255 255 255 / 8%) -7px -5px 15px -3px,
      rgba(0 0 0 / 60%) 4px 6px 50px -4px, rgba(0 0 0 / 90%) 8px 12px 40px -2px;
    --atcb-shadow-modal: drop-shadow(5px 8px 30px rgba(0 0 0 / 90%));
    --atcb-shadow-modal-date-btn: rgba(255 255 255 / 10%) -8px -6px 20px,
      rgba(0 0 0 / 50%) 1px 3px 25px -8px, rgba(0 0 0 / 50%) 1px 1px 10px -3px;
    --atcb-shadow-modal-button: rgba(255 255 255 / 5%) -2px -2px 10px,
      rgba(0 0 0 / 30%) 1px 2px 8px -1px;
    --atcb-checkmark-background: radial-gradient(
      circle,
      rgba(0 0 0 / 50%) 0,
      rgba(0 0 0 / 30%) 40%,
      rgba(0 0 0 / 0%) 70%
    );
    --icon-ms365-color: #ea3e23;
    --icon-yahoo-color: #bebebe;
    --icon-filter: grayscale(0.2);
  }
  .atcb-button-wrapper,
  .atcb-list,
  .atcb-modal-box {
    font-size: var(--base-font-size-l);
  }
  @media (max-width: 991px) {
    .atcb-button-wrapper,
    .atcb-list,
    .atcb-modal-box {
      font-size: var(--base-font-size-m);
    }
  }
  @media (max-width: 575px) {
    .atcb-button-wrapper,
    .atcb-list,
    .atcb-modal-box {
      font-size: var(--base-font-size-s);
    }
  }
  .atcb-button-wrapper {
    display: inline-block;
    padding: 5px;
    position: relative;
  }
  .atcb-button {
    align-items: center;
    background-color: var(--atcb-background);
    border: 1px solid var(--atcb-border);
    border-radius: 6px;
    box-shadow: var(--atcb-shadow-button);
    color: var(--atcb-text);
    cursor: pointer;
    display: flex;
    font-family: var(--font);
    font-size: 1em;
    font-weight: 600;
    justify-content: center;
    line-height: 1.5em;
    margin: 0.13em;
    max-width: 350px;
    min-width: 160px;
    padding: 0.65em 1em;
    position: relative;
    text-align: center;
    touch-action: manipulation;
    user-select: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
    width: auto;
    z-index: 1;
  }
  .atcb-button.atcb-no-text {
    min-width: 0;
  }
  .atcb-rtl .atcb-button {
    direction: rtl;
    text-align: right;
  }
  .atcb-button:focus,
  .atcb-button:hover {
    background-color: var(--atcb-background-hover);
    box-shadow: var(--atcb-shadow-button-hover);
  }
  .atcb-button:focus-visible {
    outline: 2px solid var(--atcb-keyboard-focus);
  }
  .atcb-button.atcb-active:not(.atcb-modal-style, .atcb-dropoverlay),
  .atcb-button.atcb-single:focus,
  .atcb-button.atcb-single:hover {
    background-color: var(--atcb-background-hover);
    box-shadow: var(--atcb-shadow-button-active);
    margin: 0;
    padding: 0.78em 1.13em;
    z-index: 15000000;
  }
  .atcb-button.atcb-active.atcb-dropoverlay {
    z-index: 14000090;
  }
  .atcb-icon {
    height: 1em;
    margin-bottom: 0.3em;
    margin-right: 0.8em;
    flex-grow: 0;
    flex-shrink: 0;
  }
  .atcb-rtl .atcb-icon {
    margin-right: 0;
    margin-left: 0.8em;
  }
  .atcb-no-text .atcb-icon {
    margin-right: 0;
    margin-left: 0;
  }
  .atcb-icon svg {
    height: 100%;
    fill: currentcolor;
    width: auto;
  }
  .atcb-text {
    overflow-wrap: anywhere;
  }
  .atcb-dropdown-anchor {
    bottom: 4px;
    height: 1px;
    width: 100%;
    opacity: 0;
    position: absolute;
  }
  .atcb-list-wrapper {
    box-sizing: border-box;
    padding: 0 4px;
    position: absolute;
    z-index: 14000090;
  }
  .atcb-list-wrapper.atcb-dropoverlay {
    z-index: 15000000;
  }
  .atcb-list {
    border-radius: 0 0 6px 6px;
    box-sizing: border-box;
    box-shadow: var(--atcb-shadow-list);
    color: var(--atcb-text);
    display: block;
    font-family: var(--font);
    max-width: 100%;
    position: relative;
    user-select: none;
    -webkit-user-select: none;
    width: 100%;
  }
  .atcb-list-item {
    align-items: center;
    background-color: var(--atcb-background);
    border: 1px solid var(--atcb-border);
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    font-size: 1em;
    line-height: 1.75em;
    padding: 0.8em;
    text-align: left;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
  }
  .atcb-rtl .atcb-list-item {
    direction: rtl;
    text-align: right;
  }
  .atcb-list-item:hover {
    background-color: var(--atcb-background-hover);
    color: var(--atcb-text-2);
  }
  .atcb-list-item:focus-visible {
    background-color: var(--atcb-background-hover);
    color: var(--atcb-keyboard-focus);
    font-size: 0.95em;
    font-weight: 600;
    outline: 0;
  }
  .atcb-list-item:last-child {
    border-radius: 0 0 6px 6px;
  }
  .atcb-list .atcb-list-item:not(:first-child) {
    border-top-style: none;
  }
  .atcb-dropup .atcb-list-item:last-child {
    border-radius: 0;
    padding-bottom: 1.25em;
  }
  .atcb-dropoverlay .atcb-list .atcb-list-item:first-child,
  .atcb-dropup .atcb-list-item:first-child,
  .atcb-list.atcb-modal .atcb-list-item:first-child {
    border-radius: 6px 6px 0 0;
  }
  .atcb-dropoverlay .atcb-list .atcb-list-item:only-child,
  .atcb-list.atcb-modal .atcb-list-item:only-child {
    border-radius: 6px;
  }
  .atcb-list.atcb-generated-button:not(.atcb-modal)
    .atcb-list-item:first-child {
    padding-top: 1.25em;
  }
  .atcb-dropoverlay
    .atcb-list.atcb-generated-button:not(.atcb-modal)
    .atcb-list-item:first-child,
  .atcb-dropup
    .atcb-list.atcb-generated-button:not(.atcb-modal)
    .atcb-list-item:first-child {
    padding-top: 0.8em;
  }
  .atcb-dropoverlay .atcb-list,
  .atcb-list.atcb-modal {
    border-radius: 6px;
  }
  .atcb-list.atcb-modal {
    box-shadow: var(--atcb-shadow-list-modal);
  }
  .atcb-list-item .atcb-icon {
    margin-bottom: 0.5em;
    margin-right: 0.6em;
    width: 1.125em;
  }
  .atcb-rtl .atcb-list-item .atcb-icon {
    margin-right: 0;
    margin-left: 0.6em;
  }
  .atcb-no-text .atcb-list-item .atcb-icon {
    margin: 0 auto;
  }
  .atcb-list-item-close {
    background-color: var(--atcb-close-background);
  }
  .atcb-list-item.atcb-list-item-close {
    color: var(--atcb-close-text);
  }
  .atcb-list-item-close svg {
    fill: currentcolor;
  }
  .atcb-modal-no-scroll {
    overflow-y: hidden;
  }
  .atcb-modal {
    display: block;
    margin: auto;
    min-width: 250px;
    width: auto;
    position: relative;
    z-index: 14000090;
  }
  .atcb-modal-box {
    filter: var(--atcb-shadow-modal);
    color: var(--atcb-text-2);
    cursor: default;
    box-sizing: border-box;
    font-family: var(--font);
    line-height: 1.5em;
    text-align: left;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: 100%;
    margin-bottom: 20px;
    max-width: 32em;
    -webkit-tap-highlight-color: transparent;
  }
  .atcb-modal-box.atcb-rtl {
    text-align: right;
    direction: rtl;
    padding: 1.25em 1em 1.25em 2em;
  }
  .atcb-modal-icon {
    height: 2.5em;
    width: 2.5em;
    border-radius: 100%;
    background-color: var(--atcb-modal-background);
    padding: 1.75em;
    margin: auto;
  }
  .atcb-modal-icon svg {
    height: auto;
    fill: currentcolor;
    width: 100%;
  }
  .atcb-modal-headline {
    background-color: var(--atcb-modal-background);
    border-radius: 6px 6px 0 0;
    font-size: 1.3em;
    font-weight: 600;
    line-height: 1.5em;
    padding: 1.8em 2em 1.3em;
    text-transform: uppercase;
    text-align: center;
  }
  .atcb-modal-icon + .atcb-modal-headline {
    margin-top: -2.6em;
    padding-top: 2.6em;
  }
  .atcb-modal-content {
    background-color: var(--atcb-modal-background);
    font-size: 1em;
    padding: 0.3em 2.5em 2.25em;
  }
  @media (max-width: 575px) {
    .atcb-modal-headline {
      padding: 1.8em 1em 1em;
    }
    .atcb-modal-content {
      padding: 0.3em 1em 2em;
    }
  }
  .atcb-modal-buttons {
    background-color: var(--atcb-modal-buttons-bar);
    border-radius: 0 0 6px 6px;
    box-sizing: border-box;
    padding: 0.8em 1em;
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-flow: row-reverse wrap;
    align-items: center;
  }
  a.atcb-modal-btn,
  button.atcb-modal-btn {
    background-color: var(--atcb-modal-btn-sec-background);
    border: 0;
    border-radius: 6px;
    box-shadow: var(--atcb-shadow-modal-button);
    color: var(--atcb-modal-btn-sec-text);
    cursor: pointer;
    display: inline-block;
    font-family: var(--font);
    font-size: 0.9em;
    font-weight: 600;
    line-height: 1.5em;
    margin: 0.625em;
    padding: 0.625em 1.25em;
    position: relative;
    text-align: center;
    text-decoration: none;
    touch-action: manipulation;
    user-select: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
    text-transform: uppercase;
  }
  a.atcb-modal-btn.atcb-modal-btn-primary,
  button.atcb-modal-btn.atcb-modal-btn-primary {
    background-color: var(--atcb-modal-btn-background);
    color: var(--atcb-modal-btn-text);
  }
  a.atcb-modal-btn:hover,
  button.atcb-modal-btn:hover {
    background-color: var(--atcb-modal-btn-background-hover);
    box-shadow: var(--atcb-shadow-modal-button-hover);
    color: var(--atcb-modal-btn-text-hover);
    text-decoration: none;
  }
  a.atcb-modal-btn:focus-visible,
  button.atcb-modal-btn:focus-visible {
    background-color: var(--atcb-modal-btn-background-hover);
    outline: 2px solid var(--atcb-keyboard-focus);
  }
  body.atcb-dark a.atcb-modal-btn {
    color: var(--atcb-modal-btn-sec-text);
  }
  body.atcb-dark a.atcb-modal-btn:focus-visible {
    background-color: var(--atcb-modal-btn-background-hover);
    outline: 2px solid var(--atcb-keyboard-focus);
  }
  body.atcb-dark a.atcb-modal-btn.atcb-modal-btn-primary {
    color: var(--atcb-modal-btn-text);
  }
  body.atcb-dark a.atcb-modal-btn:active,
  body.atcb-dark a.atcb-modal-btn:hover {
    color: var(--atcb-modal-btn-text-hover);
  }
  .atcb-subevent-btn {
    display: flex;
    align-items: flex-start;
    cursor: pointer;
    font-family: var(--font);
    font-size: 1em;
    box-shadow: var(--atcb-shadow-modal-date-btn);
    background-color: var(--atcb-modal-date-btn-background);
    border: 0;
    border-radius: 6px;
    padding: 0;
    margin: 0;
    touch-action: manipulation;
    position: relative;
    user-select: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
  .atcb-subevent-btn:hover {
    align-items: center;
  }
  .atcb-subevent-btn:focus,
  .atcb-subevent-btn:hover {
    background-color: var(--atcb-modal-date-btn-background-hover);
    box-shadow: var(--atcb-shadow-modal-date-btn-hover);
  }
  .atcb-subevent-btn:focus-visible {
    outline: 2px solid var(--atcb-keyboard-focus);
  }
  .atcb-subevent-btn + .atcb-subevent-btn {
    margin-top: 30px;
  }
  .atcb-date-btn-left {
    border-radius: 4px 0 0 4px;
    align-self: stretch;
    background-color: var(--atcb-modal-date-btn-cal-background);
    color: var(--atcb-modal-date-btn-background-hover);
    padding: 15px;
    width: 2.7em;
    text-align: center;
  }
  .atcb-rtl .atcb-date-btn-left {
    border-radius: 0 4px 4px 0;
  }
  .atcb-subevent-btn:hover .atcb-date-btn-left {
    opacity: 0.8;
  }
  .atcb-date-btn-day {
    color: var(--atcb-modal-date-btn-cal-text);
    font-weight: 300;
    font-size: 2em;
  }
  .atcb-date-btn-month {
    color: var(--atcb-modal-date-btn-cal-text-2);
    font-weight: 600;
    font-size: 1em;
  }
  .atcb-date-btn-right {
    position: relative;
    color: var(--atcb-modal-date-btn-text);
  }
  .atcb-date-btn-details {
    opacity: 1;
    padding: 0.8em;
    text-align: left;
  }
  .atcb-rtl .atcb-date-btn-details {
    text-align: right;
  }
  .atcb-date-btn-hover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 1em;
  }
  .atcb-subevent-btn:hover .atcb-date-btn-details {
    opacity: 0;
  }
  .atcb-subevent-btn:hover .atcb-date-btn-hover {
    opacity: 1;
  }
  .atcb-date-btn-headline {
    font-weight: 600;
    font-size: 0.9em;
    margin-bottom: 0.5em;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .atcb-date-btn-content {
    font-size: 0.8em;
    color: var(--atcb-modal-date-btn-text-2);
  }
  .atcb-date-btn-content-location {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: break-all;
  }
  .atcb-date-btn-content-icon {
    display: inline-block;
    height: 0.8em;
    width: 1.3em;
    flex: 0 0 1.3em;
  }
  .atcb-rtl .atcb-date-btn-content-icon {
    margin-right: 0;
    margin-left: 0.5em;
  }
  .atcb-date-btn-content-icon svg {
    height: 100%;
    fill: currentcolor;
    width: auto;
  }
  .atcb-date-btn-content + .atcb-date-btn-content {
    margin-top: 0.3em;
  }
  .atcb-date-btn-content-recurr-icon {
    padding-left: 0.3em;
  }
  .atcb-checkmark {
    display: none;
  }
  .atcb-saved .atcb-checkmark {
    box-sizing: content-box;
    color: var(--atcb-text);
    display: block;
    position: absolute;
    top: -1.2em;
    right: -0.3em;
    padding: 0.5em;
    background: var(--atcb-checkmark-background);
    border-radius: 100%;
    height: 2em;
  }
  .atcb-button.atcb-active:not(.atcb-modal-style, .atcb-dropoverlay)
    .atcb-checkmark,
  .atcb-button.atcb-single:focus .atcb-checkmark,
  .atcb-button.atcb-single:hover .atcb-checkmark {
    top: -1.07em;
    right: -0.17em;
  }
  .atcb-checkmark svg {
    height: 100%;
    fill: currentcolor;
    width: auto;
  }
  #atcb-bgoverlay {
    animation: atcb-bgoverlay-animate 0.1s ease 0s 1 normal forwards;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    background-color: var(--atcb-overlay-background);
    box-sizing: border-box;
    display: flex;
    height: calc(100vh + 100px);
    left: 0;
    right: 0;
    top: 0;
    min-height: 100%;
    min-width: 100%;
    opacity: 0;
    overflow-y: auto;
    padding: 20px 20px 130px;
    position: fixed;
    width: 100vw;
    z-index: 14000000;
  }
  #atcb-bgoverlay.atcb-animate-bg {
    animation: atcb-bgoverlay-animate 0.3s ease 0s 1 normal forwards;
  }
  #atcb-bgoverlay.atcb-no-animation {
    animation: none;
    opacity: 1;
  }
  #atcb-bgoverlay.atcb-no-bg {
    animation: none;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    opacity: 0;
  }
  @keyframes atcb-bgoverlay-animate {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  #atcb-bgoverlay.atcb-click:hover {
    cursor: var(--bg-cursor);
  }
  .atcb-icon .atcb-icon-apple svg {
    fill: currentcolor;
  }
  .atcb-icon .atcb-icon-atcbCSSatcb svg {
    fill: currentcolor;
  }
  .atcb-icon .atcb-icon-ms365 svg {
    fill: var(--icon-ms365-color);
  }
  .atcb-icon .atcb-icon-yahoo svg {
    fill: var(--icon-yahoo-color);
  }
  .atcb-icon .atcb-icon-google svg,
  .atcb-icon .atcb-icon-msteams svg,
  .atcb-icon .atcb-icon-outlookcom svg {
    filter: var(--icon-filter);
  }
`;

const atcbExtraCSS = css`
  .atcb-list-item,
  .atcb-list-item.atcb-list-item-close {
    background-color: #333;
    color: white;
  }
  .atcb-list-item:hover {
    background-color: #222;
    color: white;
  }
  .atcb-list-item:focus-visible {
    background-color: #222;
    color: white;
  }
  .atcb-list,
  .atcb-list.atcb-modal .atcb-list-item:first-child,
  .atcb-list-item:last-child {
    border-radius: 0;
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
        atcbCSS,
        atcbExtraCSS,
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
