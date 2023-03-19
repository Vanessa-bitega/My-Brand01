
 const container = document.querySelector("#comment");
const renderPosts = async () => {
   
      let uri = `https://tan-fair-bass.cyclic.app/api/blog/${blogId}/comment`;
      const res = await fetch(uri);
      const {data} = await res.json();
      let template = "";
      data.forEach((post) => {
        template += `
        <div id="comment">
        
        <img src="../images/account_circle_FILL1_wght300_GRAD0_opsz48.png">
        <h4>${post.name}</h4>
        <p>${post.commentBody}</p>
        <button onclick="deleteComment(${post._id})"> delete </button>
        </div>
        `
      });
      container.innerHTML = template;
    };
    const deleteComment = async(_Blog_id) =>{
        await fetch(`http://localhost:3004/data/${_Blog_id}`,{
            method:'DELETE',
        })
    }
    
    
    window.addEventListener("DOMContentLoaded", () => renderPosts()); 