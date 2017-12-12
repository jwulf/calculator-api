export const RouteConfig: RouteObject = [
    {
        rel: 'add',
        href: '/add',
        fn: (x, y = 0) => x + y
    },
    {
        rel: 'subtract',
        href: '/subtract',
        fn: (x, y = 0) => x - y
    },
    {
        rel: 'multiply',
        href: '/multiply',
        fn: (x, y = 1) => x * y
    },
    {
        rel: 'divide',
        href: '/divide',
        fn: (x, y = 1) => x / y
    }
]