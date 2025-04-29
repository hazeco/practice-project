import React from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

function LikePoke({ like, toggleLike }) {
    return (
        <button onClick={toggleLike}>
            {like ? <FaHeart style={{color:"red"}} /> : <FaRegHeart />}
        </button>
    )
}

export default LikePoke