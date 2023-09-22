const voteContainer = document.getElementById("vote-container");
const smileContainer = document.getElementById("smile-container");

const smileys = [
  {
    smile: "😆",
    voteCount: 0,
  },
  {
    smile: "😅",
    voteCount: 0,
  },
  {
    smile: "😃",
    voteCount: 0,
  },
  {
    smile: "😈",
    voteCount: 0,
  },
  {
    smile: "😉",
    voteCount: 0,
  },
];

function updateVotes() {
  voteContainer.innerHTML = "";

  smileys.forEach((item) => {
    const voteElement = document.createElement("div");
    voteElement.classList.add("vote-score");
    voteElement.textContent = item.voteCount;

    voteContainer.appendChild(voteElement);
  });
}

function showSmiles() {
  smileContainer.innerHTML = "";

  smileys.forEach((item, index) => {
    const smileElement = document.createElement("div");
    smileElement.textContent = item.smile;

    smileElement.addEventListener("click", () => {
      smileys[index].voteCount++;
      updateVotes();
    });

    smileContainer.appendChild(smileElement);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => removeSmiley(index));
    removeButton.classList.add("smile-item");

    const container = document.createElement("div");
    container.classList.add("smile-item");
    container.appendChild(smileElement);
    container.appendChild(removeButton);

    smileContainer.appendChild(container);
  });
}

function removeSmiley(index) {
  if (index >= 0 && index < smileys.length) {
    smileys.splice(index, 1);
    showSmiles();
    updateVotes();
  }
}

function addSmiley() {
  const newSmile = prompt("Enter a new smile:");
  if (newSmile) {
    smileys.push({ smile: newSmile, voteCount: 0 });
    showSmiles();
    updateVotes();
  }
}
document.getElementById("addSmileyButton").addEventListener("click", addSmiley);

showSmiles();
updateVotes();
