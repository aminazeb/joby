import type { FC } from "react";
import { Home, Users, Briefcase, Layers } from "lucide-react";

const Sidebar: FC = () => {
    return (
        <aside className="w-20 bg-white h-screen border-r flex flex-col items-center py-6 space-y-8">
            <div className="flex flex-col items-center space-y-6">
                <Home className="w-6 h-6 text-gray300 hover:text-primary cursor-pointer" />
                <Users className="w-6 h-6 text-gray300 hover:text-primary cursor-pointer" />
                <Briefcase className="w-6 h-6 text-primary cursor-pointer" />
                <Layers className="w-6 h-6 text-gray300 hover:text-primary cursor-pointer" />
            </div>
        </aside>
    );
};

export default Sidebar;
