import { useContext } from "react";

/* eslint-disable */

export default function factoryUseContext(contextName, context) {
  const ctx = useContext(context);

  if (ctx === undefined) {
    throw Error(
      `use${contextName}Context must be used within a ${contextName}ContextProvider`
    );
  }
  return ctx;
}
/* eslint-enable */
