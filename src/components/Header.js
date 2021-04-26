import React, { Component } from 'react';
import { Menubar } from 'primereact/menubar';
import logo from '../images/logo.png';

export class Header extends Component {

    render() {
        const start = <div class="p-text-center">
          <img alt="Green & Healthy" src={logo} height="40" className="p-mr-2"></img>
          <span>Green & Healthy</span>
        </div> ;
        const end = <i className="pi pi-shopping-cart p-mr-2"></i>;

        return (
            <div>
                <div className="card">
                    <Menubar start={start} end={end} />
                </div>
            </div>
        );
    }
}

export default (Header);