function Tot(props)
{
  return (props.a ==3 )? (
        <h1>you win {`${props.a}/3`}</h1>
    ):(<h1>you loose {`${props.a}/3`}</h1>)

}

export default Tot;