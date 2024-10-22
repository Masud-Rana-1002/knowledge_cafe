import profaolImg from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profaolImg} alt="" />

        </div>
    );
};

export default Header;