export const getTeams = () => {
    return fetch('http://localhost:8088/teams')
    .then(response => response.json())
}