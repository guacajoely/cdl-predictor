import { useRef, useState } from "react"
import { TeamSection } from "../teams/teams.js"
import { ResultsSection } from "../results/results.js"
import { PredictionHistory } from "../predictions/predictions.js"

export const MainContainer = () => {

    const [checkedTeams, setCheckedTeams] = useState([])

    const teamsRef = useRef(null);
    const resultsRef = useRef(null);

    const scrollToTeams = () => teamsRef.current.scrollIntoView();
    const scrollToResults = () => {
        resultsRef.current.scrollIntoView();
    }

    const localUser = localStorage.getItem("current_user")
    const userObject = JSON.parse(localUser)

    return <>
        <div className="home--container">

            <div className="teams--header" ref={teamsRef} >WHO'S PLAYING?</div>
            {<TeamSection checkedTeamsState={checkedTeams}
                checkedTeamsSetterFunction={setCheckedTeams}
                scrollToResults={scrollToResults}
            />}

            <div ref={resultsRef} className="results--header">RESULTS</div>
            {<ResultsSection checkedTeamsState={checkedTeams} 
                checkedTeamsSetterFunction={setCheckedTeams}
                scrollToTeams={scrollToTeams}
            />}

            <div className="history--header">PREVIOUS PREDICTIONS</div>
            { userObject ? <PredictionHistory/> : <>Please login to save predictions</>}

        </div>
    </>
}