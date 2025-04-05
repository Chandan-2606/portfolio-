import './Main.css'

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
                                <img src="../../public/assets/js1.png" alt="" />
                            </div>
                            <div className="skillsIconBox">
                                <img src="../../public/assets/html.png" alt="" />
                            </div>
                            <div className="skillsIconBox">
                                <img src="../../public/assets/css.png" alt="" />
                            </div>
                            <div className="skillsIconBox">
                                <img src="../../public/assets/atom.png" alt="" />
                            </div>
                            <div className="skillsIconBox">
                                <img src="../../public/assets/node-js-240.png" alt="" />
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