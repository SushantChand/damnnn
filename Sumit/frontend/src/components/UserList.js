import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [hoveredRow, setHoveredRow] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the users!', error);
            });
    }, []);

    const handleMouseEnter = (index) => {
        setHoveredRow(index);
    };

    const handleMouseLeave = () => {
        setHoveredRow(null);
    };

    return (
        <div style={{
            background: 'linear-gradient(to right, #f8f1f1, #e7d4d4)',
            padding: '20px',
            borderRadius: '10px',
            maxWidth: '800px',
            margin: 'auto'
        }}>
            <h1 style={{
                textAlign: 'center',
                color: '#5a4e4e',
                fontFamily: 'Arial, sans-serif'
            }}>User List</h1>
            <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                border: '1px solid #ccc',
                marginTop: '20px',
                backgroundColor: '#faf3f3'
            }}>
                <thead>
                    <tr style={{
                        backgroundColor: '#f2e8e8',
                        color: '#5a4e4e'
                    }}>
                        <th style={{
                            padding: '12px',
                            textAlign: 'left',
                            borderBottom: '1px solid #ddd',
                            fontFamily: 'Arial, sans-serif'
                        }}>Name</th>
                        <th style={{
                            padding: '12px',
                            textAlign: 'left',
                            borderBottom: '1px solid #ddd',
                            fontFamily: 'Arial, sans-serif'
                        }}>Email</th>
                        <th style={{
                            padding: '12px',
                            textAlign: 'left',
                            borderBottom: '1px solid #ddd',
                            fontFamily: 'Arial, sans-serif'
                        }}>Phone Number</th>
                        <th style={{
                            padding: '12px',
                            textAlign: 'left',
                            borderBottom: '1px solid #ddd',
                            fontFamily: 'Arial, sans-serif'
                        }}>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr
                            key={user._id}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                borderBottom: '1px solid #ddd',
                                backgroundColor: hoveredRow === index ? '#f2e8e8' : 'transparent',
                                cursor: 'pointer'
                            }}
                        >
                            <td style={{
                                padding: '12px',
                                textAlign: 'left',
                                fontFamily: 'Arial, sans-serif'
                            }}>{user.name}</td>
                            <td style={{
                                padding: '12px',
                                textAlign: 'left',
                                fontFamily: 'Arial, sans-serif'
                            }}>{user.email}</td>
                            <td style={{
                                padding: '12px',
                                textAlign: 'left',
                                fontFamily: 'Arial, sans-serif'
                            }}>{user.phonenumber}</td>
                            <td style={{
                                padding: '12px',
                                textAlign: 'left',
                                fontFamily: 'Arial, sans-serif'
                            }}>{user.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
