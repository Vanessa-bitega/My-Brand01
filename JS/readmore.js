const id = new URLSearchParams(window.location.search).get("_id");
const blogs = document.getElementById('articl')
const renderBlog = async ()  =>{
    const res = await fetch(`https://tan-fair-bass.cyclic.app/api/blog/:id`);
	const {data}= await res.json();
    console.log('this is a blog', data);
     let template = '';
    data.forEach((post) => {
   
    template += `
    <p><u><b>${post.title}</b></u><br></p>
    <p><u><b>${post.snippet}</b></u><br></p>
    <p> ${post.body.id}</p>
    <span class="material-symbols-outlined" id="like"onclick="changeColor()">
                    heart_plus
                    </span>  
                   <img src="../images/Vector (6).svg" alt=""onclick="openForm()">
                   <p class="img">34k</p> 
    `
    });
blogs.innerHTML= template;
};

console.log(id);
window.addEventListener('DOMContentLoaded', ()=>renderBlog());
