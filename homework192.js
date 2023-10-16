document.addEventListener("DOMContentLoaded", () => {
  const postIdInput = document.getElementById("postIdInput");
  const searchButton = document.getElementById("searchButton");
  const postContainer = document.getElementById("postContainer");

  searchButton.addEventListener("click", () => {
    const postId = parseInt(postIdInput.value);

    if (postId >= 1 && postId <= 100) {
      getPostById(postId)
        .then((post) => {
          postContainer.innerHTML = `
                        <h2>Пост #${post.id}</h2>
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                        <button id="getCommentsButton">Отримати коментарі</button>
                    `;

          const getCommentsButton =
            document.getElementById("getCommentsButton");
          getCommentsButton.addEventListener("click", () => {
            getCommentsForPost(post.id)
              .then((comments) => {
                const commentsList = comments
                  .map((comment) => `<p>${comment.body}</p>`)
                  .join("");
                postContainer.innerHTML += `<h3>Коментарі:</h3>${commentsList}`;
              })
              .catch((error) => {
                console.error("Помилка при отриманні коментарів:", error);
              });
          });
        })
        .catch((error) => {
          console.error("Помилка при отриманні поста:", error);
        });
    } else {
      alert("Ід поста повинно бути від 1 до 100");
    }
  });
});

function getPostById(postId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(`Помилка HTTP: ${response.status}`);
      }
      return response.json();
    }
  );
}

function getCommentsForPost(postId) {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`Помилка HTTP: ${response.status}`);
    }
    return response.json();
  });
}
