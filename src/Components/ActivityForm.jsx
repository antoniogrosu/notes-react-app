import { useState } from "react"

export default function ActivityForm(props){
    
    //state of the input
    const [input , setInput] = useState("")

    //update everytime it changes function
    function handleChange(event){
        setInput(input => event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault();
        props.onSubmit({
            id : Math.floor(Math.random()*1000),
            text : input
        })

        setInput("")
    }
    return(
        <div className="activity-setter" style={{animationName : "fadeIn" , animationDuration : ".5s"}}>
            <form onSubmit={handleSubmit}>
                <label style={{width : "100%"}}>
                    <input type = "text" placeholder="set the activity title" name="text" value={input} className="activity-title-input" onChange={handleChange}></input>
                </label>
                <div className="activity-difficulty-div" style={{width : "100%" , marginTop : "20px"}}>
                    <button className="difficulty-button red" >!</button>
                    <button className="difficulty-button yellow" >~</button>
                    <button className="difficulty-button green" >...</button>
                </div>
                <button className="submit-form" onSubmit={handleSubmit}>Done</button>
            </form>
        </div>
    )
}