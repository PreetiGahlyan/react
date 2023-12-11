import { useEffect, useState } from "react"

const User = () => {
  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    fetchData = async () => {
      const data = await fetch("https://api.github.com/users/PreetiGahlyan")
      const json = await data.json()
      setUserInfo(json)
    }
    fetchData()
  }, [])

  const { name, twitter_username, avatar_url } = userInfo

  return (
    { userInfo } && (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h4>Twitter: @{twitter_username}</h4>
      </div>
    )
  )
}

export default User
