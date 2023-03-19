
let blogid = '';
const editbox = document.getElementById('editbox');
const updatebox = document.getElementById('updatebox');
editbox.style.display = 'none';
const openModal = async(_id) =>{
        const res = await fetch (`https://tan-fair-bass.cyclic.app/api/blog/update${_id}`)
        let post = await res.json();
       
       editbox.style.display = 'block';
        updatebox.title.valueOf = post.title;
        
        updatebox.message.valueOf = post.body;
        blogid = post._id;
        

}
const updateBlog = async()=>{
    const Post = {
        title: updatebox.title.valueOf,
        
        body: updatebox.message.valueOf,
    };
  
    const res = await fetch(`https://tan-fair-bass.cyclic.app/api/blog/update/${blogid}`,{
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














