import type { FC } from "react";

const Navbar: FC = () => {
    return (
        <header className="flex items-center justify-between bg-white px-6 py-4 border-b">
            <h2 className="text-2xl font-heading text-textDark">Dashboard</h2>

            <div className="flex items-center space-x-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search"
                        className="pl-3 pr-8 py-2 border border-gray300 rounded-lg text-sm text-textDark placeholder:text-textLight focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {/* Search icon could go here */}
                </div>

                <button className="bg-primary text-white px-4 py-2 rounded-lg shadow-card hover:bg-primaryDark transition">
                    Create Job
                </button>

                <div className="flex items-center space-x-2 cursor-pointer">
                    <span className="font-medium text-textDark">Las Sabir</span>
                    <img
                        src="https://i.pravatar.cc/30"
                        alt="profile"
                        className="w-8 h-8 rounded-full object-cover border border-gray300"
                    />
                </div>
            </div>
        </header>
    );
};

export default Navbar;