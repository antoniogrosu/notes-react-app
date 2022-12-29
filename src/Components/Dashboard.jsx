import { useState } from 'react'
import ActivityForm from './ActivityForm'
import Card from './Card'

export default function Dashboard(props){

    //on/off form state
    const [form , setForm] = useState(false)

    //trigger function
    function triggerForm(){
        setForm(form => !form)
    }

    const [current , setCurrent] = useState("")

    function updateCurrent(){
        setCurrent( current => event.target.value)
    }

    return(
        <div className="dashboard" style={ {marginTop: "30px", position : "relative"} }>
            <div className="text-div">
                <h1 className="title" style={{marginBottom : "100px" , fontSize : "1.75rem"}}>
                    Hi, {props.name} !</h1><br></br><h1 className="title"
                style={{fontSize: "1.75rem"}}>What are your plans for today ?</h1>
                <p className="text" style={ {marginTop : "25px"}}>
                    Tell me everything  you want and I’ll make sure to remember it for you !
                </p>
            </div>
            <div className="cards-div">
                <div className="activities">
                    <div className="add-activity-div" style={{display : "flex", alignItems : "center" , justifyContent : "space-between"}}>
                        <h3 style={{fontFamily : "Source Sans Pro",color:"#011627"}}>
                            ACTIVITIES
                        </h3>
                        <button className="add-activity" onClick={triggerForm}>+</button>
                    </div>
                    {form && <ActivityForm />}
                    <div className="activities-cards">
                    </div>
                </div>
                <div className="today-did">
                    <h3 style={{fontFamily : "Source Sans Pro",color:"#011627"}}>
                        TODAY I DID
                    </h3>
                </div>
            </div>
        </div>
        

    )
}