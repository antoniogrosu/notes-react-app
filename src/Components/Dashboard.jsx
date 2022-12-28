export default function Dashboard(props){
    return(
        <div className="dashboard" style={ {marginTop: "30px",padding: "0px 100px"} }>
            <div className="text-div">
                <h1 className="title" style={{marginBottom : "100px" , fontSize : "1.75rem"}}>Hi, {props.name} !</h1><br></br><h1 className="title"
                    style={{fontSize: "1.75rem"}}>What are your plans for today ?</h1>
                <p className="text" style={ {marginTop : "25px"}}>Tell me everything  you want and I’ll make sure to remember it for you !</p>
            </div>
            <div className="cards-div"
                style={{marginTop: "90px",display : "flex",alignItems : "center",justifyContent : "space-between"}}>
                <div className="activities">Activities</div>
                <div className="today-did">Today I did</div>
            </div>
        </div>

    )
}