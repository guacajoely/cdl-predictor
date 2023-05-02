import './sources.css'

export const Sources = () => {
    return <div className='sources--section'>

    <div className="sources--header">STAT SOURCES</div>
    <div className="sources--container">
        <a className="source--link" href="https://docs.google.com/spreadsheets/d/1qndGa3Y3xC719rBPcJSbreh2GoNTdpnyJgJFS4EM3zY/edit#gid=0">IOU Turtle</a>
        <p className="source--desc">
        This is by far my most used source. IOU Turtle has been updating these very detailed spreadsheets and sharing them with the competitive community for the past 4 years.
        </p>
        <br />

        <a className="source--link" href="https://cod-esports.fandom.com/wiki/Call_of_Duty_League/2023_Season">cod-esports Fandom</a>
        <p className="source--desc">
        I use the CoD esports wiki as a secondary source and to confirm/validate most data
        </p>
        <br />

        <div className="sources">
            <a className="source--link" href="https://breakingpoint.gg/team-stats/2023/">BreakingPoint.gg</a> 
            &nbsp;and <br></br> the&nbsp;
            <a className="source--link" href="https://callofdutyleague.com/en-us/standings?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general&%3Fseason%3D2023=regular-season">official CDL site</a>
        
        
        </div>
        <p className="source--desc">
        are both good references and backup sources for specific info
        </p>
        <br />

    

    </div>
  </div>
  
}