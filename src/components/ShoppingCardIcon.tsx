"use client"

import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

const ShoppingCardIcon = () => {
  return (
        <Link href="/cart" className='relative'>
            <ShoppingCart className='w-4 h-4 text-gray-600' />
            <span className='absolute -top-2 -right-2 bg-amber-400 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center'>3</span>
        
        </Link>
  )
}

export default ShoppingCardIcon