import styled from "@emotion/styled";
import { useAtomValue } from "jotai";
import dynamic from "next/dynamic";
import { transparentize } from "polished";
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
import { isAuthenticatedAtom } from "../../helpers/auth";
import useMediaQuery from "../../helpers/useMediaQuery";

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
  position: relative;
  z-index: 20;

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
  padding-bottom: 100%;
  margin: 1rem 0;

  @media (min-width: ${ViewportSizes.TabletLandscape}) {
    padding-bottom: 56.25%;
  }

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

const FakeVideo = styled.div`
  width: 100%;
  padding-bottom: 56.25%;
  background: #666;
  position: relative;
`;

const FakeVideoInfo = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  position: absolute;
  font-size: 1.5rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 16px;
  color: white;

  @media (min-width: ${ViewportSizes.Phone}px) {
    font-size: 2rem;
  }

  @media (min-width: ${ViewportSizes.Desktop}px) {
    font-size: 2.5rem;
  }
`;

const HR = styled.hr`
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.altColor};
  border-style: solid;
  width: 50%;
  background-color: ${({ theme }) => theme.colors.altColor};
  margin-bottom: 16px;
`;

const Button = styled.button`
  cursor: pointer;
  border-radius: 50%;
  background: ${({ theme }) =>
    theme.elements.buttons.variants.primary.backgroundColor};
  text-align: center;
  width: 32px;
  height: 32px;
  line-height: 32px;
  margin: 0 8px;
  color: ${({ theme }) => theme.elements.buttons.variants.primary.textColor};

  &[disabled] {
    background: ${({ theme }) =>
      transparentize(
        0.5,
        theme.elements.buttons.variants.primary.backgroundColor
      )};
    color: ${({ theme }) =>
      transparentize(0.5, theme.elements.buttons.variants.primary.textColor)};
    cursor: not-allowed;
  }
`;

const desktopChatConfigurations = ["0 0 50%", "0 0 33%", "0 0 25%", "0 0 0%"];
const mobileChatConfigurations = ["0 0 100%", "0 0 0%"];

const VideoSection = ({
  videoId,
  includesChat = true,
}: {
  videoId: string;
  includesChat?: boolean;
}) => {
  const isMobile = useMediaQuery(`(max-width: ${ViewportSizes.Phone - 1}px)`);
  const chatConfigurations = isMobile
    ? mobileChatConfigurations
    : desktopChatConfigurations;
  const [chatSize, setChatSize] = useState(chatConfigurations.length - 1);
  const [origin, setOrigin] = useState("");
  const [port, setPort] = useState("");
  const isLoggedIn = useAtomValue(isAuthenticatedAtom);

  useEffect(() => {
    if (window !== undefined) {
      setOrigin(window.location.origin);
      setPort(window.location.port);
    }
  }, [setOrigin]);

  const flex =
    chatSize > chatConfigurations.length - 1
      ? chatConfigurations[chatConfigurations.length - 1]
      : chatConfigurations[chatSize];
  const paddingBottom = isMobile ? "100%" : "56.25%";
  const httpScheme = origin.startsWith("https") ? "https" : "http";
  const embedDomain = origin.includes("localhost")
    ? origin.replace("http://", "").replace(`:${port}`, "")
    : origin.replace("https://", "");

  if (!videoId) {
    return <></>;
  }

  if (!isLoggedIn) {
    return (
      <Container>
        <H2 whileHover={{ scale: 1.01 }}>Ver la Previa</H2>
        <HR />
        <FakeVideo>
          <FakeVideoInfo>
            Para poder ver la previa debes tener una cuenta de la JSConf 😥
          </FakeVideoInfo>
        </FakeVideo>
        <div style={{ textAlign: "center", marginTop: "16px " }}>
          <GetAccount />
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <H2 whileHover={{ scale: 1.01 }}>Ver la Previa</H2>
      <HR />
      <PlayerContainer>
        <VideoContainer style={{ paddingBottom }}>
          <iframe
            src={`${httpScheme}://www.youtube-nocookie.com/embed/${videoId}?theme=dark&autoplay=1&keyboard=1&autohide=2&cc_load_policy=1&modestbranding=1&fs=1&rel=0&iv_load_policy=3&mute=0&loop=0&share=0`}
            allowFullScreen
          />
        </VideoContainer>
        {includesChat ? (
          <ChatContainer style={{ paddingBottom, flex }}>
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
            {!isMobile ? (
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
            ) : null}
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
            {!isMobile ? (
              <Button
                disabled={chatSize >= chatConfigurations.length - 1}
                onClick={() => {
                  setChatSize(chatConfigurations.length - 1);
                }}
              >
                <ChevronsRight
                  size={24}
                  style={{ position: "relative", top: "4px" }}
                />
              </Button>
            ) : null}
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
      <Toaster />
    </Container>
  );
};

export default VideoSection;
