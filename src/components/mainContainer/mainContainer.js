import { useState } from "react"
import { TeamSection } from "../teams/teams.js"
import { ResultsSection } from "../results/results.js"

export const MainContainer = () => {

    const [checkedTeams, setCheckedTeams] = useState([])

    return <>
        <div className="home--container">

            <div className="teams--header">WHO'S PLAYING?</div>
            {<TeamSection checkedTeamsState={checkedTeams}
                checkedTeamsSetterFunction={setCheckedTeams} />}

            <div className="results--header">RESULTS</div>
            {<ResultsSection checkedTeamsState={checkedTeams} />}

            <div className="history--header">PREVIOUS PREDICTIONS</div>
            {<>PREDICTION HISTORY GO HERE</>}

        </div>
    </>
}