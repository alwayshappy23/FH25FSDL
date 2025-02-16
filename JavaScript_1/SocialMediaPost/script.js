const posts = [];

function addPost() {
  const username = document.getElementById('username').value;
  const likes = parseInt(document.getElementById('likes').value);
  const comments = parseInt(document.getElementById('comments').value);
  const shares = parseInt(document.getElementById('shares').value);

  if (username && likes && comments && shares) {
    posts.push({ username, likes, comments, shares });
    updateAnalytics();
  } else {
    alert('Please fill all fields!');
  }
}

function updateAnalytics() {
  const popularPosts = posts.filter(post => post.likes > 100);
  const postSummary = posts.map(({ username, likes }) => `${username}: ${likes} likes`);

//   document.getElementById('popular-posts').innerHTML = `
//     <strong>Popular Posts:</strong><br>
//     ${JSON.stringify(popularPosts, null, 2)}
//   `;

  document.getElementById('post-summary').innerHTML = `
    <strong>Post Summary:</strong><br>
    ${postSummary.join('<br>')}
  `;
}