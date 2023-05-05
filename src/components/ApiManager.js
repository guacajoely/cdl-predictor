export const getTeams = () => {
  return fetch('https://cdl-predictor-api-huee9.ondigitalocean.app/teams')
    .then(response => response.json())
}

export const getUserById = (id) => {
  return fetch(`https://cdl-predictor-api-huee9.ondigitalocean.app/users/${id}`)
    .then(response => response.json())
}

export const getUserByEmail = (email) => {
  return fetch(`https://cdl-predictor-api-huee9.ondigitalocean.app/users?email=${email}`)
    .then(res => res.json())
}

export const createUser = (userObject) => {
  return fetch("https://cdl-predictor-api-huee9.ondigitalocean.app/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userObject)
  })
    .then(res => res.json())
}

export const editUser = (userObject) => {
  return fetch(`https://cdl-predictor-api-huee9.ondigitalocean.app/users/${userObject.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userObject)

  })
    .then(response => response.json())
}

export const getPredictions = (id) => {
  return fetch(`https://cdl-predictor-api-huee9.ondigitalocean.app/predictions?userId=${id}`)
    .then(response => response.json())
}

export const createPrediction = (userId, team1id, team2id, score) => {
  return fetch(`https://cdl-predictor-api-huee9.ondigitalocean.app/predictions`, {
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
  return fetch(`https://cdl-predictor-api-huee9.ondigitalocean.app/predictions/${id}`, {
    method: "DELETE"
  })
}