import routes from "./routes";
import text from "./text";

const navbar = [
	{
		TITLE: text.PAGE_TITLES.HOME,
		REF: routes.HOME
	},
	{
		TITLE: text.PAGE_TITLES.TIMELINE,
		REF: routes.TIMELINE
	},
	{
		TITLE: text.PAGE_TITLES.PROJECTS,
		REF: routes.PROJECT.BASE
	}
];

export default navbar;