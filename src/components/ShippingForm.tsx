import { SubmitHandler, useForm } from 'react-hook-form';
import { ShippingFormInputs, shippingFormSchema } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ShippingForm = ({setShippingForm}:{setShippingForm:(data:ShippingFormInputs)=>void}) => {
    const {register,handleSubmit,formState:{errors}} = useForm<ShippingFormInputs>({
        resolver:zodResolver(shippingFormSchema),
    });
    
    const router = useRouter();

    const handleShippingForm:SubmitHandler<ShippingFormInputs> = (data) => {
        // console.log(data);
        setShippingForm(data)
        router.push('/cart?step=3',{scroll:false});
    }   

  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit(handleShippingForm)} >
        {/* NAME */}
        <div className="flex flex-col gap-1">
            <label className='text-sm text-gray-500 font-medium ' htmlFor='name'>Name</label>
            <input 
                type='text' 
                id='name' 
                placeholder=' Enter your full name'
                {...register('name')} 
                className='border-b border-gray-200 py-2 outline-none text-sm'
            />
            {errors.name && <p className='text-red-500 text-xs '>{errors.name.message}</p>}
        </div>
        {/* EMAIL */}
        <div className="flex flex-col gap-1">
            <label className='text-sm text-gray-500 font-medium ' htmlFor='email'>Email</label>
            <input 
                type='email' 
                id='email' 
                placeholder=' Enter your email address'
                {...register('email')} 
                className='border-b border-gray-200 py-2 outline-none text-sm'
            />
            {errors.email && <p className='text-red-500 text-xs '>{errors.email.message}</p>}
        </div>

        {/* PHONE */}
        <div className="flex flex-col gap-1">
            <label className='text-sm text-gray-500 font-medium ' htmlFor='phone'>Phone</label>
            <input 
                type='text' 
                id='phone' 
                placeholder=' 123456'
                {...register('phone')} 
                className='border-b border-gray-200 py-2 outline-none text-sm'
            />
            {errors.phone && <p className='text-red-500 text-xs '>{errors.phone.message}</p>}
        </div>

        {/* ADDRESS */}
        <div className="flex flex-col gap-1">
            <label className='text-sm text-gray-500 font-medium ' htmlFor='address'>Address</label>
            <input 
                type='text' 
                id='address' 
                placeholder=' 123 baker street'
                {...register('address')} 
                className='border-b border-gray-200 py-2 outline-none text-sm'
            />
            {errors.address && <p className='text-red-500 text-xs '>{errors.address.message}</p>}
        </div>

        {/* CITY */}
        <div className="flex flex-col gap-1">
            <label className='text-sm text-gray-500 font-medium ' htmlFor='city'>City</label>
            <input 
                type='text' 
                id='city' 
                placeholder=' Bngkok'
                {...register('city')} 
                className='border-b border-gray-200 py-2 outline-none text-sm'
            />
            {errors.city && <p className='text-red-500 text-xs '>{errors.city.message}</p>}
        </div>

        <button type='submit'
        className="w-full bg-gray-600 text-white hover:bg-gray-900 transition-all duration-300 p-2  rounded-lg cursor-pointer flex items-center justify-center gap-2  ">
            Continue
            <ArrowRight className="w-3 h-3"/>
        </button>
                    
    </form>
  )
}

export default ShippingForm