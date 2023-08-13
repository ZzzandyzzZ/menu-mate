import { SessionContext } from "@/contexts/storeContext";
import { useContext } from "react";

export function useSession() {
  const context = useContext(SessionContext);
  if (context == null) throw new Error("useSession must be used within a SessionProvider");
  return { ...context };
}
