import React from "react";
import { PrimaryButton, SecondaryButton } from "../../Components/Button";

type Props = {};

export const Hero = (props: Props) => (
  <div>
    <PrimaryButton type="button"> Button</PrimaryButton>
    <SecondaryButton type="button"> Button2</SecondaryButton>
  </div>
);
