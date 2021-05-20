import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import image4 from '../assets/image4.jpg'
import image6 from '../assets/image6.jfif'
import image8 from '../assets/image8.jfif'
import Button from 'react-bootstrap/Button'
import './HeroSection.css'
import './button.css'
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={image4}
                    alt="First slide"
                    />
                    <h1 className= 'top-left'>Music Egg</h1>
                    <div className='heroSectionCenter'>
                        <h2>Hey, This is Music Egg. Lets get streaming!</h2>
                        <Link to = ''>
                            <div class="btn btn-one">
                                <span>Getting Started</span>
                            </div>
                        </Link>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={image8}
                    alt="Second slide"
                    />
                    <h1 className= 'top-left'>Music Egg</h1>
                    <div className='heroSectionCenter'>
                        <h2>Create your own world filled with all your favourite 
                        songs and beats to share with friends and people of all walks of 
                        life by creating your own egg </h2>
                        <Link to ='/CreateEgg'>
                            <div class="btn btn-one">
                                    <span>Create an Egg</span>
                            </div>
                        </Link>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={image6}
                    alt="Third slide"
                    />
                    <h1 className= 'top-left'>Music Egg</h1>
                    <div className="heroSectionCenter">
                        <h2>Discover songs and playlists that get your body moving. By joining different eggs</h2>
                        <Link to ='/JoinEgg'>
                            <div class="btn btn-one">
                                <span>Join an Egg</span>
                            </div>
                        </Link>
                    </div>
                    
                </Carousel.Item>
            </Carousel>
                
        </>
    )
}

export default HeroSection
