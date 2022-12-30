import Dashboard from "./Dashboard";
export default function DoneActivities(props){
    return props.activities.map((activity) => (
        <div key={activity.id} className="card" style={{display : "flex" , justifyContent : "space-between" ,alignItems : "center", backgroundColor : "rgba(46 , 196 , 182 , 0.25)" , borderRadius : "10px" , marginTop : "20px" , animationName : "fadeIn" , animationDuration : "1.5s"}}>
            <h2>{activity.text}</h2> 
        </div>
    ))
}