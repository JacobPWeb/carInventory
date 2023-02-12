type Props = {
    showModal: boolean
    onModalClose: () => void
    title: string
    Content: (...args: any[]) => React.ReactElement
}
export const Modal = ({ showModal, onModalClose, title, Content }: Props) => {
    if (!showModal) {
        return <></>
    }

    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-20 outline-none focus:outline-none">
                <div className="relative w-[600px] max-w-full my-6 mx-auto">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">{title}</h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={onModalClose}
                            >
                                <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>
                        <Content onClose={onModalClose} />
                    </div>
                </div>
            </div>
            <div
                className="opacity-25 fixed inset-0 z-10 bg-black"
                onClick={onModalClose}
            ></div>
        </>
    )
}
