const TestimonialItem = (props) => {
    const rating = [];    
    for(let i=0;i<Math.floor(props.rating);i++){
        rating.push(<span key={props.id+"_"+i}  id={props.id+"_"+i} className="material-symbols-outlined">star</span>)
    }
    if(props.rating>Math.floor(props.rating)){
        rating.push(<span key={props.id+"_"+props.rating} className="material-symbols-outlined">star_half</span>)
    }
    
    return (
        <div className="post">
            <div className="stars">                
                {rating}
            </div>
            <div className="profile">
                <img src={props.image} alt="Andy" />
                <span>Andy</span>
            </div>
            <span className="comment">{props.comment}</span>
        </div>
    )
};
export default TestimonialItem;    