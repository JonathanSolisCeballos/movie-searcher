import './App.css'

export function App () {
  return (
    <div className='page'>
      <header>
        <h1>Movie searcher</h1>
        <form className='form'>
          <input type='text' placeholder='Write movie name' />
          <button>Search</button>
        </form>
      </header>

      <main>
        Results will be listed here...
      </main>
    </div>
  )
}
