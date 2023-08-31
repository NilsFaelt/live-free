import { LoggedinUserContext } from "@/context/LoggedinUserContext";
import { useContext, useEffect, useState } from "react";

export const useImUser = (id: string | null | undefined) => {
  const { loggedInUserId } = useContext(LoggedinUserContext);
  const [imUser, setImUser] = useState(false);
  console.log(loggedInUserId, id, " in hook");
  useEffect(() => {
    if (loggedInUserId === id) setImUser(true);
    else setImUser(false);
  }, [id]);
  return imUser;
};
