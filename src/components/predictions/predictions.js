import { useEffect, useState } from "react"
import { getPredictions, getTeams } from "../ApiManager.js"
import './predictions.css'

export const PredictionHistory = () => {

    const [predictions, setPredictions] = useState([])
    const [teams, setTeams] = useState([])

    useEffect(() => {
        getTeams()
            .then((responseArray) => {
                setTeams(responseArray)
            })
    },
        [])

    const localUser = localStorage.getItem("current_user")
    const userObject = JSON.parse(localUser)
    const userId = parseInt(userObject.id)

    useEffect(() => {
        getPredictions(userId)
            .then((responseArray) => {
                setPredictions(responseArray)
            })
    },
        [userId])

    console.log(predictions)
    console.log(teams)


    return <>

        <div className="predictions--container">

                {predictions?.map(prediction => {

                    const team1 = teams.find(team => team.id === prediction.team1)
                    const team2 = teams.find(team => team.id === prediction.team2)

                    return <div className="prediction--card" key={`prediction--${prediction.id}`}>
                    
                        <div className="prediction--team1">{team1?.fullName}</div>
                        <div className="prediction--score">{prediction?.score[0]}-{prediction.score[1]}</div>
                        <div className="prediction--team2">{team2?.fullName}</div>
                    
                    </div>

                })}

        </div>
    </>
}