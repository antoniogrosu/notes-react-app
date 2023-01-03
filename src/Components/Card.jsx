import Dashboard from "./Dashboard"
import { BsFillTrashFill } from "react-icons/bs";
import { BsCheckSquareFill } from "react-icons/bs";


export default function Card(props){
    return props.activities.map((activity) => (
        <div  key={activity.id} className="card" style={{display : "flex" , justifyContent : "space-between" ,alignItems : "center", backgroundColor : "rgba(231, 29 , 54 ,0.25)" , borderRadius : "10px" , marginTop : "20px" , animationName : "fadeIn" , animationDuration : "1.5s"}}>
            <h2>{activity.text}</h2> 
            <div className="acitvity-buttons">
                <BsCheckSquareFill onClick={ () => props.clicked(activity.id)} style={{fontSize:"24px", marginRight : "10px" , cursor : "pointer" , color : "#011627"}} />
                <BsFillTrashFill   onClick={ () => props.delete(activity.id)} style={{fontSize:"24" , cursor : "pointer" , color :"#011627"}} />
            </div>
        </div>
    ))
}