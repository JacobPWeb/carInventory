export type CarsList = {
    [brand: string]: {
        model: string
        year: number
        engineSize: string
    }[]
}

export type CarDetails = {
    model: string
    year: number
    engineSize: string
    brand: string
}
