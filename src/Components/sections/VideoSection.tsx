import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MessageCircle,
  Copy,
} from "react-feather";
import toast, { Toaster } from "react-hot-toast";

import { ViewportSizes } from "../../../styles/theme";
import { H2 } from "../core/Typography";

const GetAccount = dynamic(async () => await import("../GetAccount"), {
  ssr: false,
});

const Container = styled.section`
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  gap: 0px 32px;
  padding: 16px;
  justify-content: space-between;
  margin: 0 auto;

  > h2 {
    padding: 48px 0px;
  }

  @media (min-width: ${ViewportSizes.Phone}px) {
    padding: 48px;
  }

  @media (min-width: ${ViewportSizes.TabletLandscape}) {
    flex-direction: column;
  }
`;

const PlayerContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const IframeContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  margin: 1rem 0;

  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border: 0;
  }
`;

const VideoContainer = styled(IframeContainer)`
  flex: 1 1 100%;
`;

const ChatContainer = styled(IframeContainer)`
  flex: 1 1 100%;
`;

const HR = styled.hr`
  border-width: 1px;
  border-color: #f45b69;
  border-style: solid;
  width: 50%;
  background-color: #f45b69;
  margin-bottom: 16px;
`;

const Button = styled.button`
  cursor: pointer;
  border-radius: 50%;
  background: #f45b69;
  text-align: center;
  width: 32px;
  height: 32px;
  line-height: 32px;
  margin: 0 8px;
  color: white;

  &[disabled] {
    background: #ddd;
    cursor: not-allowed;
  }
`;

const VideoSection = ({
  videoId,
  includesChat = true,
}: {
  videoId: string;
  includesChat?: boolean;
}) => {
  const chatConfigurations = ["0 0 50%", "0 0 33%", "0 0 25%", "0 0 0%"];
  const [chatSize, setChatSize] = useState(3);
  const [origin, setOrigin] = useState("");
  const [port, setPort] = useState("");

  useEffect(() => {
    if (window !== undefined) {
      setOrigin(window.location.origin);
      setPort(window.location.port);
    }
  }, [setOrigin]);

  const chatConfiguration = chatConfigurations[chatSize];

  if (!videoId) {
    return <></>;
  }

  const httpScheme = origin.startsWith("https") ? "https" : "http";
  const embedDomain = origin.includes("localhost")
    ? origin.replace("http://", "").replace(`:${port}`, "")
    : origin.replace("https://", "");

  return (
    <Container>
      <H2 whileHover={{ scale: 1.01 }}>Ver la Previa</H2>
      <HR />
      <PlayerContainer>
        <VideoContainer>
          <iframe
            src={`${httpScheme}://www.youtube-nocookie.com/embed/${videoId}?theme=dark&autoplay=1&keyboard=1&autohide=2&cc_load_policy=1&modestbranding=1&fs=1&rel=0&iv_load_policy=3&mute=0&loop=0&share=0`}
            allowFullScreen
          />
        </VideoContainer>
        {includesChat ? (
          <ChatContainer style={{ flex: chatConfiguration }}>
            <iframe
              src={`${httpScheme}://www.youtube.com/live_chat?v=${videoId}&embed_domain=${embedDomain}`}
              allowFullScreen
            />
          </ChatContainer>
        ) : null}
      </PlayerContainer>

      <div style={{ textAlign: "right", paddingRight: "24px" }}>
        {includesChat ? (
          <>
            <Button
              disabled={chatSize === 0}
              onClick={() => {
                setChatSize(0);
              }}
            >
              <ChevronsLeft
                size={24}
                style={{ position: "relative", top: "4px" }}
              />
            </Button>
            <Button
              disabled={chatSize === 0}
              onClick={() => {
                setChatSize((tmpChatSize) => Math.max(0, tmpChatSize - 1));
              }}
            >
              <ChevronLeft
                size={24}
                style={{ position: "relative", top: "4px" }}
              />
            </Button>
            <MessageCircle
              size={32}
              style={{ position: "relative", top: "8px" }}
            />
            <Button
              disabled={chatSize >= chatConfigurations.length - 1}
              onClick={() => {
                setChatSize((tmpChatSize) =>
                  Math.min(chatConfigurations.length - 1, tmpChatSize + 1)
                );
              }}
            >
              <ChevronRight
                size={24}
                style={{ position: "relative", top: "4px" }}
              />
            </Button>
            <Button
              disabled={chatSize === chatConfigurations.length - 1}
              onClick={() => {
                setChatSize(chatConfigurations.length - 1);
              }}
            >
              <ChevronsRight
                size={24}
                style={{ position: "relative", top: "4px" }}
              />
            </Button>
          </>
        ) : null}
        <Button>
          <Copy
            onClick={() => {
              navigator.clipboard
                .writeText(`${origin}/laprevia#player`)
                .then(() => {
                  toast.success("Enlace copiado con éxito!");
                })
                .catch(() => {
                  toast.error("Hubo un error, intentalo nuevamente!");
                });
            }}
            size={24}
            style={{ position: "relative", top: "4px" }}
          />
        </Button>
      </div>
      <div style={{ textAlign: "center", marginTop: "16px " }}>
        <GetAccount />
      </div>
      <Toaster />
    </Container>
  );
};

export default VideoSection;
