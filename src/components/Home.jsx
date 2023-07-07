import React from 'react';
import vg from "../assets/2.png";
import { AiFillFacebook, AiFillAmazonCircle, AiFillApple, AiFillGoogleCircle } from "react-icons/ai";

const Home = () => {
    return (
        <>
            <div className="home" id='home'>
                <main>
                    <h1>Search Jobs.</h1>
                    <p>Connecting talent to opportunity: Your gateway to career success!</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        Welcome to JobConnect, where career dreams become a reality. Discover a wide range of job opportunities across industries, connect with leading employers, and unlock your potential. Our user-friendly platform and advanced matching algorithms make job searching effortless. Take the first step towards a fulfilling career today!
                    </p>
                </div>
            </div>

            <div className="home3" id='about'>
                <div>
                    <h1>Who we are ?</h1>
                    <p>We are a dedicated platform connecting job seekers with the right opportunities. Our mission is to empower individuals in their career journeys by providing a seamless and efficient job search experience. With a vast network of employers and advanced matching algorithms, we strive to help candidates find their dream jobs while assisting companies in sourcing top talent. Join us and let us be your trusted partner in shaping your future career.</p>
                </div>
            </div>

            <div className="home4" id='brands'>
                <div>
                    <h1>Brands</h1>

                    <article>
                        <div style={{
                            animationDelay: "0.3s",
                        }}>
                            <AiFillFacebook />
                            <p>Facebook</p>
                        </div>

                        <div style={{
                            animationDelay: "0.5s",
                        }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>

                        <div style={{
                            animationDelay: "0.7s",
                        }}>
                            <AiFillApple />
                            <p>Apple</p>
                        </div>

                        <div style={{
                            animationDelay: "0.9s",
                        }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>


                    </article>
                </div>
            </div>
        </>
    )
}

export default Home