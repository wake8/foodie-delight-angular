export type Restaurent = {
    name: string,
    description: string,
    location: string,
    type: Food,
    id: number
}
export type Food = "veg" | "non-veg";