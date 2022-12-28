import { AnimationOnScroll } from "react-animation-on-scroll"

export default function Name(props){
    return(
        <div className="name-div">
            <h1 className="title" style={{marginBottom : "50px"}}>How should I call you ?</h1>
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
                    marginLeft: "20px",
                    cursor: "pointer",
                    transition: "0.5s ease-in-out",
                }}
                >Submit</button>
            </label>
        </div>
    )
}