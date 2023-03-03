
 const container = document.querySelector("#comment");
const renderPosts = async () => {
   
      let uri = `http://localhost:3004/data`;
      const res = await fetch(uri);
      const posts = await res.json();
      let template = "";
      posts.forEach((post) => {
        template += `
        <div id="comment">
        
        <img src="../images/account_circle_FILL1_wght300_GRAD0_opsz48.png">
        <h4>${post.name}</h4>
        <p>${post.comment}</p>
        <button onclick="deleteComment(${post.id})"> delete </button>
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