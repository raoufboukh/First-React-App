import Image1 from './images/image-product-1.jpg';
import Image2 from './images/image-product-2.jpg';
import Image3 from './images/image-product-3.jpg';
import Image4 from './images/image-product-4.jpg';
import close from './images/icon-close.svg'; 
import next from './images/icon-next.svg';
import previous from './images/icon-previous.svg'
import cart from './images/icon-cart.svg';
import plus from './images/icon-plus.svg';
import minus from './images/icon-minus.svg';
import { useEffect, useState } from 'react';

function Products({addToCart}){
    const images = [Image1,Image2,Image3,Image4];
    const [num,setNum] = useState(0);
    const [source,setSrc] = useState(false);
    const [current,setCu] = useState(0);
    const product = {
        title:'Fall Limited Edition Sneakers',
        num:num,
        price:125.00,
        image:Image1
    }
    useEffect(()=>{
        if(source === true){
            document.querySelector('.popup').style = `position:absolute;
            width:100%;
            height:100%;
            background-color:rgb(0 ,0 ,0 ,50%);
            z-index:90;`
        }else{
            document.querySelector('.popup').style = `z-index:-1;`
        }
    })
    return(
        <section className='products'>
            <div className="container">
                <div className="images">
                    <div className="img-current">
                        <img className='imgCu' src={images[current]} onClick={() => setSrc(true)} alt="" />
                        <img className='changeImg next' src={next} onClick={() => {
                            if(images.length - 1 === current){
                                setCu(0);
                            }else{
                                setCu(current+1);
                            }
                        }}alt=""/>
                        <img className='changeImg previous' src={previous}  onClick={() => {
                            if(current === 0){
                                setCu(images.length-1)
                            }else{
                                setCu(current-1);
                            }
                        }}alt=""/>
                    </div>
                    <div className="img-thumb">
                        <img className={current === 0 ? 'select':null}  src={Image1} onClick={() => {
                            setCu(0);
                        }}alt="" />
                        <img className={current === 1 ? 'select' :null} src={Image2} onClick={() => {
                            setCu(1);
                        }} alt="" />
                        <img className={current === 2 ? 'select':null}  src={Image3} onClick={() => {
                            setCu(2);
                        }} alt="" />
                        <img className={current === 3 ? 'select':null}  src={Image4} onClick={() => {
                            setCu(3);
                        }} alt="" />
                    </div>
                </div>
                <div className="description">
                    <p className='title'>Sneaker Company</p>
                    <h2>Fall Limited Edition Sneakers</h2>
                    <p className='desc'>These Low-Profile Sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole, they'll withstand everything the weather can offer</p>
                    <h4><span className='new'>$125.00</span>  <span className='pourcentage'>50%</span></h4>
                    <p className='old'>$250.00</p>
                    <div>
                        <span style={{cursor: 'pointer'}} onClick={() => num > 0 && setNum(num-1)}><img className='change' src={minus} alt="" /></span>
                        <span className='number'>{num}</span>
                        <span style={{cursor: 'pointer'}} onClick={() => setNum(num+1)}><img className='change' src={plus} alt=""/></span> 
                        <button onClick={() => {
                            if(num > 0){
                                addToCart(product);
                                setNum(0);
                            }
                        }}><img src={cart} alt=""/> Add To Cart</button>
                    </div>
                </div>
            </div>
            {source && <div className='img' style={{position:'fixed',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:'320px',height:'300px',zIndex:99}}>
                <img src={images[current]} style={{width:'100%',borderRadius:'10px'}} alt="" />
                <img src={close} style={{backgroundColor:'white', padding:'5px',borderRadius:'50%', position:'absolute', top:'-10%', right:0}} onClick={() => setSrc(false)} alt="" />
                <img className='changeImg' src={next}  style={{backgroundColor:'white', padding:'10px',borderRadius:'50%',position:'absolute', top:'50%',transform:'translate(-50%,-30%)'}}  onClick={() => {
                    if(images.length - 1 === current){
                        setCu(0);
                    }else{
                        setCu(current+1);
                    }
                }} alt="" />
                <img className='changeImg' src={previous} style={{backgroundColor:'white', padding:'10px',borderRadius:'50%',position:'absolute',top:'50%',left:0,transform:'translate(-50%,-30%)'}} onClick={() => {
                    if(current === 0){
                        setCu(images.length-1)
                    }else{
                        setCu(current-1);
                    }
                }} alt="" />
                <div className="img-thumb" style={{display:'flex',gap:'10px',justifyContent:'center'}}>
                    <img className={current === 0 ? 'select':null}  src={Image1} onClick={() => {
                            setCu(0);
                        }} alt="" />
                    <img className={current === 1 ? 'select' :null} src={Image2} onClick={() => {
                            setCu(1);
                        }}alt="" />
                    <img className={current === 2 ? 'select' :null} src={Image3} onClick={() => {
                            setCu(2);
                        }} alt="" />
                    <img className={current === 3 ? 'select' :null} src={Image4} onClick={() => {
                            setCu(3);
                        }} alt="" />
                </div>
            </div>}
        </section>
    )
}


export default Products;