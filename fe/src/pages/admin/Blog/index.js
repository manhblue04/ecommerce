import { Outlet } from "react-router-dom";

function Blog(){
    return(
        <>
            <h1>Trang tin tuc</h1>
            <Outlet/>
        </>
    )
}
export default Blog;