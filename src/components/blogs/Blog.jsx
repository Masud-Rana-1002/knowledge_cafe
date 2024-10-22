import { useEffect } from "react";
import { useState } from "react";
import Blogs from "./Blogs";


const Blog = () => {
    const [blogData, setBlogData] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogData(data))
    })

    return (
        <div  className="mt-10  w-7/12">
            {
                blogData.map((blogData)=> <Blogs key={blogData.id} blogData={blogData}></Blogs>)
            }
        </div>
    );
};

export default Blog;