import { useEffect } from "react";

function useLogout() {
  useEffect(() => {
    document.cookie = "isLogin=; path=/";
  }, []);
}

export default useLogout;
