import { useEffect, useState } from "react"
import { getTeams } from "../ApiManager.js"
import "./results.css"

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

    const createTeam = (team) => {
        return <div className="team--container">
            <img className={` 
            
            ${team.name}-image 
            results--image`}

                src={require(`../../images/${team.name}.png`)}
                alt={`${team.name}Logo`}

            />
            <table>
                <tbody className="team--table" key={`team--${team.id}`}>
                    <tr>
                        <td>{team.name}</td>
                    </tr>
                    <tr>
                        <td>{team.hp}</td>
                    </tr>
                    <tr>
                        <td>{team.snd}</td>
                    </tr>
                    <tr>
                        <td>{team.con}</td>
                    </tr>
                    <tr>
                        <td>{team.seed}</td>
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
            <div id="results_container" className="results--container">

                {filteredTeams.length > 1 ?
                    <>
                        {createTeam(filteredTeams[0])}

                        <section className="team--container">

                            <div className="results--text">VS</div>

                            <table>
                                <tbody className="results--text--table">
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


                        {createTeam(filteredTeams[1])}
                    </>








                    :
                    ''
                }

            </div>


            <button className="button" 
                    onClick={handleNewPrediction}>
                            Make Another Prediction
                        </button>

        </>)
}