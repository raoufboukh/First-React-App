
import { useEffect, useState } from 'react';
import avatar from './images/image-avatar.png';
import logo from './images/logo.svg'; 
import cartLogo from './images/icon-cart.svg';
import menuB from './images/icon-menu.svg'
import del from './images/icon-delete.svg';
import close from './images/icon-close.svg';
import { Link } from 'react-router-dom';
function Nav({cart,deleteCart}){
    const [menu,setMenu] = useState(false);
    const [show,setShow] = useState(false);
    useEffect(()=>{
        if(menu){
            document.querySelector('.popup').style = `position:absolute;
            width:100%;
            height:100%;
            background-color:rgb(0 ,0 ,0 ,40%);
            z-index:90;`
        }else{
            document.querySelector('.popup').style = `z-index:-1;`
        }
    })
    return(
        <header>
            <div className="container">
                <div className="head-links">
                    <img className='menu' src={menuB} alt="" style={{cursor:'pointer'}} onClick={() => setMenu(!menu)}/>
                    <img className='logo' src={logo} alt="" />
                    <div className={menu ? 'links show': 'links'} style={{zIndex:99, opacity:1}}>
                        <img src={close} style={{cursor:'pointer'}} onClick={() => setMenu(!menu)} alt="" />
                        <ul>
                            <li><Link to="/">Collections</Link></li>
                            <li><Link to="/">Men</Link></li>
                            <li><Link to="/">Women</Link></li>
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="card-logo">
                    {cart.num > 0 && <span className='total'>{cart.num}</span>}
                    <img className='cart' src={cartLogo} style={{cursor:'pointer', width:'27px', height:'27px'}} alt="" onClick={() => setShow(!show)}/>
                    <div className={show ? 'cards show': 'cards'}>
                        <h5>Cart</h5>
                        <div>
                            {cart.length === 0 ? 
                                <p style={{textAlign:'center',lineHeight:8}}>Your Card Is Empty</p> : 
                                <>
                                    <div style={{display:'flex',alignItems:'center'}}>
                                        <div style={{padding:'20px',flexBasis:'10%'}}>
                                            <img src={cart.image} alt="" />
                                        </div>
                                        <div  style={{padding:'20px 0', flexBasis:'60%'}}>
                                            <p style={{fontSize:'12px'}}>{cart.title}</p>
                                            <span className='operation' style={{fontSize:'12px',margin:'0 5px'}}>${(cart.price).toFixed(2)}x{cart.num}</span>
                                            <span>${(cart.price * cart.num).toFixed(2)}</span>
                                        </div>
                                        <div>
                                            <img style={{width:'15px',height:'15px',flexBasis:'30%'}} onClick={() => deleteCart()} src={del} alt="" />
                                        </div>
                                    </div> 
                                    <div>
                                        <Link to='/'>checkout</Link>
                                    </div>
                                </>
                            } 
                        </div>
                    </div>
                    <img src={avatar} style={{cursor:'pointer'}} alt="" />
                </div>
            </div>
        </header>
    )
}

export default Nav;