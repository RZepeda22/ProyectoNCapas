

function Notification({isError, message}){
    const handleNotificationColor = () => {
        if(!isError){
            return "fixed bottom-4 left-[37%] rounded-lg h-8 w-96 bg-blue-400 flex items-center"
        } else{
            return "fixed bottom-4 left-[37%] rounded-lg h-8 w-96 bg-red-400 flex items-center"
        }
    }
    return(
        <>
        <div className={handleNotificationColor()}>
            <b className="text-center w-full">{message}</b>
        </div>
        </>
    )
}

export default Notification;