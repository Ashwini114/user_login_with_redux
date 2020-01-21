import React, { Component } from "react"
import { Table  } from 'react-bootstrap';
import { Redirect } from "react-router-dom";

class Dashboard extends Component{
    constructor(props)
    {
        super(props);
       
        
    }
    render()
    {
        /** User list  */
        const user_details = this.props.users.map((user,index)=>{
            return(
                <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.phoneNo}</td>
                </tr>
            )
        })
        /* Redirects to login page if user is not logged in */
        if (this.props.login_status == false) {
            return <Redirect to='/'/>;
        }
        else
        {
            return(
                <div>
                    <h1>User Details</h1>
                <div>
                  <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                       {user_details}
    
                    </tbody>
                    </Table>
                </div>
                </div>
            )
        }

    }
}

export default Dashboard