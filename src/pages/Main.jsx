import './Main.css'

import jsIcon from "../assets/js1.png"
import htmlIcon from "../assets/html.png"
import cssIcon from "../assets/css.png"
import atomIcon from "../assets/atom.png"
import nodeIcon from "../assets/node-js-240.png"

function Main() {
    return (
        <>
            <div className="main">
                <div className="aboutMe"><h3>About me</h3>
                    <p>
                        As A Web Developer, I Am Responsible for<br /> Desiging And Developing Web Page.<br />
                        My Primary Focus Is To Create Responisve,<br /> User-friendly Experiences That Meet The Needs<br /> Of A Diverse Online Audience.
                    </p>
                    {/* <p>To work in a challenging atmosphere by exhibiting my skills with allmost sincerity and dedicated smart work for the growth of your esteemed organization along with mine.</p> */}
                </div>

                <div className="mySkills">
                    <h3>My Skills</h3>
                    <p>Technologies I've been working with recently</p>
                    <div className="skillsIcon">
                        <div className="row">
                            <div className="skillsIconBox">
                                <img src={jsIcon} alt="" />
                            </div>
                            <div className="skillsIconBox">
                                <img src={htmlIcon} alt="" />
                            </div>
                            <div className="skillsIconBox">
                                <img src={cssIcon} alt="" />
                            </div>
                            <div className="skillsIconBox">
                                <img src={atomIcon} alt="" />
                            </div>
                            <div className="skillsIconBox">
                                <img src={nodeIcon} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="project">
                    <h3>My Projects</h3>
                    <p>Some Things I've built so far</p>
                    <div className="projectList">

                        <div className="projectBox">
                            <div className="projectImage">
                                <img src="./src/assets/js1.png" alt="sd" />
                            </div>

                            <h3>Title</h3>
                            <p>subtitle</p>
                            <button>view</button>
                        </div>
                        <div className="projectBox">
                            <div className="projectImage">
                                <img src="./src/assets/js1.png" alt="sd" />
                            </div>

                            <h3>Title</h3>
                            <p>subtitle</p>
                            <button>view</button>
                        </div>
                        <div className="projectBox">
                            <div className="projectImage">
                                <img src="./src/assets/js1.png" alt="sd" />
                            </div>

                            <h3>Title</h3>
                            <p>subtitle</p>
                            <button>view</button>
                        </div>


                    </div>


                </div>
            </div>

        </>
    )

}

export default Main;