

const BookMarks = ({bookMarks, readingTimes}) => {
    // const {title} = bookMarks
    return (
        <div  className="w-4/12 border p-4">
            <h1>Hell {bookMarks.length}</h1>
            <div>
                <p>Spent time on read : {readingTimes} min</p>
            </div>
            {
                bookMarks.map((bookMarkTitel)=> <p key={bookMarkTitel.id} className="bg-slate-200 p-2 rounded-md mb-3">{bookMarkTitel.title}</p>)
            }
        </div>
    );
};

export default BookMarks;