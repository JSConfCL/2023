import { useQuery } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { useEffect } from "react";

import { me } from "../API";
import { isAuthenticatedAtom } from "../auth";

export const useIdentify = () => {
  const isAutenticated = useAtomValue(isAuthenticatedAtom);
  const { refetch } = useQuery(["identifyMe"], me, {
    enabled: false,
  });
  useEffect(() => {
    const run = async () => {
      const { data } = await refetch();
      if (data) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { id, ...userTraits } = data;
      }
    };
    if (isAutenticated) {
      run().catch((e) => {
        // console.error(e);
      });
    }
  }, [isAutenticated, refetch]);
};
