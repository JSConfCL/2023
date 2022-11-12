import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Picture = styled(motion.picture)`
  object-fit: cover;
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
  > img {
  }
`;

const Img = styled(motion.img)``;

const Image = (props: {
  className?: string;
  mobile: string;
  desktop?: string;
  style?: any;
  alt: string;
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
        media="(max-width: 768px)"
        srcSet={`${props.mobile}?fm=jpeg${params}`}
      />
      {props.desktop && (
        <>
          <source
            media="(min-width: 769px)"
            srcSet={`${props.desktop}?fm=webp${params}`}
          />
          <source
            media="(min-width: 769px)"
            srcSet={`${props.desktop}?fm=jpeg${params}`}
          />
        </>
      )}
      <Img
        loading={loading}
        src={`${props.desktop ?? props.mobile}?fm=webp${params}`}
        style={props.style}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        alt={props.alt}
      />
    </Picture>
  );
};

export default Image;
