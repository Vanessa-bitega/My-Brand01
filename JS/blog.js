

const renderPosts = async () => {
const container = document.querySelector("#Article");
  let uri = 'https://tan-fair-bass.cyclic.app/api/blogs';
  const res = await fetch(uri);
  const {data} = await res.json();
  console.log(data);
  let template = "";
  data.forEach((post) => {
    template += `
   
    <div id="article">
    <h1>${post.title}</h1>
    <p><small>${post.snippet}</small></p>
    <a href="/HTML/readmore.html?id=${post.body.id}">Read more...</a>
    </div>
    `
  });
  container.innerHTML = template;
};

window.addEventListener('DOMContentLoaded', ()=>renderPosts());
