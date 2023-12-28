import { useEffect, useState } from "react"

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(window.navigator.onLine)
  const updateNetwork = () => {
    setOnlineStatus(window.navigator.onLine)
  }
  useEffect(() => {
    window.addEventListener("offline", updateNetwork)
    window.addEventListener("online", updateNetwork)
    return () => {
      window.removeEventListener("offline", updateNetwork)
      window.removeEventListener("online", updateNetwork)
    }
  }, [])
  return onlineStatus
}

export default useOnlineStatus
