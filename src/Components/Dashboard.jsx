import { useEffect, useState } from 'react'
import ActivityForm from './ActivityForm'
import Card from './Card'

export default function Dashboard(props){

    //on/off form state
    const [form , setForm] = useState(false)

    //trigger function
    function triggerForm(){
        setForm(form => !form)
    }

    //state for the activities
    const [activities , setActivities] = useState(JSON.parse(localStorage.getItem("activities")) || [])

    //add an activity function
    function addActivity(activity){
        //new array using the ... operator
        const newActivities = [activity , ...activities];

        setActivities(newActivities)
        setForm(prev => !prev)
    }
    //new array to make map through it in the card component
    let cards=[...activities]
    
    //save everything whenever the activities array is changed
    useEffect(() =>{
        localStorage.setItem("activities" , JSON.stringify(activities))
    },[activities])

    //refresh day function
    function refreshDay(){
        setActivities([])
    }
    return(
        <div className="dashboard" style={ {marginTop: "120px", position : "relative"} }>
            <div className="text-div" style={{animationName: "fadeIn" , animationDuration: "1.5s"}}>
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
                        <button className="add-activity" onClick={triggerForm} style={{border : "0"}}>+</button>
                    </div>
                    {form && <ActivityForm  onSubmit={addActivity}/>}
                    <div className="activities-cards">
                        <Card activities={cards}/>
                    </div>
                </div>
                <div className="today-did">
                    <h3 style={{fontFamily : "Source Sans Pro",color:"#011627"}}>
                        TODAY I DID
                    </h3>
                </div>
            </div>
            <button onClick={refreshDay} style={{ padding : "10px 30px" , marginTop: "50px" , borderRadius:"10px" , backgroundColor:"transparent" , fontFamily : "Poppins" , fontSize : "1rem" , color : "rgb(1, 22, 39)" , border: "3px rgb(1, 22, 39) solid" , cursor : "pointer"  }}>Clear all activities</button>
        </div>
        

    )
}