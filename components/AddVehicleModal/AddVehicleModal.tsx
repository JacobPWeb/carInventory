import { useAddVehicleModal } from './useAddVehicleModal'
import c from 'classnames'

type Props = {
    onClose: () => void
}

export const AddVehicleModal = ({ onClose }: Props) => {
    const {
        handleSubmit,
        onSubmit,
        showSummary,
        register,
        summary,
        errors,
        saveVehicle,
        brands,
    } = useAddVehicleModal({ onClose })

    const inputClassName =
        'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
    const labelClassName = 'block text-gray-700 text-sm font-bold mb-2'
    const buttonClassName =
        'font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'

    if (showSummary) {
        return (
            <div className="w-full px-5 pt-2 pb-5">
                <div className="pb-5">
                    <h2 className="mb-5">
                        You're adding the following vehicle:
                    </h2>
                    <div className="grid grid-cols-2 gap-y-1">
                        <h4 className="font-bold">Brand: </h4>
                        <p>{summary?.brand}</p>
                        <h4 className="font-bold">Model: </h4>
                        <p>{summary?.model}</p>
                        <h4 className="font-bold">Year: </h4>
                        <p>{summary?.year}</p>
                        <h4 className="font-bold">Engine size: </h4>
                        <p>{summary?.engineSize}</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-10">
                    <button
                        className={`${buttonClassName} text-white bg-blue-500 hover:bg-blue-700`}
                        type="submit"
                        onClick={saveVehicle}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        )
    }

    const errorsKeys = Object.keys(errors)

    return (
        <div className="w-full">
            <form
                className="px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
            >
                <div className="mb-4">
                    <label className={labelClassName} htmlFor="brand">
                        Brand
                    </label>
                    <select
                        className={c(inputClassName, {
                            'border-red-500': !!errors.brand,
                        })}
                        id="username"
                        required
                        {...register('brand', { required: true })}
                    >
                        {brands?.map((brand, index) => (
                            <option key={index} value={brand}>
                                {brand}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-6">
                    <label className={labelClassName} htmlFor="model">
                        Model
                    </label>
                    <input
                        className={c(inputClassName, {
                            'border-red-500': !!errors.model,
                        })}
                        id="model"
                        type="text"
                        required
                        {...register('model', { required: true })}
                    />
                </div>
                <div className="mb-6">
                    <label className={labelClassName} htmlFor="year">
                        Year
                    </label>
                    <input
                        className={c(inputClassName, {
                            'border-red-500': !!errors.year,
                        })}
                        id="year"
                        type="number"
                        required
                        {...register('year', { required: true })}
                    />
                </div>
                <div className="mb-6">
                    <label className={labelClassName} htmlFor="engineSize">
                        Engine size
                    </label>
                    <input
                        className={c(inputClassName, {
                            'border-red-500': !!errors.engineSize,
                        })}
                        id="engineSize"
                        type="number"
                        required
                        {...register('engineSize', { required: true })}
                    />
                </div>
                {!!errorsKeys.length && (
                    <div className=" text-red-500">
                        {errorsKeys.map((error, index) => (
                            <span className="capitalize">
                                {error}
                                {index !== errorsKeys.length - 1 && ', '}
                            </span>
                        ))}{' '}
                        is required
                    </div>
                )}
                <div className="flex items-center justify-center gap-10">
                    <button
                        className={`${buttonClassName} text-white bg-blue-500 hover:bg-blue-700`}
                        type="submit"
                    >
                        Add vehicle
                    </button>
                </div>
            </form>
        </div>
    )
}
