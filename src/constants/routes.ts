import {Detail} from "@pages/Detail";
import {Home} from "@pages/Home";
import {Favorites} from "@pages/Favorites";

const DETAIL = "/detail/:id"
const HOME = "/"
const FAVORITES = "favorites"

export const routes = [
    {path:HOME,component:Home},
    {path:DETAIL,component:Detail},
    {path:FAVORITES,component:Favorites}
]