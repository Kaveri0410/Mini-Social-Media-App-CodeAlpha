const API = "http://localhost:5000/api/posts";

const postForm = document.getElementById("postForm");
const postContainer = document.getElementById("postContainer");

// Fetch all posts
async function fetchPosts() {
  const res = await fetch(API);
  const posts = await res.json();

  postContainer.innerHTML = "";

  posts.forEach(post => {
    const div = document.createElement("div");
    div.style.border = "1px solid black";
    div.style.padding = "10px";
    div.style.margin = "10px";

    div.innerHTML = `
      <p>${post.content}</p>
      <p><strong>Likes:</strong> ${post.likes || 0}</p>
      <button onclick="likePost('${post._id}')">Like</button>

      <br><br>
      <input type="text" id="comment-${post._id}" placeholder="Add comment" />
      <button onclick="addComment('${post._id}')">Comment</button>

      <div>
        ${post.comments ? post.comments.map(c => `<p>💬 ${c}</p>`).join("") : ""}
      </div>
    `;

    postContainer.appendChild(div);
  });
}

// Create Post
postForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const content = document.getElementById("content").value;

  await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ content })
  });

  document.getElementById("content").value = "";
  fetchPosts();
});

// Like Post
async function likePost(id) {
  await fetch(`${API}/${id}/like`, {
    method: "POST"
  });

  fetchPosts();
}

// Add Comment
async function addComment(id) {
  const commentInput = document.getElementById(`comment-${id}`);
  const comment = commentInput.value;

  await fetch(`${API}/${id}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ comment })
  });

  commentInput.value = "";
  fetchPosts();
}

// Initial Load
fetchPosts();