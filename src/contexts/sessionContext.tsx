import { createContext, useState, type PropsWithChildren, useCallback } from "react";

import type { ProposerNames, SessionContext as SessionContextType } from "@/types.d";
import { sessionInitialState } from "@/constants";

export const SessionContext = createContext<SessionContextType | null>(null);

export function SessionProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState(sessionInitialState);
  const { name, roomId } = session;

  const setName = (name: ProposerNames) => {
    setSession((session) => ({ ...session, name }));
  };

  const setRoomId = useCallback((roomId: string) => {
    setSession((session) => ({ ...session, roomId }));
  }, []);

  return <SessionContext.Provider value={{ name, roomId, setName, setRoomId }}>{children}</SessionContext.Provider>;
}
