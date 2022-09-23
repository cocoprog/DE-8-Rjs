
const Item = ({title, price, image, category}) =>{
    return(
        <div>
            <img width={'200px'} src={image} alt={title} />            
            <div>
                <h2>{title}</h2>
                <h3>{price}</h3>
                <h3>{category}</h3>
            </div>
        </div>)
};

export default Item