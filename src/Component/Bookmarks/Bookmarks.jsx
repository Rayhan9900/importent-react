
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'


function Bookmarks({ bookmarks, readingTime }) {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4 ">
            <div>
                <h3 className="text-4xl">Reading Time: {readingTime}</h3>
            </div>

            <h2 className='text-3xl text-center '>Bookmarked Blog:{bookmarks.length}</h2>

            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    )
}

Bookmarks.propTypes = {
    bookmark: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks
