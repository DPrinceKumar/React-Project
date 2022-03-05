import React from 'react'

const NavBar = ({filterItems,menuUpdatedList}) => {
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    {menuUpdatedList.map   (   (  curElem) => {
                        return(
                            <button
                                className="btn-group__item"
                                onClick={() => filterItems(curElem)}>
                                {curElem}
                            </button>   );
                        }   )   }
                </div>
            </nav>
        </>
    );
};

export default NavBar
