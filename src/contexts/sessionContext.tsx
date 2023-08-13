import { createContext, useState, type PropsWithChildren } from "react";

import { type SessionContext as SessionContextType } from "@/types.d";

const sessionInitialState = {
  name: "",
  roomId: "",
};

export const SessionContext = createContext<SessionContextType | null>(null);

export function SessionProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState(sessionInitialState);
  const { name, roomId } = session;
  const setName = (name: string) => {
    setSession({
      ...session,
      name,
    });
  };
  const setRoomId = (roomId: string) => {
    setSession({
      ...session,
      roomId,
    });
  };
  return <SessionContext.Provider value={{ name, roomId, setName, setRoomId }}>{children}</SessionContext.Provider>;
}
