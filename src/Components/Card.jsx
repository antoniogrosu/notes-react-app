export default function Card(props){
    return(
        <div className="card" style={{display : "flex" , justifyContent : "space-between" ,alignItems : "center", backgroundColor : "green" , borderRadius : "10px" , marginTop : "20px"}}>
            <h2>{props.property}</h2>
            <div className="acitvity-buttons">
                <button className="tick-button"><p className="tick">L</p></button>
                <button className="x-button" style={{marginLeft : "10px"}}>X</button>
            </div>
        </div>
    )
}