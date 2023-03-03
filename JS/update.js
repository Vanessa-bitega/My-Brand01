
let blogid = '';
const editbox = document.getElementById('editbox');
const updatebox = document.getElementById('updatebox');
editbox.style.display = 'none';
const openModal = async(id) =>{
        const res = await fetch (`http://localhost:3004/table/${id}`)
        let post = await res.json();
       
       editbox.style.display = 'block';
        updatebox.title.value = post.title;
        updatebox.message.value = post.body;
        blogid = post.id;
        

}
const updateBlog = async()=>{
    const Post = {
        title: updatebox.title.value,
        body: updatebox.message.value,
    }
//    let  title = newForm.title.value;
//    let  Description = newForm.message.value;
  
    const res = await fetch(`http://localhost:3004/table/${blogid}`,{
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














