export default function Loading() {

    return (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
            <div className="text-2xl text-white">Loading...</div>
        </div>
    )
}