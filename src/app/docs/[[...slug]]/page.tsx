export default function DocsPage({params}: {
    params: {slug: string[]}
}) {


    const slug = params.slug

    if(slug?.length == 1) {
        return <div>
            <h1>Docs Page for feaature {slug[0]}</h1>
        </div>
    } else if(slug?.length == 2) {
        return <div>
            <h1>Docs Page for feaature {slug[0]} and concept {slug[1]}</h1>
        </div>
    }
    else if(slug?.length == 3) {
        return <div>
            <h1>Docs Page for feaature {slug[0]} and concept {slug[1]} and example {slug[2]}</h1>
        </div>
    }
    return <div>
        <h1>Docs Page</h1>
    </div>
}