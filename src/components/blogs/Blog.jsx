import { useEffect } from "react";
import { useState } from "react";
import Blogs from "./Blogs";


const Blog = ( {handleAddToBookMarks, readingTime}) => {
    const [blogData, setBlogData] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogData(data))
    })

    return (
        <div  className="  w-8/12">
            {
                blogData.map((blogData)=> <Blogs readingTime={readingTime}  handleAddToBookMarks={ handleAddToBookMarks} key={blogData.id} blogData={blogData}></Blogs>)
            }
        </div>
    );
};

export default Blog;