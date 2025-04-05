import './Footer.css'


const submitBtn = document.getElementsByName('submitBtn')
const userName = document.getElementsByName('userName')
const userEmail = document.getElementsByName('userEmail')
const userMessage = document.getElementsByName('userMessage')

function Footer() {








    return (
        <>
            <div className='footer'>
                <h3 className='leftFooter'>Let's discuss<br />on something cool together.

                </h3>
                <div className="getInfo">
                    <form>
                        <div><input type="text" id="userName" placeholder='Your name' /></div>
                        <div><input type="email" id="userEmail" placeholder='Your email' /></div>
                        <div><input type='text' id="userMsg" placeholder='Your message' /></div>
                        <div><input type="submit" value="Submit ↗" id="sumBtn" /></div>

                    </form>
                </div>

            </div>
            <div className="credit">
                <h2>
                    Thankyou for watching.
                </h2>
                <p>UI Designed a by HiDev.</p>
            </div>

        </>
    )

}

export default Footer