import React from 'react'
import vg from "../assests/img-2.avif"
import { AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai';
const Home = () => {
    return (
        <>
            <div className="home" id="home">
                <main>
                    <h1>
                        TechyHead
                    </h1>
                    <p>
                        Solution to all your problems
                    </p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Graphics"></img>
                <div>
                    <p>
                        We are your one and only solution to the tech problems you face
                        everyday. We are leading tech company whose aim is to
                        increase the problem solving ability in children.
                    </p>
                </div>
            </div>
            <div className="home3" id="about">
                <div>
                <h1>Who we are?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis modi odit beatae assumenda, optio laborum maiores vel.
                    Amet modi fugiat quidem animi at. Quasi veniam, possimus cumque ullam dolorem nihil maxime facilis itaque similique.
                     Ut animi quasi cupiditate nulla eaque esse deleniti, totam nesciunt fugit? Necessitatibus in, ipsa minus tenetur quo 
                     recusandae nesciunt fugit illo iusto aliquid voluptas nulla velit repellat culpa non ratione incidunt amet! Corporis
                      tempore magnam voluptate commodi officia porro aliquam eos cum. Minima cum facere officia quas recusandae quae aspernatur
                       minus repellendus, beatae incidunt obcaecati totam.</p>
                </div>
            </div>
            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{animationDelay: "0.3s"}}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{animationDelay: "0.5s"}}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={{animationDelay: "0.7s"}}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                        <div style={{animationDelay: "0.1s"}}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
}

export default Home