import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Picture = styled(motion.picture)`
  width: fit-content;

  > img {
    width: 100%;
  }
`;

const Img = styled(motion.img)``;

const Image = (props: {
  mobile: string;
  desktop?: string;
  style?: any;
  alt: string;
}) => {
  return (
    <Picture>
      <source media="(max-width: 768px)" srcSet={props.mobile} />
      <source
        media="(min-width: 769px)"
        srcSet={props.desktop || props.mobile}
      />
      <Img
        src={props.desktop || props.mobile}
        style={props.style}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2.5 } }}
        alt={props.alt}
      />
    </Picture>
  );
};

export default Image;
