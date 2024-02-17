import globe from '../images/globe.png';

export function Navbar() {
    return (
        <nav>
            <img className='nav_icon' src={globe} alt=''></img>
            <h3>My Travel Journal</h3>
        </nav>
    )
};
