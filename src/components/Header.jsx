const Header = () => {
    return (
        <>
            <header className="bg-orange-100 fixed top-0 left-0 right-0 z-20 flex flex-col sm:flex-row items-center w-full justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] px-5 sm:px-10 py-3">
                <div className="flex items-center gap-4 text-[#111418]">
                    <div className="size-7">
                        <svg
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                    <h2 className="text-[#111418] text-lg sm:text-2xl font-bold leading-tight tracking-[-0.015em]">
                        Software Engineer
                    </h2>
                </div>
                <div className="flex flex-1 justify-between sm:justify-end mt-2 sm:mt-0 gap-8">
                    <div className="flex items-center gap-4 sm:gap-9">
                        {['About', 'Skills', 'Projects', 'Contact Me'].map((item) => (
                            <a
                                key={item}
                                className="text-[#111418] text-sm font-medium leading-normal hover:text-orange-600 transition duration-300"
                                href={`#${item.toLowerCase().replace(' ', '')}`}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                    <div className="relative">
                        <div className="bg-[#14044c] text-white flex items-center justify-center rounded-full h-10 w-10 ">
                            <div className="profile">
                                <img
                                    src="https://scontent.fjrs27-1.fna.fbcdn.net/v/t39.30808-6/453404087_2314834042185022_5378942058235007424_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=XSMz9Bh8ha0Q7kNvgHuSrO9&_nc_ht=scontent.fjrs27-1.fna&oh=00_AYB9VFN3bMVOAlwOCEqj-wgpdCWENIv8ruWsPHTYsqD6YA&oe=66F61E4A"
                                    alt="Profile"
                                    className="rounded-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
