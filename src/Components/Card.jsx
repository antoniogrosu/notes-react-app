import Dashboard from "./Dashboard"

export default function Card(props){
    return props.activities.map((activity) => (
        <div onClick={ () => props.clicked(activity.id)} key={activity.id} className="card" style={{display : "flex" , justifyContent : "space-between" ,alignItems : "center", backgroundColor : "rgba(231, 29 , 54 ,0.25)" , borderRadius : "10px" , marginTop : "20px" , animationName : "fadeIn" , animationDuration : "1.5s"}}>
            <h2>{activity.text}</h2> 
            <div className="acitvity-buttons">
                <button className="x-button" onClick={ () => props.delete(activity.id)}>X</button>
            </div>
        </div>
    ))
}