import { Link } from 'react-router-dom';
import errorPic from '../../../src/assets/Error-page-photo/Screenshot 2024-05-09 234423.png';

const Error = () => {
    return (
        <div >
          <div className='flex justify-center mt-28'>
          <img src={errorPic} alt="" />
          </div>
            <div className='flex justify-center'>
                <Link to="/"><button className='btn btn-secondary mt-10'>Go Back</button></Link>
            </div>
        </div>
    );
};

export default Error;