import React from 'react';
import { Button } from 'primereact/button';
import '../App.css';
import './Landing.css';
import { Link } from 'react-router-dom';

const Landing = () => {
        return (
            <div className="p-grid">
                <div className="p-offset-1 p-col-10">
                    <div className="p-grid">
                        <div className="p-col-12">
                            <div>
                                <h4>Hi there</h4>
                                We at Green & Healthy are existed to help you build your salad the you love it.
                            </div>
                        </div>
                    </div>
                    <div className="p-grid p-mt-2">
                        <div className="p-col-12">
                            <Link to="/ingredients" className="no-underline">
                                <Button className="button order-button" label="Start preparing your salad" icon="pi pi-shopping-cart"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

export default Landing;