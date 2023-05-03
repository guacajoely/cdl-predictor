export const getTeams = () => {
  return fetch('http://localhost:8088/teams')
    .then(response => response.json())
}

export const getPredictions = (id) => {
  return fetch(`http://localhost:8088/predictions?userId=${id}`)
    .then(response => response.json())
}

export const createPrediction = (userId, team1id, team2id, score) => {
  return fetch(`http://localhost:8088/predictions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      userId: +userId,
      team1: +team1id,
      team2: +team2id,
      score: score
    })

  })
    .then(response => response.json())
}

export const deletePrediction = (id) => {
  return fetch(`http://localhost:8088/predictions/${id}`, {
    method: "DELETE"
  })
}

export const getUserById = (id) => {
  return fetch(`http://localhost:8088/users/${id}`)
    .then(response => response.json())
}

export const editUser = (userObject) => {
  return fetch(`http://localhost:8088/users/${userObject.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userObject)

  })
    .then(response => response.json())
}