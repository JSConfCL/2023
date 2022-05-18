"use strict";
var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function (cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
exports.__esModule = true;
var react_1 = require("react");
var styled_1 = require("@emotion/styled");
var Typography_1 = require("../core/Typography");
var Container = styled_1["default"].section(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        "\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 1440px;\n  gap: 0px 32px;\n  padding: 48px;\n  justify-content: space-between;\n\n  > h2 {\n    padding: 48px 0px;\n  }\n\n  @media (min-width: 1024px) {\n    flex-direction: column;\n  }\n",
      ],
      [
        "\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 1440px;\n  gap: 0px 32px;\n  padding: 48px;\n  justify-content: space-between;\n\n  > h2 {\n    padding: 48px 0px;\n  }\n\n  @media (min-width: 1024px) {\n    flex-direction: column;\n  }\n",
      ]
    ))
);
var Form = styled_1["default"].form(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        "\n  width: 300px;\n  height: 50px;\n  background: white;\n  border-radius: 10px;\n  top: 50%;\n  position: relative;\n  z-index: 1;\n  overflow: hidden;\n",
      ],
      [
        "\n  width: 300px;\n  height: 50px;\n  background: white;\n  border-radius: 10px;\n  top: 50%;\n  position: relative;\n  z-index: 1;\n  overflow: hidden;\n",
      ]
    ))
);
var EmailInput = styled_1["default"].input(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      [
        "\n  background: transparent;\n  position: absolute;\n  height: 100%;\n  width: 190px;\n  padding-left: 10px;\n  text-align: left;\n  line-height: 50px;\n  vertical-align: middle;\n  z-index: 10;\n  color: black;\n  -webkit-transition: transform 0.2s ease-in-out 0s;\n",
      ],
      [
        "\n  background: transparent;\n  position: absolute;\n  height: 100%;\n  width: 190px;\n  padding-left: 10px;\n  text-align: left;\n  line-height: 50px;\n  vertical-align: middle;\n  z-index: 10;\n  color: black;\n  -webkit-transition: transform 0.2s ease-in-out 0s;\n",
      ]
    ))
);
var SubmitButton = styled_1["default"].input(function (_a) {
  var theme = _a.theme;
  return (
    "\n  background: " +
    theme.colors.jsconfYellow +
    ";\n  color: " +
    theme.colors.jsconfBlack +
    ";\n  position: absolute;\n  top: -50px;\n  left: 200px;\n  height: 150px;\n  width: 100px;\n  text-align: center;\n  vertical-align: middle;\t\n  -webkit-transition: transform 0.5s ease 0s;\n"
  );
});
var titleAnimation = {
  scale: 1.01,
  transition: {
    duration: 0.1,
    type: "tween",
  },
};
var SubscribeSection = function (props) {
  return react_1["default"].createElement(
    Container,
    null,
    react_1["default"].createElement(
      react_1.Suspense,
      {
        fallback: react_1["default"].createElement(
          "h2",
          null,
          "Loading Follow Us..."
        ),
      },
      react_1["default"].createElement(
        Typography_1.H2,
        { whileHover: titleAnimation },
        props.page.title
      ),
      react_1["default"].createElement(
        Form,
        null,
        react_1["default"].createElement(EmailInput, {
          value: "super-email@gmail.com",
        }),
        react_1["default"].createElement(SubmitButton, {
          type: "submit",
          value: "subscribe",
        }),
        react_1["default"].createElement("span", { className: "subscribing" }),
        react_1["default"].createElement(
          "span",
          { className: "thanks" },
          " Thank you. You have been subscribed"
        )
      )
    )
  );
};
exports["default"] = SubscribeSection;
var templateObject_1, templateObject_2, templateObject_3;
