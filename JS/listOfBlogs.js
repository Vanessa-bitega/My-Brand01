// const id = new URLSearchParams(window.location.search).get("id");
const container = document.querySelector(".comment_form");
const deletebtn = document.querySelector(".deleteblog");


const renderPosts = async () => {
  let uri = 'http://localhost:3004/table';
  const res = await fetch(uri);
  const posts = await res.json();
  let template = "";
  posts.forEach((post) => {
    template += `
   
    <div class="comment_form">              
    <table style="width:80%">
        <tr>
     <td>${post.id}</td>
     <td>${post.title.slice(0, 12)}</td>
     <td><button id="edit-post" onclick="openModal(${post.id});">Edit</button></td>
     <td>
     <button class="deleteblog" onclick="deleteBlog(${post.id});">delete</button>
     </td>
      
       </tr>
    </table>
     </div>
    `;
  });
  container.innerHTML = template;
};
const deleteBlog = async(_Blog_id) =>{
    await fetch(`http://localhost:3004/table/${_Blog_id}`,{
        method:'DELETE',
    })
}

 window.addEventListener("DOMContentLoaded", () => renderPosts());
