import React, { Component } from "react";

class SmilesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emojis: [
        { id: 1, name: "😃", count: 0 },
        { id: 2, name: "😍", count: 0 },
        { id: 3, name: "🥳", count: 0 },
      ],
      winner: null,
      showResults: false,
    };
  }

  handleVote = (emojiId) => {
    this.setState((prevState) => ({
      emojis: prevState.emojis.map((emoji) =>
        emoji.id === emojiId ? { ...emoji, count: emoji.count + 1 } : emoji
      ),
    }));
  };

  handleShowResults = () => {
    const { emojis } = this.state;
    let maxVotes = -1;
    let winningEmoji = null;

    emojis.forEach((emoji) => {
      if (emoji.count > maxVotes) {
        maxVotes = emoji.count;
        winningEmoji = emoji;
      }
    });

    this.setState({
      winner: winningEmoji,
      showResults: true,
    });
  };

  render() {
    const { emojis, winner, showResults } = this.state;

    return (
      <div className="smiles">
        <h1>Emoji Voting App</h1>
        <ul>
          {emojis.map((emoji) => (
            <li key={emoji.id}>
              {emoji.name} - {emoji.count} votes
              <button className="voteBtn" onClick={() => this.handleVote(emoji.id)}>Vote!</button>
            </li>
          ))}
        </ul>
        <button className="resultBtn" onClick={this.handleShowResults}>Show Results</button>
        {showResults && (
          <div>
            <h2>Winner:</h2>
            {winner && <p>{winner.name}</p>}
          </div>
        )}
      </div>
    );
  }
}

export default SmilesApp;
