

const form = document.querySelector('form');
const createPost = async (e)=>{
   e.preventDefault();
   const doc={
       id:form.id.value,
       name:form.name.value,
       Comment:form.Comment.value,
     
      
   }
   await fetch('http://localhost:3004/data',{
       method:'POST',
       body:JSON.stringify(doc),
       headers:{ 'content-type' : 'application/json' }
   });
 window.location.replace('viewcomment.html');
}
form.addEventListener('submit', createPost);



// const id = new URLSearchParams(window.location.search).get("id");
const container = document.querySelector(".post_form");
const deletebtn = document.querySelector(".deleteblog");


const renderPosts = async () => {
  let uri = 'http://localhost:3004/data';
  const res = await fetch(uri);
  const posts = await res.json();
  let template = "";
  posts.forEach((post) => {
    template += `
   
    <div class="post_form">              
    <table style="width:80%">
        <tr>
     <td>${post.id}</td>
     <td>${post.title.slice(0, 20)}</td>
     <td><button>Edit</button></td>
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
    await fetch(`http://localhost:3004/data/${_Blog_id}`,{
        method:'DELETE',
    })
}

 window.addEventListener("DOMContentLoaded", () => renderPosts());

