
const Game = () => {
    const activeUser = localStorage.getItem("active user")
    const users = localStorage.getItem("users")
    const userScore = users.map((user) => user.name == activeUser);
// antalet kort är user level * 4
    const roules = {
        cards:  userScore.levle * 4 
        
    }

  return (
    <div>

    </div>
  )
}

export default Game