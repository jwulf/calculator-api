export type MutationFn = (x: number, y?: number) => number
export type HATEOASResponse = {
    currentTotal: number,
    links: {
        rel: string,
        href: string,
        type: string
    }[]
}
export type HATEOASResponder = (x: number, y?: number) => HATEOASResponse
