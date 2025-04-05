import './Header.css'

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
                        <li><img src="../../public/assets/html.png" alt="" srcset="" className='webToolIcon' /></li>
                        <li><img src="../../public/assets/css.png" alt="" srcset="" className='webToolIcon' /></li>
                        <li><img src="../../public/assets/js1.png" alt="" srcset="" className='webToolIcon' /></li>
                        <li><img src="../../public/assets/atom.png" alt="" srcset="" className='webToolIcon' /></li>
                        <li><img src="../../public/assets/node-js-240.png" alt="" srcset="" className='webToolIcon' /></li>

                    </ul>

                </div>
            </div>

        </>
    )
}

export default Header