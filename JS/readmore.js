const id = new URLSearchParams(window.location.search).get("id");
const blogs = document.getElementById('articl')
const renderBlog = async ()  =>{
    const res = await fetch(`http://localhost:3004/table/${id}`);
	const blog = await res.json();
    console.log('this is a blog', blog);

    let template = '';
    template += `
    <p><u><b>${blog.title}</b></u><br></p>
    <p> ${blog.body}</p>
    <span class="material-symbols-outlined" id="like"onclick="changeColor()">
                    heart_plus
                    </span>  
                   <img src="../images/Vector (6).svg" alt=""onclick="openForm()">
                   <p class="img">34k</p> 
    `
    
blogs.innerHTML= template;
};

console.log(id);
window.addEventListener('DOMContentLoaded', ()=>renderBlog());
