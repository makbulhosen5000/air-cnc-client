// add rooms data from server
export const addRoom = async roomData =>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`,{
        method:'POST',
        headers:{
            'content-type':'application/json',
        },
        body:JSON.stringify(roomData),
    })
    const data = await response.json();
    return data;
}

// get rooms data from server
export const getAllRooms = async() =>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`)
    const data = await response.json();
    return data;
}

// get single room from server
export const getRoom = async id =>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/room/${id}`)
    const data = await response.json();
    return data;
}