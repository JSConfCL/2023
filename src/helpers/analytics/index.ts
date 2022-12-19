import { useQuery } from "@tanstack/react-query";
import { useFlagsmith } from "flagsmith/react";
import { useAtomValue } from "jotai";
import { useEffect } from "react";

import { me } from "../API";
import { isAuthenticatedAtom } from "../auth";

export const useIdentify = () => {
  const { identify, initialised, setTraits } = useFlagsmith();
  const isAutenticated = useAtomValue(isAuthenticatedAtom);
  const { refetch } = useQuery(["identifyMe"], me, {
    enabled: false,
  });
  useEffect(() => {
    const run = async () => {
      const { data } = await refetch();
      if (data) {
        const { id, ...userTraits } = data;
        await identify(id, userTraits);
      }
    };
    if (isAutenticated && initialised) {
      run().catch((e) => {
        // console.error(e);
      });
    }
  }, [identify, initialised, isAutenticated, refetch, setTraits]);
};
