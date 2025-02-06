const Card=({image , title , description , buttonTxt})=>{
    return(
        <div>
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p>{description}</p>
            <button>{buttonTxt}</button>
        </div>
    );
}
export default Card;