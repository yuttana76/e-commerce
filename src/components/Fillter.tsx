"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Fillter = () => {

    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const handleFilter = (value: string) => {
    
        //Get the current search params
        const params = new URLSearchParams(searchParams);

        //If the value is "all", remove the category param
        params.set("sort", value);
        
        //Else, set the category param to the selected value
        router.push(`${pathname}?${params.toString()}`,{scroll: false});
    };

  return (
    <div className="flex items-center justify-end gap-2 text-sm text-gray-500 mb-6">
        <span>Sort by:</span>
        <select name='sort' id="sort" className="ring-1 ring-gray shadow-md rounded-sm p-1"
            onChange={(e) => handleFilter(e.target.value)}
        >
            <option value="newest">Newest</option>
            <option value="Oldest">Oldest</option>
            <option value="ast">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
        </select>
    </div>
  )
}

export default Fillter