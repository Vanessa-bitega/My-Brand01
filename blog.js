

const renderPosts = async () => {
const container = document.querySelector("#Article");
  let uri = 'http://localhost:3004/table';
  const res = await fetch(uri);
  const posts = await res.json();
  let template = "";
  posts.forEach((post) => {
    template += `
   
    <div id="article">
    <h1>${post.title}</h1>
    <p><small>$${post.title}</small></p>
    <p>${post.body.slice(0, 200)}</p>
    <a href="/HTML/readmore.html?id=${post.id}">Read more...</a>
    </div>
    `
  });
  container.innerHTML = template;
};


renderPosts();