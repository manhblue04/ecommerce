import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/users/HomePage";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/users/theme/MasterLayout";
import ProfilePage from "./pages/users/ProfilePage";

const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage />
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: <ProfilePage />
        },
    ]

    return (
        <MasterLayout>
            <Routes>
                {
                    userRouters.map((item, key) => (<Route key={key} path={item.path} element={item.component} />))
                }
            </Routes>
        </MasterLayout>
    )
}

function RouterCustom() {
    return renderUserRouter();
}

export default RouterCustom;