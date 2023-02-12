import { useApi } from '@/hooks/useApi'
import { ApplicationState } from '@/state/applicationState'
import { useCallback, useContext, useState } from 'react'
import { useForm } from 'react-hook-form'

type FormValues = {
    brand: string
    model: string
    year: number
    engineSize: number
}

type VehicleSummary = Omit<FormValues, 'engineSize'> & {
    engineSize: string
}

type Props = {
    onClose: () => void
}

export const useAddVehicleModal = ({ onClose }: Props) => {
    const [showSummary, setShowSummary] = useState(false)
    const [summary, setSummary] = useState<VehicleSummary>()
    const { storeCar } = useApi()

    const { brands } = useContext(ApplicationState)

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<FormValues>({
        mode: 'onTouched',
        defaultValues: {
            brand: '',
            model: '',
            year: undefined,
            engineSize: undefined,
        },
    })

    const capitalise = useCallback((word: string) => {
        return `${word.charAt(0).toUpperCase()}${word.slice(1)}`
    }, [])

    const onSubmit = useCallback((data: FormValues) => {
        const parsedInputs = {
            brand: capitalise(`${data.brand}`),
            model: capitalise(`${data.model}`),
            year: data.year,
            engineSize: `${data.engineSize}cc`,
        }

        setSummary(parsedInputs)
        setShowSummary(true)
    }, [])

    const saveVehicle = useCallback(() => {
        if (!summary) {
            return
        }
        storeCar({
            ...summary,
        })
        onClose()
    }, [storeCar, summary])

    return {
        showSummary,
        onSubmit,
        handleSubmit,
        register,
        summary,
        errors,
        saveVehicle,
        brands,
    }
}
