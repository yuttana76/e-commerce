"use client"

import useCartStore from '@/stores/cartStore'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

const ShoppingCardIcon = () => {
  const {cart,hasHydrated} = useCartStore()
  if(!hasHydrated){
    return null;
  }
  return (
        <Link href="/cart" className='relative'>
            <ShoppingCart className='w-4 h-4 text-gray-600' />
            <span className='absolute -top-2 -right-2 bg-amber-400 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center'>
              {cart.reduce((acc,item)=>acc+item.quantity,0)}</span>
        
        </Link>
  )
}

export default ShoppingCardIcon