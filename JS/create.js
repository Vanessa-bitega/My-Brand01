
const form = document.querySelector('form');
const createPost = async ()=>{
   

    const title=form.title.value
    const body=form.body.value
      
try {
    const response = await fetch("https://tan-fair-bass.cyclic.app/api/blog/Create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({

        title,
        body
       
      }),
    });

    if (response.ok) {
     alert("Your blog has been added successfully")
     window.location.replace('listOfBlogs.html');
      
    } else {
      const error = await response.json();
      alert(`Failed to add blog: ${error.message}`)

    }
  } catch (error) {
    console.error(error);
    alert("Failed to add blog. Please try again later.")
  }
}
form.addEventListener('submit', createPost);


