import nub_logo from './../../public/image/nubcc_logo.png';
import banner1 from './../../public/image/banner1.jpg';

const Header = () => {
  return (
    <div className='header-container'>
      <div className="logo p-4">
        <img src={nub_logo} alt="" width={150} />
      </div>
      <div className="banner w-70">
        <img src={banner1} alt="" width="100%" />
      </div>
    </div>
  );
}

export default Header;