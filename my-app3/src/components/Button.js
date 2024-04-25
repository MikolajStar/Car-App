function Button(props){
    const handleClick=()=>{
        window.location.href=props.url;
    }
return(
    <button onClick={handleClick}>
        {props.children}
    </button>
)
}
export default Button;