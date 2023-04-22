import React from 'react';
import { PRODUCTS } from '../../products';
import { Product } from './Product';

export const Shop = () => {

  return (
    <div className='shop'>
        <div className="shopTitle">
           
        </div>
       <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product}/>
        ))}
       </div>
        </div>
  )
}
