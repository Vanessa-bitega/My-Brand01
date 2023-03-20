const id = new URLSearchParams(window.location.search).get("id");


const oneBlog = async () =>{
    const blogs = document.getElementById('articl');

    const res = await fetch (`https://tan-fair-bass.cyclic.app/api/blog/${id}`);
   const post = await res.json();
   const template = `
    <p><u><b>${post.data.title}</b></u><br></p>
    <p>${post.data.body}</p>
    <p> ${post.data._id}</p>
    <p class="img2">134k</p>
    <span class="material-symbols-outlined" id="like"onclick="changeColor()">
                    heart_plus
                    </span>  
                   <img src="../images/Vector (6).svg" alt=""onclick="openForm()">
                   <p class="img">34k</p>  
   
   
   `
   blogs.innerHTML = template;
}


oneBlog();














