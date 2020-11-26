import React from 'react'
import { Container } from 'react-bootstrap';
import './App.css';

function Footer() {
    return (
        <div id="footerz">
            <div className="d-flex justify-content-between pad-thai">
                <div>
                    <small>©2020 CatMeownity - SSH - GA SEI 25</small>
                </div>
                <div>
                    <small>Found any bugs? Or want to learn more? <a href="mailto:shawn.wee90@hotmail.com">Contact us</a></small>
                </div>
            </div>
        </div>
    )
}

export default Footer
