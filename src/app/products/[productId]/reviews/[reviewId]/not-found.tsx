//Can't able to pass params in Not  Found Page but can be done using usePathName hook

//since the usePathName is hook and it works only in cliennt component we need to specify it


'use client';

import { usePathname } from "next/navigation"
export default function ReviewsNotFound() {

    const productId = usePathname().split("/")[2]
    const reviewId = usePathname().split("/")[4]

    return <div>
        <h1>Reviews not found for Product {productId} and review {reviewId}</h1>
    </div>
}