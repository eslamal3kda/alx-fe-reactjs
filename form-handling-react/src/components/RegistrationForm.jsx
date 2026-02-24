import React, { useState } from "react";

export default function RegistrationForm() {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userData, setUserData] = useState([]);

    const handleForm = (e) => {
        e.preventDefault();
        handleUserDate();
    };
    const handleUserNameInput = (e) => {
        setUserName(e.target.value);
    };
    const handleEmailInput = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordInput = (e) => {
        setPassword(e.target.value);
    };

    const handleUserDate = () => {
        console.log(`User: ${username}`, `Email: ${email}`, `Pass: ${password}`);
        setUserData([...userData, { userEmail: email, userName: username, userPass: password }]);

        if (!username || username.length < 3) {
            alert("Username must be at least 3 characters");
            return;
        }

        const emailRegex = /\S+@\S+\.\S+/;
        if (!email || !emailRegex.test(email)) {
            alert("Please enter a valid email");
            return;
        }

        if (!password || password.length < 6) {
            alert("Password must be at least 6 characters");
            return;
        }

        setUserName("");
        setEmail("");
        setPassword("");
    };

    return (
        <div className="w-full flex justify-center items-center py-4">
            <form action="" className=" w-200 h-100 flex flex-col gap-4 p-4 " onSubmit={handleForm}>
                <div className="flex flex-col relative border-4 w-60 rounded-2xl">
                    <label htmlFor="username" className="absolute -top-4 left-2 bg-white font-bold px-1 rounded-2xl">
                        User Name
                    </label>
                    <input placeholder="Enter Your Username" type="text" name="username" id="username" className=" px-2 py-3 rounded-2xl bg-white" onChange={handleUserNameInput} value={username} />
                </div>
                <div className="flex flex-col relative border-4 w-60 rounded-2xl">
                    <label htmlFor="email" className="absolute -top-4 left-2 bg-white font-bold px-1 rounded-2xl">
                        Email
                    </label>
                    <input placeholder="Enter Your Email" type="email" name="email" id="email" className=" px-2 py-3 rounded-2xl bg-white" onChange={handleEmailInput} value={email} />
                </div>
                <div className="flex flex-col relative border-4 w-60 rounded-2xl">
                    <label htmlFor="password" className="absolute -top-4 left-2 bg-white font-bold px-1 rounded-2xl">
                        Password
                    </label>
                    <input
                        placeholder="Enter your Password"
                        type="password"
                        name="password"
                        id="password"
                        className=" px-2 py-3 rounded-2xl bg-white"
                        onChange={handlePasswordInput}
                        value={password}
                    />
                </div>
                <button type="submit" className="py-2 px-4 bg-black/80 text-white cursor-pointer w-fit rounded-2xl">
                    Send Data
                </button>
            </form>
            <table className="flex border flex-col gap-2  w-80">
                <thead className="border-b w-full">
                    <tr className="flex justify-between">
                        <th>Username</th>
                        <th>Email</th>
                        <th>Passowrd</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((e, index) => (
                        <tr key={index} className="flex justify-between not-last:border-b">
                            <td>{e.userName}</td>
                            <td>{e.userEmail}</td>
                            <td>{e.userPass}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
