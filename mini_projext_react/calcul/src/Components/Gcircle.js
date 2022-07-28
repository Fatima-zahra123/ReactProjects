
function Gcircle(props)


{

    const stl ={backgroundColor :"rgba(0, 0, 139, 0.795)"};
    const stl1 = {backgroundColor:"red"};
    
    return (props.val>=16)?(
        <div className="affichage" style={stl1}>

            <h2>{`${props.val} °C`}</h2>


        </div>

    ):(<div className="affichage" style={stl}>

    <h2>{`${props.val} °C`}</h2>


</div>)
}

export default Gcircle;