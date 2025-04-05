import './Header.css'

import jsIcon from "../assets/js1.png"
import htmlIcon from "../assets/html.png"
import cssIcon from "../assets/css.png"
import atomIcon from "../assets/atom.png"
import nodeIcon from "../assets/node-js-240.png"

function Header() {
    return (
        <>
            <div className="header">
                <div className="intro">
                    <h3>Hello 👋,
                        <h3 className='bigTxt'>I'm a web<br />Developer
                        </h3>
                        <h3>I build things for web</h3>

                    </h3>
                </div>
                <div className="subIntro">
                    <ul>
                        {/* <li><span>0</span><span> years of<br />experence</span></li>
                    <li><span>2</span><span> project completed<br />around the world</span></li> */}
                        <li><img src={htmlIcon} alt="" srcset="" className='webToolIcon' /></li>
                        <li><img src={cssIcon} alt="" srcset="" className='webToolIcon' /></li>
                        <li><img src={jsIcon} alt="" srcset="" className='webToolIcon' /></li>
                        <li><img src={atomIcon} alt="" srcset="" className='webToolIcon' /></li>
                        <li><img src={nodeIcon} alt="" srcset="" className='webToolIcon' /></li>

                    </ul>

                </div>
            </div>

        </>
    )
}

export default Header