import React, { Component } from 'react';
import axios from 'axios';
import './UserList.css'; // Optional: Add custom CSS for styling

class UserList extends Component {
    state = {
        users: [], // Holds user data
    };

    // Fetch data when the component mounts
    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=10')
            .then((response) => {
                const users = response.data.results;
                this.setState({ users });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    render() {
        return (
            <div className="container mt-4">
                <h1 className="text-center mb-4">User List</h1>
                {this.state.users.map((user, index) => (
                    <div key={index} className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img
                                    src={user.picture.large}
                                    className="card-img"
                                    alt={`${user.name.first} ${user.name.last}`}
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {`${user.name.title} ${user.name.first} ${user.name.last}`}
                                    </h5>
                                    <p className="card-text">
                                        <strong>Gender:</strong> {user.gender.toUpperCase()}<br />
                                        <strong>Time Zone:</strong> {user.location.timezone.description}<br />
                                        <strong>Address:</strong> {`${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country} - ${user.location.postcode}`}<br />
                                        <strong>Email:</strong> {user.email}<br />
                                        <strong>Birth Date:</strong> {new Date(user.dob.date).toLocaleString()} ({user.dob.age} years)<br />
                                        <strong>Register Date:</strong> {new Date(user.registered.date).toLocaleString()}<br />
                                        <strong>Phone:</strong> {user.phone}<br />
                                        <strong>Cell:</strong> {user.cell}
                                    </p>
                                    <button className="btn btn-primary">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default UserList;
