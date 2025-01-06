import { notFound } from "next/navigation"

export default function ReviewPageId({params} : {
    params: {reviewId: string, productId: string}
}) {

    const productId = params.productId
    const reviewId = params.reviewId

    if( parseInt(reviewId) > 1000) {
        notFound();
    }
    return <div>
        Review Page for Product {productId} and review is {reviewId}
    </div>
}