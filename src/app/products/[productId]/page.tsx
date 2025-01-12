

export function generateMetadata({params}: {
    params: {productId: string}
}) {
    return {
        title: `Product ${params.productId}`,
        description :  `Descriptions for Product ${params.productId}`
    }
}

export default function ProductId({params} : {
    params: {productId: string}
}) {

    const productID = params.productId

    
    return <div>
        This is about Product {productID}

      
    </div>
}