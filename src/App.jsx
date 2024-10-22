// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import Blog from './components/blogs/Blog'
import BookMarks from './components/bookMark/BookMarks'
import Header from './components/Header/Header'

function App() {
const [bookMarks, setBookMarks] = useState([])
const [readingTimes, setReadingTime] = useState(0)

const handleAddToBookMarks = blog =>{
  const newBookMark = [...bookMarks, blog]
  setBookMarks(newBookMark)
}
const readingTime = time =>{
  const times = readingTimes + time 
  setReadingTime(times)
}
  return (
    <>
   <Header></Header>
<div className='flex mt-10 gap-3'>
<Blog readingTime={readingTime} handleAddToBookMarks={ handleAddToBookMarks}></Blog>
<BookMarks readingTimes={readingTimes} bookMarks={bookMarks} ></BookMarks>
</div>

     
    
    </>
  )
}

export default App
