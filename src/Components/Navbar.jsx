import logo from '/logo.png'

export default function Navbar(){
    return(
    <nav style={{display : "flex" , alignItems : "center" , position : "fixed" , width : "100%" , top: "0" , marginBottom : "40px" , zIndex : "2"}}>
        <img src={logo} />
        <h2>organizeit</h2>
    </nav>
    )
}