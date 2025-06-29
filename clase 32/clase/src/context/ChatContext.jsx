import { createContext, createRef, useEffect, useState } from "react";
import axios from "axios"
import {io} from "socket.io-client"

export const ChatContext = createContext();

export const ChatContextProvider = ({children, user}) => {

    const [userChats, setUserChats] = useState(null)

    useEffect(() =>{
        const getUserChats = async () => {
            if(user?.id){
                await axios.get(`http://localhost:3002/chats/${user?.id}`)
                .then(res => {
                    setUserChats(res.data)
                })
                .catch(error => {})
            }
        }
        getUserChats()
    }, [user])

    const [availableNewChats, setAvailableNewChats] = useState([])
    const [allUsers, setAllUsers] = useState([])

     useEffect(() =>{
        const getAvNewChats = async () => {
            await axios.get(`http://localhost:3002/users`)
            .then(res => {
                let avChats = res.data.filter((u) => {
                    //pepe
                    let isCreated = false;
                    if (user.id === u._id) return false;
                    if(userChats){
                        isCreated = userChats.some((chat) => {
                            return chat.members[0] === u._id || chat.members[1] === u._id
                        })
                    }
                    return !isCreated;
                })
                setAvailableNewChats(avChats)
                setAllUsers(res.data)
            })
            .catch(error => {})
        }
        getAvNewChats()
    }, [userChats])

    const createChat = async (firstId, secondId) => {
        let body = {
            firstId,
            secondId
        }
        await axios.post(`http://localhost:3002/chats`, body)
                .then(res => {
                    setUserChats((prev) => [...prev, res.data])
                })
                .catch(error => {})
    }

    const [currentChat, setCurrentChat] = useState(null);

    const updateCurrentChat = (chat)=> {
        setCurrentChat(chat)
    }

    const [messages, setMessages] = useState(null)

    useEffect(() => {
        const getMessages = async () => {
        await axios.get(`http://localhost:3002/messages/${currentChat?._id}`)
                        .then(res => {
                            setMessages(res.data)
                        })
                        .catch(error => {})
        }
        getMessages()
    }, [currentChat])

    const [newMessage, setNewMessage] = useState(null)

    const sendTextMessage = async ({textMessage, user, currentChat, setTextMessage}) => {
        let body = {
            chatId: currentChat._id,
            senderId: user.id,
            text: textMessage
        }
        await axios.post(`http://localhost:3002/messages`, body)
                .then(res => {
                    setMessages((prev) => [...prev, res.data])
                    setNewMessage(res.data)
                    setTextMessage("")
                })
                .catch(error => {})
    }

    const [socket, setSocket] = useState(null)

    useEffect(()=> {
        const newSocket = io("http://localhost:4000")
        setSocket(newSocket)

        return () => {
            newSocket.disconnect()
        }
    }, [user])

    const [onlineUsers, setOnlineUsers] = useState([])

    useEffect(()=> {
        if(socket === null) return;
        socket.emit("addNewUser", user?.id)
        socket.on("getOnlineUsers", (res) => {
            setOnlineUsers(res)
        })
    }, [socket])

    useEffect(()=> {
        if(socket === null) return;
        const recipientId = currentChat?.members.find((id) => id !== user?.id)
        socket.emit("sendMessage", {...newMessage, recipientId})
    }, [newMessage])

    const [notifications, setNotifications] = useState([])

    useEffect(()=> {
         if(socket === null) return;
         socket.on("getMessage", res => {
            const isChatOpen = currentChat?._id === res.chatId;
            if(isChatOpen){
                setMessages((prev) => [...prev, res])
            }
            // else{
            //     setNotifications((prev) => [res, ...prev])
            // }
         })

         socket.on("getNotification", res => {
            const isChatOpen = currentChat?._id === res.chatId;
            if(isChatOpen){
                setNotifications((prev) =>[{...res, isRead: true}, ...prev])
            }else{
                setNotifications((prev) => [res, ...prev])
            }
         })

         return () => {
            socket.off("getMessage")
            socket.off("getNotification")
         }

    }, [socket, currentChat])

    const markAllAsRead = (n) => {
        const notifs = n. map(n => {
            return {...n, isRead: true}
        })
        setNotifications(notifs)
    }

    const markAsRead = ((n, userChats, user, notifications)=> {
        const isChat = userChats.find((chat) => {
            const chatMembers = [user._id, n.senderId]
            const isChat = chat.members.every((member) => {
                return chatMembers.includes(member)
            })
            return isChat;
        })
        const markNotifications = notifications.map((m) => {
            if(n.secondId === m.secondId){
                return {...n, isRead: true}
            }else{
                return m;
            }
        })
        setNotifications(markNotifications)
        updateCurrentChat(isChat)
    })

    return (
        <ChatContext.Provider value={{
            userChats, availableNewChats, createChat, allUsers,currentChat, updateCurrentChat, messages, sendTextMessage, onlineUsers, notifications, allUsers, markAllAsRead, markAsRead
        }}>
            {children}
        </ChatContext.Provider>
    )
}