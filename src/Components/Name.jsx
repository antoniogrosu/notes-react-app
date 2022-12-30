export default function Name(props){
    return(
       
            <div className="name-div" style={{animationName: "fadeIn" , animationDuration: "2.5s" , height :"30vh"}}>
                <h1 className="title" style={{marginBottom : "50px" , textAlign : "center"}}>Hi , I'm Organizeit , and you ?</h1>
                <form onSubmit={props.clicked}>
                <label>
                    <input type="text" placeholder="Your Name" onChange={props.changed} className="name-form"></input>
                    <button className="submit-name" onClick={props.dashboard}
                    style={{
                        borderColor: "transparent",
                        padding: "0px 30px",
                        borderRadius: "10px",
                        backgroundColor: "#011627",
                        color: "#FDFFFC",
                        fontSize: "1rem",
                        height: "60px",
                        cursor: "pointer",
                        transition: "0.5s ease-in-out"
                    }}
                    >Submit</button>
                </label>
                </form>
            </div>
    )
}