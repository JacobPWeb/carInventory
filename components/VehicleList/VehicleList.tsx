import { ApplicationState } from '@/state/applicationState'
import { useContext } from 'react'
import { Modal } from '../Modal'
import { useVehicleList } from './useVehicleList'
import { VehicleListDetails } from './VehicleListDetails'

export const VehicleList = () => {
    const { cars } = useContext(ApplicationState)
    const { displayVehicle, details, onModalClose, showModal } =
        useVehicleList()

    if (!cars) {
        return <></>
    }

    const tableHeaderClassName =
        'border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider px-6 py-4 text-left'

    const carToDisplay = details && cars?.[details?.brand]?.[details?.key]

    return (
        <>
            <div className="flex flex-col gap-10">
                {Object.keys(cars).map((brand, index) => {
                    return (
                        <div key={index}>
                            <h3 className="py-3 px-3 font-semibold text-gray-600 uppercase">
                                {brand}
                            </h3>
                            <table className="min-w-full">
                                <thead className="border-b">
                                    <tr>
                                        <th
                                            scope="col"
                                            className={tableHeaderClassName}
                                        >
                                            Model
                                        </th>
                                        <th
                                            scope="col"
                                            className={tableHeaderClassName}
                                        >
                                            Year
                                        </th>
                                        <th
                                            scope="col"
                                            className={tableHeaderClassName}
                                        >
                                            Engine size
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cars[brand].map(
                                        ({ engineSize, model, year }, key) => (
                                            <tr
                                                key={key}
                                                className="bg-white border-b hover:bg-slate-100 hover:cursor-pointer"
                                                onClick={() =>
                                                    displayVehicle(brand, key)
                                                }
                                            >
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    {model}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {year}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {engineSize}
                                                </td>
                                            </tr>
                                        )
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )
                })}
            </div>
            {carToDisplay && details && (
                <Modal
                    title="Vehicle details"
                    showModal={showModal}
                    onModalClose={onModalClose}
                    Content={() => (
                        <VehicleListDetails
                            year={carToDisplay?.year}
                            model={carToDisplay?.model}
                            brand={details.brand}
                            engineSize={carToDisplay?.engineSize}
                        />
                    )}
                ></Modal>
            )}
        </>
    )
}
