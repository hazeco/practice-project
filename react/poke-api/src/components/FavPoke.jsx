import React from 'react'
import LikePoke from './LikePoke';

function FavPoke({ fav = [], likes = {}, toggleLike }) {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
            {fav?.map((data, idx) => (
                <div key={idx}>
                    <h3>{data?.name}</h3>
                    <img src={data?.sprites?.other?.home?.front_default} alt={data?.name} />
                    <LikePoke 
                        like={likes[data?.id] || false} 
                        toggleLike={() => toggleLike(data?.id)} 
                    />
                </div>
            ))}
        </div>
    )
}

export default FavPoke