import React, { useContext, useEffect } from 'react';
import {Context} from '../../components/App'
import { Link } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import { Badge } from 'primereact/badge';
import './Header.css';
import logo from '../../images/logo.png';
import NumberFormat from 'react-number-format';

const Header = () => { 
        const { cart, totalAmount } = useContext(Context);
        
        const start = <div>
        <Link to='/'><img alt="Green & Healthy" src={logo} height="40" className="p-mr-2"></img></Link>
          <Link className="header-logo p-d-none p-d-md-inline-flex no-underline"
          to='/'><span>Green & Healthy</span></Link>
        </div> ;
        const end = <div>
                Total: 
                <NumberFormat className="p-ml-1 p-mr-1" value={totalAmount} prefix={'₪'} displayType={'text'} fixedDecimalScale decimalScale={2}/>
                <i className="pi pi-shopping-cart p-mr-3 p-overlay-badge">
                <Badge value={cart.length} style={{backgroundColor: '#14a13c', fontSize: 'small'}}></Badge></i>
            </div>

        useEffect(() => {
            console.log('cart', cart);
        })
        return (
            <div>
                <div className="card">
                    <Menubar start={start} end={end} />
                </div>
            </div>
        );
    }

export default Header;