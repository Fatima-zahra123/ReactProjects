import React from "react";
import Dr from "./Dr";

function Registe(props)
{
    return(props.t==true)?(<Dr a={props.v} />):("")

}


export default  Registe;