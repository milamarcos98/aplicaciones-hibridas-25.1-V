import React, { useState, useEffect } from 'react'
import axios from "axios"
import useDebounce from '../../hooks/useDebounce'

const Home = () => {
    const [projects, setProjects] = useState([])
    const [projectName, setProjectName] = useState("")
    const [projectDescription, setProjectDescription] = useState("")
    const [search, setSearch] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const debouncedSearch = useDebounce(search, 1000)

    const fetchProjects = async () => {
        try{
            const res = await axios.get("http://localhost:3002/projects");
            setProjects(res.data)
        }catch(err){
            console.error(err)
        }
    }

    useEffect(() => {
        fetchProjects()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newProject = {
            name: projectName,
            description: projectDescription,
            owner: {
                userId: "user",
                username: "user"
            }
        }
        try{
            // axios
            await axios.post("http://localhost:3002/projects", newProject);
            setProjectName("")
            setProjectDescription("")
            fetchProjects()
        }catch(err){
            console.error(err)
        }
    }

    const handleSearch = async (searchTerm) => {
        try{
            const res = await axios.get("http://localhost:3002/projects/search", {
                params: {name: searchTerm}
            });
            setProjects(res.data)
            setSuggestions([])
        }catch(err){
            console.error(err)
        }
    }

    useEffect(() => {
        if(debouncedSearch){
            // fetch
            fetchSuggestions(debouncedSearch)
        }else{
            setSuggestions([])
        }
    }, [debouncedSearch])

    const fetchSuggestions = async (searchTeam) => {
        try{
            const res = await axios.get("http://localhost:3002/projects/search", {
                params: {name: searchTeam}
            });
            setSuggestions(res.data)
        }catch(err){
            console.error(err)
        }
    }

    const handleSearchChange = async (e) => {
        const value = e.target.value;
        setSearch(value)

        // if(value){
        //     try{
        //     const res = await axios.get("http://localhost:3002/projects/search", {
        //         params: {name: value}
        //     });
        //     setSuggestions(res.data)
        // }catch(err){
        //     console.error(err)
        // }
        // }else{
        //     setSuggestions([])
        // }
    }
  return (
    <div>
        <h1>Projects</h1>
        {/* form create */}
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Project Name' value={projectName} onChange={(e) => setProjectName(e.target.value)} />
            <input type="text" placeholder='Project Description' value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)} />
            <button type='submit'>Add Project</button>
        </form>

        {/* form search */}
        <form onSubmit={(e) => {e.preventDefault(); handleSearch(search)}}>
            <input type="text" placeholder='search by name' value={search} onChange={handleSearchChange} />
            <button type='submit'>Search</button>
            {
                suggestions.length > 0 && (
                    <ul className='autocomplete-suggestions'>
                        {
                            suggestions.map((suggestion) => (
                                <li key={suggestion._id}>{suggestion.name}</li>
                            ))
                        }
                    </ul>
                )
            }
        </form>

        {/* projects */}
            <ul>
                {
                    projects.map(project => (
                        <li key={project._id}>{project.name}</li>
                    ))
                }
            </ul>
        
    </div>
  )
}

export default Home