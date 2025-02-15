import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    // Define state for email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
   

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation for empty fields
        if (!email || !password) {
            setError("Email and Password are required");
            return;
        }

        try {
            // Sending a POST request to the login API
            const response = await axios.post('http://localhost:5010/auth/login', {
                email,
                password
            }, { withCredentials: true }); // Ensure cookies are sent with the request

            // Handle success (e.g., redirect or show message)
            console.log(response.data);
            // Optionally redirect to a different page on success
            // window.location.href = '/dashboard'; // Example

        } catch (err) {
            console.error('Login Error:', err);
            setError("Invalid credentials, please try again.");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Show error message */}

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;

