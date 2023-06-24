import carRental from "../images/carRental.png"
import instaClone from "../images/instaclone.png"
import shopsy from "../images/shopsy.png"
import "../Style/project.css"
import git from "../images/git.png"
import demo from "../images/demo.jpg"

export default function Project(){
    return<>
    <h1 id="project-name">Projects</h1>
    <div id="project-container">
        <div id="project">
            <div id="whole-project-wrap-in-that-box">
            <div className="project-wrap-one-project-info-image">
                <img src={carRental} className="image-of-the-project"/>
                <div className="info-of-the-project">
                    <h4 className="name-of-the-project">Car Rental App</h4>
                    <p className="para-of-the-info-the">This application is very usefull for those people who want by and sell a car on rent based. in this application we have created two main section one for seller one for buyer , and we also provide the deferent access for deferent user for the security purpose.</p>
                    <a href="https://github.com/jadhav-dipali/Car-Rental-App" target="_blank"><img src={git} className="code-of-the-project-git"></img><span>Code</span></a> 
                    <a href="https://car-rental-app-navy.vercel.app/" target="_blank"><img src={demo} className="code-of-the-project-git"></img><span>Live Demo</span></a>
                </div>
            </div>
            <div className="project-wrap-one-project-info-image">
                <div className="info-of-the-project">
                    <h4 className="name-of-the-project">InstaClone</h4>
                    <p className="para-of-the-info-the"> Allow Users to Register and Create an Account.
                                         ✰ Enable users to log in using their credentials.
                                         ✰ Allow users to post images or videos also that change the dp functionality I am adding.
                                         ✰ Allow users to like a post.
                                         ✰ Enable users to log out.</p>
                    <a href="https://github.com/jadhav-dipali/InstaClonAuth" target="_blank"><img src={git} className="code-of-the-project-git"></img><span>Code</span></a> 
                    <a href="https://insta-clon-auth.vercel.app/" target="_blank"><img src={demo} className="code-of-the-project-git"></img><span>Live Demo</span></a>
                </div>
                <img src={instaClone} className="image-of-the-project"/>
            </div>
            <div className="project-wrap-one-project-info-image">
                <img src={shopsy} className="image-of-the-project"/>
                <div className="info-of-the-project">
                    <h4 className="name-of-the-project">Shopsy App</h4>
                    <p className="para-of-the-info-the">
                     User Can Be By The What ever there Choiced product. and also they pay for it there also paymanet card your details.
                     Displayed a list of products with details such as name, price, and images.
                    </p>
                    <a href="https://github.com/jadhav-dipali/Shopsy-app-react" target="_blank"><img src={git} className="code-of-the-project-git"></img><span>Code</span></a> 
                    <a href="https://shopsy-app-react.vercel.app/" target="_blank"><img src={demo} className="code-of-the-project-git"></img><span>Live Demo</span></a>
                </div>
            </div>            
            </div>
        </div>
    </div>
    </>
}