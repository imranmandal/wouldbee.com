import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';

const NotFound = () => (
    <div>
        <Navbar />
        <div className="container" style={{ height: '53vh', textAlign: 'center' }}>
            <div className="row align-items-center justify-content-center" style={{ height: '40vh' }}>
                <div className="col-lg-5">
                    <h1>404!!</h1>
                    <h2>NOT FOUND</h2>
                    <Link to="/">
                        <Link to="/">
                            <button className="btn btn-primary btn-sm mt-4 back-btn" style={{ width: '40%', maxWidth: '200px' }}>Take Me Home</button>
                        </Link>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);


export default NotFound;