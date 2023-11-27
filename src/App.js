import {Component} from 'react'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    isGameStart: false,
    yourValue: [],
    opponentValue: [],
    status: '',
  }

  showRules = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
        alt="rules"
      />
    </div>
  )

  showOpponent = idValue => {
    const opponent = choicesList[Math.floor(Math.random() * 3)]
    const you = choicesList.find(each => each.id === idValue)
    this.setState(
      {isGameStart: true, yourValue: you, opponentValue: opponent},
      this.showStatus,
    )
  }

  showStatus = () => {
    const {yourValue, opponentValue} = this.state
    if (yourValue.id === opponentValue.id) {
      this.setState({status: 'IT IS DRAW'})
    } else if (yourValue.id === 'ROCK' && opponentValue.id === 'SCISSORS') {
      this.setState({status: 'YOU WON'})
      this.setState(prevValue => ({
        score: prevValue.score + 1,
      }))
    } else if (yourValue.id === 'SCISSORS' && opponentValue.id === 'ROCK') {
      this.setState({status: 'YOU LOSE'})
      this.setState(prevValue => ({
        score: prevValue.score - 1,
      }))
    } else if (yourValue.id === 'PAPER' && opponentValue.id === 'SCISSORS') {
      this.setState({status: 'YOU LOSE'})
      this.setState(prevValue => ({
        score: prevValue.score - 1,
      }))
    } else if (yourValue.id === 'PAPER' && opponentValue.id === 'ROCK') {
      this.setState({status: 'YOU WON'})
      this.setState(prevValue => ({
        score: prevValue.score + 1,
      }))
    } else if (yourValue.id === 'SCISSORS' && opponentValue.id === 'PAPER') {
      this.setState({status: 'YOU WON'})
      this.setState(prevValue => ({
        score: prevValue.score + 1,
      }))
    } else if (yourValue.id === 'ROCK' && opponentValue.id === 'PAPER') {
      this.setState({status: 'YOU WON'})
      this.setState(prevValue => ({
        score: prevValue.score + 1,
      }))
    }
  }

  playAgainGame = () => {
    this.setState({isGameStart: false})
  }

  render() {
    const {score, isGameStart, yourValue, opponentValue, status} = this.state

    return (
      <div>
        <div className="pro">
          <h1>ROCK PAPER SCISSORS</h1>
          <div>
            <p>Score</p>
            <p>{score}</p>
          </div>
        </div>
        {!isGameStart && (
          <ul className="pro">
            <li key={choicesList[0].id} className="change">
              <button
                type="button"
                onClick={() => this.showOpponent(choicesList[0].id)}
                data-testid="rockButton"
              >
                <img
                  src={choicesList[0].imageUrl}
                  alt={choicesList[0].id}
                  className="size"
                />
              </button>
            </li>
            <li key={choicesList[1].id} className="change">
              <button
                type="button"
                onClick={() => this.showOpponent(choicesList[1].id)}
                data-testid="rockButton"
              >
                <img
                  src={choicesList[1].imageUrl}
                  alt={choicesList[1].id}
                  className="size"
                />
              </button>
            </li>
            <li key={choicesList[2].id} className="change">
              <button
                type="button"
                onClick={() => this.showOpponent(choicesList[2].id)}
                data-testid="rockButton"
              >
                <img
                  src={choicesList[2].imageUrl}
                  alt={choicesList[2].id}
                  className="size"
                />
              </button>
            </li>
          </ul>
        )}
        {isGameStart && (
          <div>
            <div className="pro">
              <div>
                <p>YOU</p>
                <img src={yourValue.imageUrl} alt="your choice" />
              </div>
              <div>
                <p>OPPONENT</p>
                <img src={opponentValue.imageUrl} alt="opponent choice" />
              </div>
            </div>
            <p>{status}</p>
            <button type="button" onClick={this.playAgainGame}>
              PLAY AGAIN
            </button>
          </div>
        )}
        <div className="aligning">
          <button type="button" onClick={this.showRules}>
            RULES
          </button>
        </div>
      </div>
    )
  }
}

export default App
