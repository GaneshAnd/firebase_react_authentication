import React, { useState, } from 'react'
import { Card, Button, Alert, Container, Table, Form } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext';
import { useHistory } from 'react-router-dom'
function Home() {
    const { logout, currentUser } = useAuth()
    const [error, setError] = useState('')
    const History = useHistory('')
    async function signOut() {
        try {
            setError('')
            await logout()
            History.push('/login')
        } catch {
            setError('failed to logout')
        }
    }
    return (
        <div className="w-100 d-flex  justify-content-center" style={{ minHeight: '100vh' }}>
            <div className="w-100 p-2" style={{ maxWidth: '90%' }}>
                <Form className="form-inline w-100 mt-3 row d-flex justify-content-between">
                        <Form.Control className="form-control mr-sm-2 col-md-10 ml-3" type="search" placeholder="Search" aria-label="Search" />
                        <Button className="btn btn-primary" type="submit" style={{minWidth:'130px',marginRight:'-10px'}}>Search</Button>
                </Form>
                <table className="table table-hover mt-4">
                    <thead className="table-primary">
                        <tr>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home;
