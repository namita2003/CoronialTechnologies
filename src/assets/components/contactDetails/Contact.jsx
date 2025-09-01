import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
import { Circles } from "react-loader-spinner";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false); // controls button
    const [loader, setLoader] = useState(false);   // controls loader below form

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);  // button shows sending...
        setLoader(true);   // show loader below form
        try {
            setLoader(true);
            axios({
                url: "/api/v1/users/sendEmail",
                method: "POST",
                data: formData,
                headers: { "Content-Type": "application/json" }
            })
                .then((res) => {
                    //Toast write for success
                    toast.success("Email sent successfully!");
                    setLoading(false);  // button back to normal
                    setLoader(false);
                })
                .catch((err) => {
                    const message = err.message;
                    const code = message.substring(message.length - 3);
                    if (code === "400") {
                        toast.error("Required Inputs")
                    } else if (code === "422") {
                        toast.error("Message Not Send")
                    } else {
                        toast.error("Message Not Send'")
                    }
                    setLoading(false);  // button back to normal
                    setLoader(false);
                })
            setFormData({
                name: "",
                email: "",
                mobile: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            console.error("Error sending message:", error);
            toast.error("Something went wrong ❌");
        }// finally {
        //     setLoading(false);  // button back to normal
        //     setLoader(false);   // hide loader
        // }
    };

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-6">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 relative inline-block group transition-transform duration-300 hover:scale-105 hover:text-indigo-600">
                    Contact Us
                    <span className="absolute left-0 -bottom-2 h-1 w-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500 group-hover:w-full"></span>
                </h2>
                <p className="mt-4 text-gray-700 italic font-serif">
                    Get in touch with us for your IT needs and requirements
                </p>
            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Left Section - Office Info */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h3 className="text-2xl font-bold text-indigo-600 mb-6">Our Office</h3>
                        <div className="space-y-4 text-gray-700 font-serif">
                            <p className="flex items-start gap-3">
                                <MapPin className="text-indigo-500" />
                                123 Tech Park, Varanasi, Uttar Pradesh, India - 221005
                            </p>
                            <p className="flex items-start gap-3 font-mono">
                                <Phone className="text-indigo-500" />
                                <span>
                                    +91 8739094997 <br />
                                    +91 8948475063 <br />
                                    +91 9026274680
                                </span>
                            </p>
                            <p className="flex items-start gap-3">
                                <Mail className="text-indigo-500" />
                                coronial.technologies@gmail.com
                            </p>
                            <p className="flex items-start gap-3">
                                <Clock className="text-indigo-500" />
                                <span>
                                    <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM <br />
                                    <strong>Saturday & Sunday:</strong> Closed
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Right Section - Contact Form */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h3 className="text-2xl font-bold text-indigo-600 mb-6">
                            Send us a Message
                        </h3>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none font-serif"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none font-serif"
                                required
                            />
                            <input
                                type="tel"
                                name="mobile"
                                placeholder="Your Mobile Number"
                                value={formData.mobile}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none font-serif"
                                required
                            />
                            <select
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none font-serif text-gray-500"
                                required
                            >
                                <option value="" className="text-gray-400" disabled>
                                    Select Subject
                                </option>
                                <option value="Website Query">Website Query</option>
                                <option value="Mobile App Query">Mobile App Query</option>
                                <option value="System Software Query">System Software Query</option>
                                <option value="Others">Others</option>
                            </select>
                            <textarea
                                rows="5"
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none font-serif"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:opacity-50"
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </form>

                        {/* Separate Loader below the form */}
                        {loader && (
                            <div className="flex justify-center mt-4">
                                <Circles
                                    height="80"
                                    width="80"
                                    color="#4fa94d"
                                    ariaLabel="circles-loading"
                                    visible={true}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
