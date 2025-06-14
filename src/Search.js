import React from 'react'
import { useGlobalContext } from './Context'

const Search = () => {

  const {query,SetQuery, error} = useGlobalContext();
  return (
    <>
      <section className='search-section'>
        <h2>Search Your Favourite Movies</h2>
        <form action="#" onSubmit={(e)=>e.preventDefault()}>
          <div>
            <input 
              type='text'
              placeholder='Search Movies'
              value={query}
              onChange={(e)=>SetQuery(e.target.value)}
              />
          </div>
        </form>
        <div className='card-error'>
          <p>{error.show && error.msg}</p>
        </div>
      </section>
    </>
  )
}

export default Search
