
import { GoBookmark } from "react-icons/go";
const Blogs = ({blogData}) => {
   const {author, author_img, cover, hashtags,  posted_date, reading_time, title  } = blogData
   
    return (
        <div className="my-4">
            <div >
                <img className="w-full" src={cover} alt="" />
            </div>
            <div className="flex justify-between items-center">
                <div className="flex justify-center gap-4 items-center my-4">
                    <div>
                        <img className="w-16 h-16"  src={author_img} alt="" />
                    </div>
                    <div>
                       <h4 className="text-2xl font-bold">{author}</h4>
                       <p>{posted_date}</p>
                    </div>
                </div>
            <div className="flex justify-center items-center gap-3">
            <p className="font-semibold">{reading_time} min read</p>
            { <GoBookmark onClick={()=> console.log('hello')} />}
            </div>
            </div>
            <h2>{title}</h2>
        
            {hashtags.map((has, index)=> <small key={index} className="m-1 underline">#{ has}</small>) }
          <div>
          <button className="underline text-blue-900 font-medium">Mark as read</button>
          </div>
           
            
        </div>
    );
};

export default Blogs;



