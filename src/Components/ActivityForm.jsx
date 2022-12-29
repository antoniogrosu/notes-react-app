export default function ActivityForm(props){
    return(
        <div className="activity-setter">
            <label style={{width : "100%"}}>
                <input type = "text" placeholder="set the activity title" className="activity-title-input" onChange={props.changed}></input>
            </label>
            <div className="acitvity-difficulty-div" style={{width : "100%" , marginTop : "50px"}}>
                <button className="difficulty-button" style={{backgroundColor : "rgba(231 , 29 , 54 , 0.65"}}>HIGH</button>
                <button className="difficulty-button" style={{backgroundColor : "rgba(255 , 159 , 28 , 0.65"}} >MODERATE</button>
                <button className="difficulty-button" style={{backgroundColor : "rgba(46 , 196 , 182 , 0.65"}} >SLIGHT</button>
            </div>
            <button
                style={{backgroundColor : "transparent" , border : "3px rgba(1, 22, 39, 1) solid" ,padding : "10px 30px" , borderRadius : "10px" , fontFamily : "Source Sans Pro" , fontSize : "1.2rem" , marginTop : "50px" , cursor : "pointer"}}
            >Done</button>
        </div>
    )
}