import { useEffect, useState } from "react"
import { getTeams } from "../ApiManager.js"
import "./results.css"
import { Comparison } from "./comparison.js"

export const ResultsSection = ({ checkedTeamsState, scrollToTeams, checkedTeamsSetterFunction }) => {

    const [teams, setTeams] = useState([])
    const [filteredTeams, setFiltered] = useState([])


    useEffect(() => {
        getTeams()
            .then((responseArray) => {
                setTeams(responseArray)
            })
    },
        [])

    useEffect(
        () => {

            const matchingTeams = teams.filter(team => {
                return team.id === checkedTeamsState[0] || team.id === checkedTeamsState[1]
            })

            setFiltered(matchingTeams)

        }, [checkedTeamsState, teams]
    )



    const compareTeams = () => {
        return Comparison(filteredTeams[0], filteredTeams[1])
    }

    const createTeam = (team, otherTeam, arrayIndex) => {

        const finalScore = compareTeams()

        return <div className="team--container">
            <img className={` 
            
            ${finalScore[arrayIndex] === 3 ? 'winner--image' : 'loser--image'}
            ${team.name}-image 
            results--image`}

                src={require(`../../images/${team.name}.png`)}
                alt={`${team.name} Logo`}

            />
            <table>
                <tbody className="team--table" key={`team--${team.id}`}>
                    <tr>
                        <div className={` ${finalScore[arrayIndex] === 3 ? 'winner--overall' : 'loser--overall'} `}> {finalScore[arrayIndex]} </div>
                    </tr>
                    <tr>
                        <td className="team--name">{team.name.toUpperCase()}</td>
                    </tr>
                    <tr>
                        <td className={` ${team.hp > otherTeam.hp ? 'winner' : 'loser'} `}> {team.hp} </td>
                    </tr>
                    <tr>
                        <td className={` ${team.snd > otherTeam.snd ? 'winner' : 'loser'} `}> {team.snd} </td>
                    </tr>
                    <tr>
                        <td className={` ${team.con > otherTeam.con ? 'winner' : 'loser'} `}> {team.con} </td>
                    </tr>
                    <tr>
                        <td className={` ${team.seed < otherTeam.seed ? 'winner' : 'loser'} `}> {team.seed} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    }

    const handleNewPrediction = () => {
        checkedTeamsSetterFunction([])
        scrollToTeams()
    }


    return (

        <>
            <div>

                {filteredTeams.length > 1 ?
                    <>
                        <div id="results_container" className="results--container">
                            {createTeam(filteredTeams[0], filteredTeams[1], 0)}

                            <section className="team--container">

                                <div className="results--text">VS</div>

                                <table>
                                    <tbody className="results--text--table">
                                        <tr>
                                            <td className="prediction--text">PREDICTED SCORE</td>
                                        </tr>
                                        <tr>
                                            <td>TEAM</td>
                                        </tr>
                                        <tr>
                                            <td>HARDPOINT WIN %</td>
                                        </tr>
                                        <tr>
                                            <td>SND WIN %</td>
                                        </tr>
                                        <tr>
                                            <td>CONTROL WIN %</td>
                                        </tr>
                                        <tr>
                                            <td>CURRENT SEED</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>


                            {createTeam(filteredTeams[1], filteredTeams[0], 1)}

                        </div>

                        <div className="button--container">
                            <button className="button" onClick={() => { }}> Save Prediction </button>
                            <button className="button" onClick={handleNewPrediction}> Make Another Prediction </button>
                        </div>


                    </>

                    :

                    'SELECT 2 TEAMS FOR A FACE-TO-FACE COMPARISON'
                }

            </div>



        </>)
}