import logo from '../logo.svg';
import '../styles/Header.css'
import Button from './Button.js'
import cars from'../cars.js'
function Header(props) {
  const brands=[...new Set(cars.map(car=>car.brand))];
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <div>
          {props.title}
        </div>
        <div className='header-container'>
          {brands.map(brand =>(
            <Button key={brand} url={`https://www.${brand.toLowerCase()}.pl/`}>  
      
              {brand}
            </Button>
          ))}
          
        </div>
      </header>
    );
  }
  
  
  export default Header;