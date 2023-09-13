import { space } from 'postcss/lib/list';
import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

function Blog({ blog, handleAddToBookmark, handleMarkAsRead }) {
    const { id, title, cover, author, author_img, posted_date, reading_data, hashtag } = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title} `} />
            <div className='flex justify-between mb-4 space-y-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_data}min read</span>
                    <button onClick={() => handleAddToBookmark(blog)}
                        className='ml-2  text-2xl text-blue-700'>
                        <FaBookmark></FaBookmark>
                    </button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtag.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button
                onClick={() => handleMarkAsRead(id, reading_data)}
                className='text-purple-800 underline'>
                Mark as read
            </button>
        </div>
    )
}

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog