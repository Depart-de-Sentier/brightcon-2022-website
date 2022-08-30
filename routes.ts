interface Route {
    label: string
    url: string
}

export interface RouteGroup {
    name: string
    routes: Route[]
}

const routes = [
    {
        name: 'Get involved',
        routes: [
            {
                label: "calls",
                url: "/calls"
            },
            {
                label: "sponsors",
                url: "/sponsors"
            },
        ]
    },
    {
        name: 'Programme',
        routes: [
            {
                label: "whatsnewin2022",
                url: "/whatsnewin2022"
            },
            {
                label: "programme",
                url: "/programme"
            },
            {
                label: "speakers",
                url: "/speakers"
            },
        ]
    },
    {
        name: 'Participate',
        routes: [
            {
                label: "register",
                url: "/register"
            },
            {
                label: "venue",
                url: "/venue"
            },
        ]
    },
    {
        name: 'Legal',
        routes: [
            {
                label: "code-of-conduct",
                url: "/code-of-conduct"
            },
            {
                label: "legal",
                url: "/legal"
            },
        ]
    },
] as RouteGroup[]

export default routes
