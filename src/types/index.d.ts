declare type MutationFn = (x: number, y?: number) => number
declare type HATEOASResponse = {
    currentTotal: number,
    links: {
        rel: string,
        href: string,
        type: string
    }[]
}
declare type HATEOASResponder = (x: number, y?: number) => HATEOASResponse
declare type RouteObject = {
    href: string,
    rel: string,
    fn: (x: number, y?: number) => number
 }[]