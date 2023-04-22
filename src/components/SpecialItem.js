const SpecialItem = (props) => {    
    return (
        <div className="item">
            <img src={require(`./../images/${props.image}`)} alt={props.name} />
            <div className="titlePrice">
                <h4>{props.name}</h4>
                <span>{props.price}</span>
            </div>
            <p className="itemDesc">{props.description}</p>
            <div className="orderDeliveryContent">
                <a href="" className="itemOrderDelivery">Order a delivery</a>
                <span className="deliveryScooter material-symbols-outlined">electric_moped</span>
            </div>
        </div>  
    )
};
export default SpecialItem;    