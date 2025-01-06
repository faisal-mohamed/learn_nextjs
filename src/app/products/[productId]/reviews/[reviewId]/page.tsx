

export default function ReviewPageId({params} : {
    params: {reviewId: string, productId: string}
}) {

    const productId = params.productId
    const reviewId = params.reviewId
    return <div>
        Review Page for Product {productId} and review is {reviewId}
    </div>
}