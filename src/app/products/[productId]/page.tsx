export default function ProductId({params} : {
    params: {productId: string}
}) {

    const productID = params.productId
    return <div>
        This is about Product {productID}
    </div>
}