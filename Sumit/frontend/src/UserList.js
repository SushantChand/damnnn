import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the users!', error);
            });
    }, []);

    return (
        <div>
            <h1 style={{ textAlign: 'center', color: 'blue' }}>User List</h1>
            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd', marginTop: '20px' }}>
                <thead>
                    <tr style={{ backgroundColor: '#f2f2f2' }}>
                        <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Name</th>
                        <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Email</th>
                        <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Phone Number</th>
                        <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id} style={{ borderBottom: '1px solid #ddd' }}>
                            <td style={{ padding: '12px', textAlign: 'left' }}>{user.name}</td>
                            <td style={{ padding: '12px', textAlign: 'left' }}>{user.email}</td>
                            <td style={{ padding: '12px', textAlign: 'left' }}>{user.phonenumber}</td>
                            <td style={{ padding: '12px', textAlign: 'left' }}>{user.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
