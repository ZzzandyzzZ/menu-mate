import { SessionContext } from "@/contexts/sessionContext";
import { useContext } from "react";

export function useSession() {
  const context = useContext(SessionContext);
  if (context == null) throw new Error("useSession must be used within a SessionProvider");
  return { ...context };
}
