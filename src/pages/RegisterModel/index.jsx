import React, { useState } from 'react';

const RegisterModel = ({ isOpen, onClose }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleRegister = async () => {
        setError('');
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            setError('Please fill in all fields.');
            return;
        }
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        const response = await fetch('http://localhost:3000/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName, lastName, email, password })
        });
        const data = await response.json();
        if (!response.ok) {
            setError(data.message || 'Failed to register. Please try again.');
            return;
        }
        console.log('User registered:', data);
        onClose();
    };

    if (!isOpen) return null;
    console.log(isOpen,"IS OPEN")

    return (
        <div style={{
            position: 'fixed',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            overflow: 'auto'
        }}>
            <div style={{
                backgroundColor: '#fff',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                width: '90%',
                maxWidth: '500px',
                zIndex: 1001,
                overflowY: 'auto'
            }}>
                <button className="clos" onClick={onClose} aria-label="Close">
                    &times;
                </button>
                <h2>Register</h2>
                <input type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
                <input type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                <button type="button" onClick={handleRegister}>Register</button>
                {error && <div className="error-message">{error}</div>}
            </div>
        </div>
    );
};

export default RegisterModel;
