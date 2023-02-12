import { cars } from '../../cars'

//pretend this is a database :)
let localCars = cars

export default function handler(req: any, res: any) {
    const { method } = req
    switch (method) {
        case 'POST':
            const { brand, model, year, engineSize } = req.body
            const currentBrandVehicles =
                localCars[brand as keyof typeof localCars] || []

            /// database put would here
            const newData = {
                ...localCars,
                [brand]: [
                    ...currentBrandVehicles,
                    {
                        model,
                        year,
                        engineSize,
                    },
                ],
            }

            localCars = newData

            res.status(200).json(newData)
            break
        case 'GET':
            res.status(200).json(localCars)
            break
        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
            break
    }
}
