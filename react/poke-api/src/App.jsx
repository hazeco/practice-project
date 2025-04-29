import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { RingLoader } from 'react-spinners'

// Components
import FavPoke from './components/FavPoke.jsx';

function App() {
  const [poke, setPoke] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [number, setNumber] = useState(1);
  const [fav, setFav] = useState([]);
  const [likes, setLikes] = useState({});

  useEffect(() => {

    let abortController = new AbortController();

    const loadPoke = async () => {
      try {

        setLoading(true);
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`, {
          signal: abortController.signal
        });

        setPoke(response.data)
        setError("");

      } catch (error) {
        setError(error.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    }

    loadPoke();

    return () => abortController.abort();
  }, [number]);

  console.log(poke);

  const prevPoke = () => {
    setNumber((number) => (number <= 1 ? 1 : number - 1));
  }

  const nextPoke = () => {
    setNumber((number) => number + 1);
  }

  const addFav = () => {
    setFav((previousState) => [...previousState, poke])
  }

  const toggleLike = (pokemonId) => {
    setLikes(prev => ({
      ...prev,
      [pokemonId]: !prev[pokemonId]
    }));
  };


  console.log("Pokemon ID: ",number)
  console.log("Your favorite pokemon: ",fav)

  return (
    <div className="max-w-5xl p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg: grid-cols-2'>
        <div>
          {loading ? 
            <div className="flex justify-center items-center p-4">
              <RingLoader
                color="#36d7b7"
                loading={loading}
                size={80}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
            : 
            <>
              {error && <div className="text-red-500">{error}</div>}
              <h1>{poke?.name}</h1>
              <button onClick={addFav}>Add to favorite</button>
              <br />
              <img src={poke?.sprites?.other?.home?.front_default} alt={poke?.name} />
              <ul>
                {poke?.abilities?.map((abil, idx) => (
                  <li key={idx}>{abil.ability.name}</li>
                ))}
              </ul>
              <button onClick={prevPoke} >Previous</button>
              <button onClick={nextPoke} >Next</button>
            </>
          }
        </div>
        <div>
          {loading?
            <h2>Your favorite Pokemon</h2>
            :
            <>
              <h2>Your favorite Pokemon</h2>
              <FavPoke 
                fav={fav} 
                likes={likes}
                toggleLike={toggleLike}
              />
            </>
          }
          
        </div>
      </div>
    </div>
    
  )
}


export default App