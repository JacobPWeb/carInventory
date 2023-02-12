import { Modal } from '../Modal'
import { useNav } from './useNav'

export const Nav = () => {
    const { onModalClose, onModalOpenVehicle, showModal, modalContent } =
        useNav()

    return (
        <>
            <div className="flex flex-row gap-10 p-5">
                <a
                    className="underline font-mono cursor-pointer"
                    onClick={onModalOpenVehicle}
                >
                    Add vehicle
                </a>
            </div>
            <Modal
                onModalClose={onModalClose}
                showModal={showModal}
                title={modalContent.title}
                Content={modalContent.content}
            />
        </>
    )
}
