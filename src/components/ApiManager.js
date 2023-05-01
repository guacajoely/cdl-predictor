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