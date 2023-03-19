
 const id = new URLSearchParams(window.location.search).get("id");
 const container = document.querySelector("#articl");
//  const deletebtn = document.querySelector(".deleteblog")
 
 
 const renderPosts = async () => {
   let uri = `https://tan-fair-bass.cyclic.app/api/blog/`;
   const res = await fetch(uri);
   const { data } = await res.json();
   
   console.log(data);
   
   let template = "";
   data.forEach((post) => {
     template += `
    
     <div class="comment_form">              
     <table style="width:80%">
         <tr>
      <td>${post._id}</td>
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