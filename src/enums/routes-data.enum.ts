import { RouteData } from "../interfaces/routes.interface";

export enum AppRoutes {
    HOME = "",
    ERROR = "error",
    EXPERIENCE = "experience",
    EDUCATION = "education",
    PROJECTS = "projects",
    ACHIEVEMENTS = "achievements",
    CONTACT = "Contact",
}

export const RoutesData: RouteData[] = [
    {
        routeLinkText: "Home",
        routeURLName: AppRoutes.HOME,
        isVisible: true,
    },
    {
        routeLinkText: "Projects",
        routeURLName: AppRoutes.PROJECTS,
        isVisible: true,
    },
    {
        routeLinkText: "Experience",
        routeURLName: AppRoutes.EXPERIENCE,
        isVisible: true,
    },
    {
        routeLinkText: "Education",
        routeURLName: AppRoutes.EDUCATION,
        isVisible: true,
    },
    {
        routeLinkText: "Achievements",
        routeURLName: AppRoutes.ACHIEVEMENTS,
        isVisible: true,
    },
    {
        routeLinkText: "Contact",
        routeURLName: AppRoutes.CONTACT,
        isVisible: true,
        isExternalLink: false // This tells Angular to stay inside the app
    },
    {
        routeLinkText: "Error",
        routeURLName: AppRoutes.ERROR,
        isVisible: false,
    },
]