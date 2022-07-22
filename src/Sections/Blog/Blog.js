import React from 'react'
import "../../style/blog.css"
import BlogPosts from './BlogData'

const Blog = () => {

  return (
    <>
    <div >
    <h2 style={{margin:"35px 15px 3px 15px",fontWeight:"bold",borderBottom:"2px solid #c9c4c4",padding:"3px"}} >Explore <span style={ {color:"gray"}}> Tech world with us</span>  </h2>
    <span style={{width:"60px",height:"5px",background:"gray"}} ></span>
    <div className="blogs-container">
       
   
  {
    BlogPosts.map(item=>{
        return(
                 <div key={item.id} className="blog">
            <div class="card" style={{width:"25rem"}}>
  <img src={item.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <p class="card-text">{item.dsc.slice(0,130)+"..."}</p>
    <a href="#" class="btn btn-primary">Read More</a>
  </div>
</div>
        </div>
        )
   
    })
  }

    </div>
    </div>
    
    
    
    
    </>
  )
}

export default Blog