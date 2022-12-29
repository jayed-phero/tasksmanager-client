export const completeTask = async task => {
    // delete  task._id
    const res = await fetch(`${process.env.REACT_APP_API_URL}/completetask/${task?._id}`, {
        method: 'PUT',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({ ...task, role: 'completed'}),
    })
    const data = await res.json()

    return data
}