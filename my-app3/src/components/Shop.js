import cars from'../cars.js'
import '../styles/Shop.css'
function Shop(props){
return(
    <div>
        <div className="car-list">
            {cars.map(car =>(
                <div className='car-card'>
                    <img className='img' src={car.imageUrl}/>
                    <div className='car-details'>
                        {car.brand} {car.model} 
                        <div className='price'>{car.price}</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
)
}
export default Shop