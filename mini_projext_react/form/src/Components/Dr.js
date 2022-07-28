
function Dr(props)
{
    return(props.a.firstName !="" && props.a.lastName !="" && props.a.email!="")?
    (<div>Successful , thank you for regestering</div>):("")
}

export default Dr;