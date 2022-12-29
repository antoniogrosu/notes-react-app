export default function ActivityForm(props){
    return(
        <div className="activity-setter">
            <label style={{width : "100%"}}>
                <input type = "text" placeholder="set the activity title" className="activity-title-input" onChange={props.changed}></input>
            </label>
            <div className="activity-difficulty-div" style={{width : "100%" , marginTop : "20px"}}>
                <button className="difficulty-button red" >HIGH</button>
                <button className="difficulty-button yellow" >MODERATE</button>
                <button className="difficulty-button green" >SLIGHT</button>
            </div>
            <button className="submit-form">Done</button>
        </div>
    )
}