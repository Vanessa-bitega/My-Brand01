// const id = new URLSearchParams(window.location.search).get("id");
const editbox = document.getElementById('editbox');
const updatebox = document.getElementById('updatebox');
editbox.style.display = 'none';

const openModal = async (id) => {
    editbox.style.display = 'block';
        const res = await fetch (`https://tan-fair-bass.cyclic.app/api/blog/update/${id}`)
        let post = await res.json();
       console.log(post)
        updatebox.title.value = post.data.title;
        
        updatebox.message.value = post.data.body;
        updatebox.elements.id.value =  post.data._id;
        

}
const updateBlog = async()=>{
    const id = updatebox.elements.id.value;
    const Post = {
        title: updatebox.title.value,
        
        body: updatebox.message.value,
    };
  
    const res = await fetch(`https://tan-fair-bass.cyclic.app/api/blog/update/${id}`,{
        method:"PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify(Post),
    });
    // alert("Your blog has been updated successfully")
}
     if (updatebox != null) 
     {
        updatebox.addEventListener('submit',(e)=>{
            e.preventDefault();
            updateBlog();
        })
     }

 window.addEventListener("DOMContentLoaded", () => updateBlog());














