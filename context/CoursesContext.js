
import React, { createContext, useState, useEffect, useContext } from 'react';
import { isAxiosError } from 'axios';
import { getCourses } from '@/api/course';
import { sendChat } from '@/api/chat';

// Create the context
const CoursesContext = createContext();

// Create the provider component
export const DashboardProvider = ({ children }) => {
    const [activeCourse, setActiveCourse] = useState('')
    const [chats, setChats] = useState([])
    const [activeChat, setActiveChat] = useState({})
    const [courses, setCourses] = useState({
        list: [],
        loading: false,
        error: null,
    })

    const [userMessage, setUserMessage] = useState('')

    const sendUserMessage = async (custom) => {
        if(!activeChat.messages) return;
        let data = {
            role: 'user',
            content: custom || userMessage,
            date: (new Date())

        }

        if(custom.length > 1){
            data.content = custom
        } else if(userMessage.length > 1){
            data.content = userMessage
        } else {
            return
        }

        setActiveChat({...activeChat, messages: [...activeChat.messages, data]})


        try {
            let filteredMessages = activeChat.messages.map(message => {
                return {
                    role: message.role,
                    content: message.content
                }
            })
            
            let  {data} = await sendChat(filteredMessages)
            console.log(data, filteredMessages);
            setActiveChat({...activeChat, messages: [...activeChat.messages, data.choices[0].message]})
        } catch(error){
            console.log(error)
        }

        

        

        
        
    }

    // Function to fetch data
    const fetchCourses = async () => {
        setCourses(prevState => ({...prevState, loading: true}))
        try {
            let {data} = await getCourses();
            setCourses(prevState => ({...prevState, list: data.courses}))
        } catch(error) {
            if (isAxiosError(error)) {
              if (error.response) {
                const { data, status } = error.response;
                if (status === 401 || status === 400 || status === 404) {
                    setCourses(prevState => ({...prevState, error: data.error}))
                }
              }
            }
        }
        setCourses(prevState => ({...prevState, loading: false}))
    };

    const addNewCourse = (data) => {
        setCourses(prevState => ({...prevState, list: [data,...prevState.list]}))
    }

    const removeCourse = (id) => {
        setCourses(prevState => ({...prevState, list: prevState.list.filter((course) => course._id !== id)}))
    }


    useEffect(() => {
        fetchCourses();
    }, []);

    useEffect(() => {
        if(activeCourse){
            let filteredCourses = courses.list.filter(course => course._id === activeCourse)
            setChats(filteredCourses[0].chats)
            setActiveChat({})
            if(filteredCourses[0].chats.length < 1 || !activeChat){
                // add a temporary new chat
                const newChat = {title: "New Chat", course: activeCourse, messages: [], updatedAt: (new Date().toISOString()), type: 'new', _id: Date.now()}
                setChats([newChat])
                setActiveChat(newChat)
            } else {
                setActiveChat(filteredCourses[0].chats[0])
            }
        }
    }, [activeCourse])

    return (
        <CoursesContext.Provider value={{ courses, fetchCourses, addNewCourse, activeCourse, setActiveCourse, removeCourse, chats, activeChat, setActiveChat, setChats, userMessage, setUserMessage, sendUserMessage }}>
            {children}
        </CoursesContext.Provider>
    );
};

export const useCourses = () => useContext(CoursesContext);