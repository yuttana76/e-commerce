import { SubmitHandler, useForm } from 'react-hook-form';
import { PaymentFormInputs, paymentFormSchema } from '@/types';

import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const PaymentForm = () => {

    const {register,handleSubmit,formState:{errors}} = useForm<PaymentFormInputs>({
        resolver:zodResolver(paymentFormSchema),
    });
    
    const router = useRouter();

    const handlePaymentForm:SubmitHandler<PaymentFormInputs> = (data) => {
        // console.log(data);
    }   

  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit(handlePaymentForm)} >
        {/* NAME */}
        <div className="flex flex-col gap-1">
            <label className='text-sm text-gray-500 font-medium ' htmlFor='name'>Name on card</label>
            <input 
                type='text' 
                id='cardHolder' 
                placeholder=' Enter your full name'
                {...register('cardHolder')} 
                className='border-b border-gray-200 py-2 outline-none text-sm'
            />
            {errors.cardHolder && <p className='text-red-500 text-xs '>{errors.cardHolder.message}</p>}
        </div>
        {/* cardNumber */}
        <div className="flex flex-col gap-1">
            <label className='text-sm text-gray-500 font-medium ' htmlFor='cardNumber'>Card Number</label>
            <input 
                type='text' 
                id='cardNumber' 
                placeholder=' 1234567890'
                {...register('cardNumber')} 
                className='border-b border-gray-200 py-2 outline-none text-sm'
            />
            {errors.cardNumber && <p className='text-red-500 text-xs '>{errors.cardNumber.message}</p>}
        </div>

        {/* Expiration Date */}
        <div className="flex flex-col gap-1">
            <label className='text-sm text-gray-500 font-medium ' htmlFor='expirationDate'>Expiration Date</label>
            <input 
                type='text' 
                id='expirationDate' 
                placeholder=' 01/25'
                {...register('expirationDate')} 
                className='border-b border-gray-200 py-2 outline-none text-sm'
            />
            {errors.expirationDate && <p className='text-red-500 text-xs '>{errors.expirationDate.message}</p>}
        </div>

        {/* CVV */}
        <div className="flex flex-col gap-1">
            <label className='text-sm text-gray-500 font-medium ' htmlFor='address'>CVV</label>
            <input 
                type='text' 
                id='cvv' 
                placeholder=' 123'
                {...register('cvv')} 
                className='border-b border-gray-200 py-2 outline-none text-sm'
            />
            {errors.cvv && <p className='text-red-500 text-xs '>{errors.cvv.message}</p>}
        </div>

        <div className='flex items-center gap-2 mt-4'>
          <Image src="/klarna.png" alt="klarna" width={50} height={25} className="rounded-md"/>
          <Image src="/cards.png" alt="cards" width={50} height={25} className="rounded-md"/>
          <Image src="/stripe.png" alt="stripe" width={50} height={25} className="rounded-md"/>
        </div>

        <button type='submit'
        className="w-full bg-gray-600 text-white hover:bg-gray-900 transition-all duration-300 p-2  rounded-lg cursor-pointer flex items-center justify-center gap-2  ">
            Checkout
            <ShoppingCart className="w-3 h-3"/>
        </button>
                    
    </form>
  )
}

export default PaymentForm