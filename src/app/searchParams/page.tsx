import Link from "next/link";

export default function SearchParamsPage({params}: {
    params: {searchId: string}
}) {

    const searchId= params.searchId 

    return <div>
        Search Params

        <Link href={`searchParams/searchId?lang=en`}>English</Link>

        <Link href={`searchParams/searchId?lang=tamil`}>Tamil</Link>
        
    </div>
}