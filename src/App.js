import React from 'react'

const App = () => {
  return (
    <>
      <header>
        {/* Fixed navbar */}
        <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
          <a className='navbar-brand' href='/'>
            Fixed navbar
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarCollapse'
            aria-controls='navbarCollapse'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarCollapse'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item active'>
                <a className='nav-link' href='/'>
                  Home <span className='sr-only'>(current)</span>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/'>
                  Link
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link disabled' href='/' tabIndex={-1} aria-disabled='true'>
                  Disabled
                </a>
              </li>
            </ul>
            <form className='form-inline mt-2 mt-md-0'>
              <input className='form-control mr-sm-2' type='text' placeholder='Search' aria-label='Search' />
              <button className='btn btn-outline-success my-2 my-sm-0' type='submit'>
                Search
              </button>
            </form>
          </div>
        </nav>
      </header>
      {/* Begin page content */}
      <main role='main' className='flex-shrink-0 mt-4'>
        <div className='container'>
          <h1 className='mt-5'>Sticky footer with fixed navbar</h1>
          <p className='lead'>
            Pin a footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS. A fixed navbar
            has been added with <code>padding-top: 60px;</code> on the <code>main &gt; .container</code>.
          </p>
          <p>
            Back to <a href='/docs/4.3/examples/sticky-footer/'>the default sticky footer</a> minus the navbar.
          </p>
        </div>
      </main>
      <footer className='footer mt-auto py-3 bg-dark text-white'>
        <div className='container'>Place sticky footer content here.</div>
      </footer>
    </>
  )
}

export default App
