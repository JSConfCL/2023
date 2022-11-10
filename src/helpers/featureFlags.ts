import posthog from "posthog-js";
import { atom, useSetAtom } from "jotai";

type FlagsType = Record<"ticket-page-enabled", boolean | null>;
export const flagsAtom = atom<FlagsType>({
  "ticket-page-enabled": null,
});

export const useInitFeatureFlag = () => {
  const setFlagsAtom = useSetAtom(flagsAtom);
  if (typeof window === "undefined") {
    return;
  }
  posthog.init("phc_L2ELKHRyIWk4Ql8tQ01dude2RalWeJF1lgBF79SBqMY", {
    api_host: "https://app.posthog.com",
  });
  posthog.onFeatureFlags((flags, variants) => {
    setFlagsAtom(variants as FlagsType);
  });
};
