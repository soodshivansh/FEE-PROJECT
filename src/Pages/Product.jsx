import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../Components/DesciptionBox/DescriptionBox';
import { RelatedProdcuts } from '../Components/RelatedProducts/RelatedProducts';

export const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productID} = useParams(); 
  const product = all_product.find((e) => e.id === Number(productID));

  return (
    <div>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProdcuts/>
    </div>
  )
}
