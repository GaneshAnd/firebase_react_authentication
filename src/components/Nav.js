import React, { useState } from 'react'
import { Container, Button, Nav, Form } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';
function Navbar() {
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
        <>
            {currentUser && <Nav className=" w-100 navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><strong className="text-secondary">Expence Tracker</strong></Link>
                    <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </Button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Add Expence</Link>
                            </li>
                        </ul>
                        <Form className="d-flex">
                            <Button className="btn btn-dark  ml-2" type="button" style={{ minWidth: '80px' }} onClick={() => signOut()}>Logout</Button>
                        </Form>
                    </div>
                </div>
            </Nav>}
        </>
    )
}

export default Navbar;
