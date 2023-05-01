export const getTeams = () => {
    return fetch('http://localhost:8088/teams')
    .then(response => response.json())
}

export const getPredictions = (id) => {
    return fetch(`http://localhost:8088/predictions?userId=${id}`)
    .then(response => response.json())
}