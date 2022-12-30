import Dashboard from "./Dashboard"

export default function Card(props){
    return props.activities.map((activity) => (
        <div key={activity.id} className="card" style={{display : "flex" , justifyContent : "space-between" ,alignItems : "center", backgroundColor : "#2EC4B6" , borderRadius : "10px" , marginTop : "20px" , animationName : "fadeIn" , animationDuration : "1.5s"}}>
            <h2>{activity.text}</h2> 
            <div className="acitvity-buttons">
                <button className="x-button">X</button>
            </div>
        </div>
    ))
}