import React from 'react'
import { Carousel, Container, Jumbotron } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Home() {
    return (
        <>
            <Jumbotron className='text-center jumbotop'>
                <h1>CatMeownity</h1>
                <p className="text-muted">
                    Neighbourhood and community cats in an app
                </p>
                <Container>
                    <NavLink to='/search' className='btn btn-block btn-dark btn-lg mt-5'>Search for a community with cats</NavLink>
                </Container>
            </Jumbotron>
            <Container>
                <h3>Learn more about cats</h3>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="http://placehold.it/800x300"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First Cat Trivia</h3>
                            <p>Cats are awesome</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="http://placehold.it/800x300"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Second Cat Trivia</h3>
                            <p>Not all cats like to be pet</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="http://placehold.it/800x300"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third Cat Trivia</h3>
                            <p>Don't leave the food lying around</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </>
    )
}

export default Home