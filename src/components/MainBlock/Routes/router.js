import routes from './routes.js';
import state from '../../../data/state.js';

import Profile from '../Profile/Profile';
import Massenger from "../Massenger/Massenger";
import News from "../News/News";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";
import Error from "../Error/Error.js";


const router = [
	{ path: routes[0].RouteNull, element: <Profile profilePostsData={state.profilePage.profilePostsData} /> },
	{ path: routes[0].RouteProfile, element: <Profile profilePostsData={state.profilePage.profilePostsData} /> },
	{ path: routes[0].RouteMassenger, element: <Massenger userData={state.massegPage.userData} massegData={state.massegPage.massegData} /> },
	{ path: routes[0].RouteNews, element: <News /> },
	{ path: routes[0].RouteMusic, element: <Music /> },
	{ path: routes[0].RouteSettings, element: <Settings /> },
	{ path: routes[0].RouteError, element: <Error /> },

];


export default router;
