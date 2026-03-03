import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails"
import ProfileSettings from "./ProfileSettings";
import Navbar from "./navbar";

function Profile() {
    return (
        <div>
            <Navbar />
            <h2 className="text-2xl font-bold mb-4">Profile Page</h2>
            <ul className="flex flex-col gap-8 ">
                <li><Link to="/profile/details">Details</Link></li>
                <li><Link to="/profile/settings">Settings</Link></li>
            </ul>
            
            

            <Routes>
                <Route path="details" element={<ProfileDetails />} />
                <Route path="settings" element={<ProfileSettings />} />
            </Routes>
        </div>
    );
}

export default Profile;
