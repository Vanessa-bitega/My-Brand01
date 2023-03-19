 const id = new URLSearchParams(window.location.search).get("id");
const container = document.querySelector(".comment_form");
const deletebtn = document.querySelector(".deleteblog");


const renderPosts = async () => {
  let uri = `https://tan-fair-bass.cyclic.app/api/blogs`;
  const res = await fetch(uri);
  const { data } = await res.json();
  
  console.log(data);
  
  let template = "";
  data.forEach((post) => {
    template += `
   
    <div class="comment_form">              
    <table style="width:80%">
        <tr>
     <td>${post._id.slice(0, 6,)}</td>
     <td>${post.title.slice(0, 12)}</td>
     <td><button id="edit-post" onclick="openModal(${post._id});">Edit</button></td>
     <td>
     <button class="deleteblog" onclick="deleteBlog(${post._id});">delete</button>
     </td>
      
       </tr>
    </table>
     </div>
    `
  });
  container.innerHTML = template;
};


const deleteBlog = async (_id) => {
  const response = await fetch(`https://tan-fair-bass.cyclic.app/api/blog/delete/${_id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    console.log('Blog deleted successfully');
    renderPosts();
  } else {
    console.error('Error deleting blog');
  }
}
// const deleteBlog = async(_Blog_id) =>{
//     await fetch(`http://localhost:3004/table/${_Blog_id}`,{
//         method:'DELETE',
//     })
// }

 window.addEventListener("DOMContentLoaded", () => renderPosts());
