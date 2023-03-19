const comment_form = document.querySelector('form');
const createPost = async ()=>{
    // e.preventDefault();
    const doc={
        id:comment_form.id.value,
        name:comment_form.name.value,
        commentBody:comment_form.commentBody.value,
       
    }
    await fetch(` https://tan-fair-bass.cyclic.app/api//blog/${blogId}/comment`,{
        method:'POST',
        body:JSON.stringify(doc),
        headers:{'content-type' : 'application/json'}
    });
    window.location = "blogs.html";
}
 comment_form.addEventListener('submit', createPost)