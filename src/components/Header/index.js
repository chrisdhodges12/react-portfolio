import React from 'react';



function Header({ thisPage, handlePage }) {

    const pages = ["About", "Projects", "Resume", "Contact"];


  return (
    <header className="" id="header">
      <h2>Chris Hodges</h2>
      <nav>
        <ul>
          {pages.map(page => {
            return (
              <li className="links" key={page}>
               <a href={`#${page}`}
                    onClick={() => handlePage(page)}
                    className={thisPage === page ? 'nav-link active' : 'nav-link'} >
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
