import React from 'react';



function Header({ thisPage, handlePage }) {

    const pages = ["About", "Projects", "Resume", "Contact"];


  return (
    <header className="header" id="header">
      <h2 className='header-name'>Chris Hodges</h2>
      <nav className='d-flex justify-content-evenly'>
        <ul className="nav-list">
          {pages.map(page => {
            return (
              <li className="nav-links" key={page}>
               <a href={`#${page.toLowerCase()}`}
                    onClick={() => handlePage(page)}
                    className={thisPage === page ? 'nav-link-active' : 'nav-link'} 
                    >
                    {page}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
