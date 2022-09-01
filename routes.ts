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
                label: "Calls",
                url: "/calls"
            },
            {
                label: "Become a Sponsor",
                url: "/sponsors"
            },
        ]
    },
    {
        name: 'This year',
        routes: [
            {
                label: "Programme",
                url: "/programme"
            },
            {
                label: "Whats new in 2022",
                url: "/whats-new-in-2022"
            },
            {
                label: "Speakers",
                url: "/speakers"
            },
            {
                label: "Awards",
                url: "/awards"
            },
        ]
    },
    {
        name: 'Participate',
        routes: [
            {
                label: "Register",
                url: "/register"
            },
            {
                label: "Venue",
                url: "/venue"
            },
        ]
    },
    {
        name: 'Hackathon',
        routes: [
            {
                label: "Details",
                url: "/hackathon"
            },
        ]
    },
    {
        name: 'Contest',
        routes: [
            {
                label: "Call for contest",
                url: "/call-for-contest"
            },
            {
                label: "Results",
                url: "/contest-results"
            },
        ]
    },
    {
        name: 'Legal',
        routes: [
            {
                label: "Code of conduct",
                url: "/code-of-conduct"
            },
            {
                label: "Legal",
                url: "/legal"
            },
        ]
    },
] as RouteGroup[]

export default routes
