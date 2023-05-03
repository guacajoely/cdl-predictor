import { useState } from "react"


export const Profile = () => {

    const [formState, setFormState] = useState(false)

    const toggleForm = () => { formState ? setFormState(false) : setFormState(true)}


    return <div className="profile--container">

        {formState ? <div>EDIT PROFILE FORM</div> : <div> STATIC PROFILE </div>}

        <button onClick={toggleForm}>Click me to show form</button>
  
        </div>
  
}