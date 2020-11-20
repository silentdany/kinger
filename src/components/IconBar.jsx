import { Button } from 'reactstrap';
import { ImCross } from 'react-icons/im';
import { BsFillHeartFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import './IconBar.css';

function IconBar() {
  return (
    <div
      className='py-4 d-flex justify-content-center iconBar'
      style={{
        bottom: '0',
        position: 'fixed',
        height: '14vh',
        width: '320px',
      }}>
      <Button className='btn-outline-light rounded-circle iconButton mt-1'>
        <ImCross color='#fe615f' size={25} />
      </Button>
      <Button className='btn-outline-light rounded-circle iconButton heartIcon'>
        <BsFillHeartFill color='#24e5a9' size={25} />
      </Button>
      <Button className='btn-outline-light rounded-circle iconButton mt-1'>
        <AiFillStar color='#20bbff' size={30} />
      </Button>
    </div>
  );
}

export default IconBar;
