import React from 'react'

const Header = ({searchValue, setSearchValue, fetchMovies}) => {
  return (
    <header>
        <h1>Film Finder</h1>

        <div className='search-box'> 
      <input type="text" value={searchValue} onChange= {(e)=> setSearchValue(e.target.value)} onKeyPress= {(e)=> e.key === "Enter" && fetchMovies() } />
       <button onClick={fetchMovies} > Search </button>
      </div>
      
    </header>
  )
}

export default Header
