
const form = document.querySelector('form');
const createPost = async (e)=>{
   e.preventDefault();
   const doc={
    //    id:form.id.value,
       title:form.title.value,
    
       body:form.body.value,
      
   }
   await fetch( `https://tan-fair-bass.cyclic.app/api/blog/create`,{
       method:'POST',
       body:JSON.stringify(doc),
       headers:{ 'content-type' : 'application/json' }
   });
 window.location.replace('listOfBlogs.html');
}
form.addEventListener('submit', createPost);


