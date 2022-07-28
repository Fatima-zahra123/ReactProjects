function Msg(props)
{
    return(props.c!="")?(
        <div className="msg"> 
            {props.c}
        </div>
    ):("")

}


export default Msg;