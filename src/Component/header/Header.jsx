import profile from '../../assets/images/profile.png'

function Header() {
    return (
        <header className='flex justify-between items-center p-4  border-b-2 max-w-7xl mx-auto'>
            < h1 className='text-4xl font-bold' > Knowledge</h1 >
            <img src={profile} alt="" />
        </header >
    )
}

export default Header; 