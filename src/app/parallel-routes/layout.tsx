
export default function Layout({children, main, sidebar}) {



    return <div>
        {children} 
        {sidebar}
        {main}
    </div>
}