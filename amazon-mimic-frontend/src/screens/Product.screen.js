import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {detailsProduct} from '../actions/productActions'
import Rating from '../components/Rating'
import {Link} from 'react-router-dom'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'

const ProductScreen=(props)=> {
const dispatch=useDispatch();
const productId = props.match.params.id;
const productDetails = useSelector(state => state.productDetails)
const {loading, error, product} = productDetails

useEffect(()=>{
    dispatch(detailsProduct(productId))
},[dispatch, productId])
    return (
        <div>
        {loading? <LoadingBox></LoadingBox>
        :
        error? <MessageBox variant="danger">{error}</MessageBox>
        :
        <div>
        <Link to="/">Back to Home</Link>
     
       <div className="now top">
           <div className="col-2">
               <img className="large" src={product.image} alt ={product.name}></img>
           </div>
           <div className="col-1">
                <ul>
                    <li>
                         <h1>{product.name}</h1>
                    </li>
                    <li>
                       <Rating 
                       rating={product.rating}
                       numReviews = {product.numReviews}/>
                    </li>
                    <li>
                        Price :${product.price}
                    </li>
                    <li>
                        <p>{product.description}</p>
                    </li>
                </ul>
           </div>
           <div className="col-1">
       <div className="card card-body">
           <ul>
               <li>
                   <div className="row">
                       <div> Price</div>
                       <div> ${product.price}</div>
                   </div>
               </li>
               <li>
                   <div className="row">
                       <div>Status</div>
                       <div> 
                          {product.countInStock>0? (
                          <span className="success" >In Stock</span>
                          ):(
                          <span className="danger" >Not available </span>
                          )}
                        </div>
                   </div>
               </li>
               <li>
                   <button className="primary block">Add to Cart</button>
               </li>
           </ul>
       </div>


           </div>
       </div>
    </div>

        }
      
    </div>
      )
}
export default ProductScreen
