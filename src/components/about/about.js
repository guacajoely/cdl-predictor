import "./about.css"

export const About = () => {
    return <div className="about--container">
    <div className="about--question">What is this?</div>
    <div className="about--answer">
      A simple, interactive platform used to predict esport match outcomes based
      on previous performance
    </div>
    <br />
    <div className="about--question">What games are supported?</div>
    <div className="about--answer">
      Initially, only Call of Duty will be supported, but additional esports will
      be considered in the near future. Valorant is the most likely title to be
      added next.
    </div>
    <br />
    <div className="about--question">What's the point of this?</div>
    <div className="about--answer">
      This is primarily a personal project for me as I am new to web design and
      programming and wanted to work on something I am passionate about.
      <p>
        However, the idea was originally the result of a <a href="https://pickem.callofdutyleague.com">pickem app</a> being added to
        the official CDL site. You can predict match
        outcomes and even win prizes if you're in the top 5 or so. Whether you
        want a baseline to fill out your bracket with the favorites for each match
        (a future feature?) or you just haven't been following the league closely
        and want to check on how teams are performing, this will allow you to
        easily do so.
      </p>
    </div>
    <div className="about--question">How accurate are the predictions?</div>
    <div className="about--answer">
      The predictions will be fairly simple initially, and solely based on each
      teams win/loss rate in each of the three modes compared to that of their
      opponent. But the plan is to add additional information and filters over time
      such as:
      <ul>
        <li>the ability to filter results based on a specific map pool</li>
        <li>an indicator when a team has had a recent roster change</li>
        <li>
          additional stats (ex. first blood % in SnD or hill
          break/hold % in hardpoint)
        </li>
        <li>
          an option to include scrimmage results and/or stats from previous
          game titles in the calculations since available match data is limited, especially early in each season
        </li>
      </ul>
    </div>
  </div>
  
}