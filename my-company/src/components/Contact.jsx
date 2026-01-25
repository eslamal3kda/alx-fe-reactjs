import React, { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted!");
    };
    return (
        <div style={{ padding: "20px", minHeight: "75vh" }}>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} style={{ display: "block", margin: "10px 0" }} />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} style={{ display: "block", margin: "10px 0" }} />
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} style={{ display: "block", margin: "10px 0" }} />
                <button type="submit">Send Message</button>
            </form>
            <table style={{ width: "500px", minHeight: "150px" }}>
                <thead>
                    <tr>
                        <th style={{ border: "0.5px solid" }}>Name</th>
                        <th style={{ border: "0.5px solid" }}>Email</th>
                        <th style={{ border: "0.5px solid" }}>Your Message</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ border: "0.5px solid" }}>{formData.name}</td>
                        <td style={{ border: "0.5px solid" }}>{formData.email}</td>
                        <td style={{ border: "0.5px solid" }}>{formData.message}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
