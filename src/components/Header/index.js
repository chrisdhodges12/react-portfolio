import React from 'react';



function Header({ thisPage, handlePage }) {

    const pages = ["About", "Projects", "Resume", "Contact"];


  return (
    <header className="header" id="header">
      <h1 className='header-name mb-4'>Chris Hodges</h1>
      <nav className='d-flex justify-content-evenly mr-auto ml-auto'>
        <ul className="nav-list col-sm-12 col-md-8 col-lg-6 d-flex justify-content-center ml-auto mr-auto">
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
