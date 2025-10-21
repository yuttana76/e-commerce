"use client"

import useCartStore from "@/stores/cartStore";
import { ProductType } from "@/types"
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const ProductInteraction = ({
    product,
    selectedSize,
    selectedColor
}:{
    product:ProductType;
    selectedSize:string;
    selectedColor:string;
        
    }) => {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [quantity, setQuantity] =  useState(1);

    const {addToCart} = useCartStore()

   const handleTypeChnage = (type:"size"|"color", value:string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set(type, value);
        router.push(`${pathname}?${params.toString()}`,{scroll:false});
   }

    const handleQuantityChage = (action:"increment"|"decrement") => {
          if(action==="increment"){
                setQuantity((prev)=>prev+1);
          }else{
                setQuantity((prev)=> (prev>1 ? prev-1 : 1));
          }
    }
    
    const haddleAddToCart = () => {

        addToCart({
            ...product,quantity,selectedSize,selectedColor
        })

        toast.success("Product added to cart!")
    }

  return (
    <div className="flex flex-col gap-4 mt-4">
        {/* SIZE */}
        <div className="flex flex-col gap-2 text-xs">
            <span className="text-gray-500">Size</span>
            <div className="flex items-center gap-2">
                {product.sizes.map((size) => (  
                    <div className={`cursor-pointer border-1 p-[2px] 
                        ${selectedSize === size ? "border-gray-600": "border-gray-300" }`} 
                        key={size}
                        onClick={()=>handleTypeChnage("size", size)}
                        >

                        <div className={`w-6 h-6 text-center flex items-center justify-center 
                            ${selectedSize==size ? "bg-black text-white":"bg-white text-black"}`} >
                            {size.toUpperCase()}
                        </div>
                    </div>
                ))}
            </div>
            
        </div>

        {/* COLOR */}
        <div className="flex flex-col gap-2 text-xs">
            <span className="text-gray-500">Color</span>
            <div className="flex items-center gap-2">
                {product.colors.map((color) => (  
                    <div className={`cursor-pointer border-1 p-[2px] 
                        ${selectedColor === color ? "border-gray-300": "border-white" }`} 
                        key={color}
                        onClick={()=>handleTypeChnage("color", color)}
                        >
                            <div className={`w-6 h-6  `}  style={{backgroundColor: color}} >
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
        {/* QUANTITY */}
        <div className="flex flex-col gap-2 text-sm">
            <span className="text-gray-500">Quantity</span>
            <div className="flex items-center gap-4">
                <button className="cursor-pointer border-1 border-gray-300 p-1" onClick={()=>handleQuantityChage("decrement")}>
                    <Minus className="w-4 h-4"/>
                </button>
                <span>{quantity}</span>
                <button className="cursor-pointer border-1 border-gray-300 p-1" onClick={()=>handleQuantityChage("increment")}>
                    <Plus className="w-4 h-4"/>
                </button>

            </div>
        </div>
        {/* BUTTONS */}
        <button 
        onClick={haddleAddToCart}
        className="bg-gray-600 text-white px-4 py-2 rounded-md shadow-lg hover:bg-gray-900 transition-all duration-300 flex items-center justify-center cursor-pointer gap-2 text-sm font-medium">
            <Plus className="w-4 h-4 inline-block mr-2"/>
            Add to Cart</button>

        <button className="ring-1 ring-gray-400 shadow-lg px-4 py-2 rounded-md hover:ring-2 hover:ring-gray-600 transition-all duration-300 flex items-center justify-center cursor-pointer gap-2 text-sm font-medium ">
            <ShoppingCart className="w-4 h-4 inline-block mr-2"/>
            Buy this Item</button>
    </div>
  )
}

export default ProductInteraction