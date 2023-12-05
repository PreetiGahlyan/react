import React from "react"

class UserClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: {
        name: "",
        twitter_username: "",
        avatar_url: "",
      },
    }
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/PreetiGahlyan")
    const json = await data.json()
    this.setState({ userInfo: json })
  }

  render() {
    const { name, twitter_username, avatar_url } = this.state.userInfo
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h4>Contact: {twitter_username}</h4>
      </div>
    )
  }
}

export default UserClass
