import { CgChevronDown } from "react-icons/cg";
import { IoNotificationsOutline, IoPersonOutline, IoSearchOutline, IoSettingsOutline, IoShareSocialOutline } from "react-icons/io5";
const Navbar = () => {
    return (
        <div className="md:w-[calc(100%-230px)] w-[calc(100%-60px)] fixed flex items-center justify-between pl-2 pr-6 h-[70px] top-0 md:left-[230px] left-[60px] border-b border-slate-300 bg-[#fff]">
            <div className="flex items-center gap-4 cursor-pointer ">
                <IoPersonOutline
                    color="#fb923c"
                    size={22}

                />
                <span className="text-orange-400 font-semibold md:text-lg text-sm whitespace-nowrap">
                    Board Name
                </span>
                <CgChevronDown
                    color={"#fb923c"}
                    width={"16px"}
                    height={"16px"}
                />


            </div>
            <div className="flex items-center gap-2 md:w-[800px] w-[800px] bg-gray-100 rounded-lg px-3 py-[10px]">
                <IoSearchOutline color={"#999"}  size={22}/>
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full bg-gray-100 outline-none text-[15px]"
                />
            </div>
            <div className="flex items-center gap-4">
                <div className="grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer">
                    <IoShareSocialOutline color="#444" size={22}/>
                </div>
                <div className="grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer">
                    <IoSettingsOutline color="#444" size={22}/>
                </div>
                <div className="grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer">
                    <IoNotificationsOutline color="#444" size={22}/>
                </div>
                
            </div>
            
        </div>
        
    );
};

export default Navbar;
