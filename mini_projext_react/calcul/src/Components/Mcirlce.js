function Mcircle(props)
{
    return(
        <div id="min" onClick={()=>{props.setv(props.v-1)}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
</svg>
        </div>
    )
}

export default Mcircle;