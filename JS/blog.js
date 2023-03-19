

const renderPosts = async () => {
const container = document.querySelector("#Article");
  let uri = 'https://tan-fair-bass.cyclic.app/api/blogs';
  const res = await fetch(uri);
  const {data} = await res.json();
  console.log(data)
  let template = "";
  data.forEach((post) => {
    console.log(post._id);
    template += `
   
    <div id="article">
    <h1>${post.title}</h1>
    <p>${post.title.slice(0,20)}</p>
    <a href="/HTML/readmore.html?id=${post._id}">Read more...</a>
    </div>
    `
  });
  container.innerHTML = template;
};

window.addEventListener('DOMContentLoaded', ()=>renderPosts());
