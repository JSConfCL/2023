import { useAtomValue } from "jotai";

import { isAuthenticatedAtom } from "../helpers/auth";

import { PrimaryStyledLink } from "./Links";

const GetAccount = () => {
  const isLoggedIn = useAtomValue(isAuthenticatedAtom);

  if (isLoggedIn) {
    return <></>;
  }

  return (
    <PrimaryStyledLink href="/tickets">Registarme en JSConf</PrimaryStyledLink>
  );
};
export default GetAccount;
