import {Actions, Bold, Heading, Image, Location, Search} from './header.styles.ts';

const Header = () => {
  return (
        <Heading>
            <Image><img src="assets/logo.png"/></Image>
            <Location>
                ic
                <div>
                    Delivery to location<br/><Bold>Updating Location</Bold>
                </div>
            </Location>
            <Search>
                ic
                <input type='text'/>
            </Search>
            <Actions>
                <div>
                    ic 
                    <Bold>EN</Bold>
                    ic
                </div>
                <div className="login">
                    Hello, <span id='user'>sign in</span><br/>
                    <Bold>Accounts & Lists</Bold>ic
                </div>
                <div className="orders">
                    <span>Returns</span><br/>
                    <Bold>& Orders</Bold>ic
                </div>
                <div className="cart">
                    <span>ic</span>
                    <Bold>Cart</Bold>
                </div>
            </Actions>
        </Heading>
  )
}

export default Header