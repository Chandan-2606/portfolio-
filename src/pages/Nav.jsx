import { Outlet, Link } from "react-router-dom"


import './Nav.css'


function Nav() {
    return (
        <>
            <nav className='navbar'>
                <div className="menu">

                    <img src="../../public/assets/boy.png" alt="" srcset="" />

                    {/* <ul className="menuList">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Skills">Skills</Link>
                        </li>
                        <li>
                            <Link to="/Projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/About">About me</Link>
                        </li>
                    </ul>

                    <div className="btn"><input type="button" value=" ✉ Hire Me!" /></div> */}

                </div>

                {/* <ul className='navlist'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Skills">Skills</Link>
                    </li>
                    <li>
                        <Link to="/Projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/About">About me</Link>
                    </li>
                </ul> */}

            </nav>

            <Outlet />
        </>

    )
}

export default Nav