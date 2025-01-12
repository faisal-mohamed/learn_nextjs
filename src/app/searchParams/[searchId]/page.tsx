import Link from "next/link";

export default async  function searchId({params, searchParams}: {
    params: {searchId: string},
    searchParams: {lang: string}
}) {

    const searchId = params.searchId;
    const lang =  searchParams.lang

    return <div>
        Search ID Page {searchId}
        Lang is {lang};

        <br />
        <Link href={`/searchParams/${searchId}?lang=tamil`}>Tamil</Link>
        
        <Link href={`/searchParams/${searchId}?lang=en`}>English</Link>
    </div>
}