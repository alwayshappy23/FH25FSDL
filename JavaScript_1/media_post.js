const posts = [
    { username: 'user1', likes: 120, comments: 10, shares: 5 },
    { username: 'user2', likes: 80, comments: 5, shares: 2 },
    { username: 'user3', likes: 200, comments: 20, shares: 10 },
  ];
  
  const popularPosts = posts.filter(post => post.likes > 100);
  const postSummary = posts.map(({ username, likes }) => `${username}: ${likes} likes`);
  
  console.log(popularPosts);
  console.log(postSummary);