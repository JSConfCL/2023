import { Global } from "@emotion/react";
import styled from "@emotion/styled";
import { atcb_action, atcb_init } from "add-to-calendar-button";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  Calendar,
  Copy,
  Edit,
  Facebook,
  Linkedin,
  Twitter,
} from "react-feather";
import toast, { Toaster } from "react-hot-toast";

import { ToolTip } from "../Tooltip";

import { atcbCSS, atcbExtraCSS } from "./addToCalendarStyles";

const SharingInfo = styled.div`
  text-align: center;
`;

const SocialButton = styled.button(({ theme }) => [
  {
    display: `inline-block`,
    position: "relative",
    fontWeight: "bold",
    margin: "0 16px",
    cursor: "pointer",
    "&:after": {
      content: `""`,
      position: "absolute",
      width: "100%",
      transform: "scaleX(0)",
      height: "4px",
      bottom: "-8px",
      left: 0,
      backgroundColor: theme.colors.white,
      transformOrigin: "bottom right",
      transition: "transform 0.25s ease-out",
    },
    "&:hover:after": {
      transform: "scaleX(1)",
      transformOrigin: "bottom left",
    },
  },
]);

const SocialAnchor = styled.a<{
  type: "twitter" | "facebook" | "linkedin" | "jsconf";
}>(({ theme, type }) => [
  {
    display: `inline-block`,
    position: "relative",
    fontWeight: "bold",
    cursor: "pointer",
    margin: "0 16px",
    "&:after": {
      content: `""`,
      position: "absolute",
      width: "100%",
      transform: "scaleX(0)",
      height: "4px",
      bottom: "-8px",
      left: 0,
      backgroundColor: theme.colors.social[type],
      transformOrigin: "bottom right",
      transition: "transform 0.25s ease-out",
    },
    "&:hover:after": {
      transform: "scaleX(1)",
      transformOrigin: "bottom left",
    },
  },
]);

const SocialLinks = ({
  userTicketId,
  showEdit,
}: {
  userTicketId: string;
  showEdit: boolean;
}) => {
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const publicUrl = `${
    process.env.NEXT_PUBLIC_SERVER_URL ?? "https://jsconf.cl"
  }/p/ticket/${userTicketId?.replace("user_ticket_", "") || ""}`;
  useEffect(() => {
    atcb_init();
  }, []);

  return (
    <SharingInfo>
      <Global styles={[atcbCSS, atcbExtraCSS]} />
      <SocialAnchor
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          `Lista mi entrada para la @JSConfCL 🎉. Obtén la tuya en ${publicUrl} . Nos vemos el 03 y 04 de Febrero!`
        )}`}
        target="_blank"
        rel="noreferrer"
        type="twitter"
      >
        <Twitter size={32} />
      </SocialAnchor>
      <SocialAnchor
        href={`http://www.facebook.com/sharer.php?u=${encodeURIComponent(
          publicUrl
        )}`}
        target="_blank"
        rel="noreferrer"
        type="facebook"
      >
        <Facebook size={32} />
      </SocialAnchor>
      <SocialAnchor
        href={`https://www.linkedin.com/sharing/share-offsite?url=${encodeURIComponent(
          publicUrl
        )}`}
        target="_blank"
        rel="noreferrer"
        type="linkedin"
      >
        <Linkedin size={32} />
      </SocialAnchor>
      <SocialButton
        onClick={() => {
          atcb_action({
            name: "JSConf Chile",
            startDate: "2023-02-03",
            endDate: "2023-02-04",
            startTime: "08:00",
            endTime: "19:00",
            description:
              "Acompáñanos, en la primera edición Chilena, de la más prestigiosa conferencia de JavaScript. 2 días de Charlistas internacionales, comunidad, aprendizaje y conexiones, este 03 y 04 de Febrero, 2023.",
            options: ["Google", "Apple", "Microsoft365", "Outlook.com"],
            timeZone: "America/Santiago",
          });
        }}
      >
        <Calendar size={32} />
      </SocialButton>
      <SocialButton
        onClick={() => {
          navigator.clipboard
            .writeText(publicUrl)
            .then(() => {
              toast.success("Enlace copiado con éxito!");
            })
            .catch(() => {
              toast.error("Hubo un error, intentalo nuevamente!");
            });
        }}
      >
        <Copy size={32} />
      </SocialButton>
      {showEdit ? (
        <ToolTip content={`Edita tu ticket`}>
          <Link href={`/mytickets/${userTicketId}`} legacyBehavior>
            <SocialAnchor ref={anchorRef} type="jsconf">
              <Edit size={32} />
            </SocialAnchor>
          </Link>
        </ToolTip>
      ) : null}
      <Toaster />
    </SharingInfo>
  );
};

export default SocialLinks;
