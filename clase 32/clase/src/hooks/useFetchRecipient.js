import { useEffect, useState } from "react"
import axios from "axios"

export const useFetchRecipient = (chat, user) => {
    const [recipient, setRecipient] = useState(null)
    const [error, setError] = useState(null)

    const recipientId = chat?.members.find((id) => id !== user?.id)

    useEffect(() => {
        const getUser = async () => {
            if(!recipientId) return null;
            await axios.get(`http://localhost:3002/users/find/${recipientId}`)
            .then(res => setRecipient(res.data))
            .catch(error => setError(error.message))
        }
        getUser()
    }, [recipientId])

    return {recipient}
}