import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Picture = styled(motion.picture)`
  width: fit-content;
  overflow: hidden;
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
  className?: string;
  params?: string;
  loading?: "lazy" | "eager";
}) => {
  const { params = "", loading = "lazy" } = props;
  return (
    <Picture className={props.className}>
      <source
        media="(max-width: 768px)"
        srcSet={`${props.mobile}?fm=webp${params}`}
      />
      <source
        media="(min-width: 769px)"
        srcSet={`${props.desktop || props.mobile}?fm=webp${params}`}
      />
      <Img
        loading={loading}
        src={`${props.desktop || props.mobile}?fm=webp${params}`}
        style={props.style}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        alt={props.alt}
      />
    </Picture>
  );
};

export default Image;
