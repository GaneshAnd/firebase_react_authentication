import React, { useState } from 'react'
import { Form, Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext';
import { Link, History, useHistory } from 'react-router-dom'

function ForgetPassword() {
    var [signUpObj, setSignUpObj] = useState({
        email: '',
    })

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const History = useHistory('')
    var { reSetPassword } = useAuth()
    const [message, setMessage] = useState('')
    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('')
            setLoading(true)
            await reSetPassword(signUpObj.email)
            setMessage('Email has been sent')
        }
        catch {
            setError('Failed to send email')
        }

        finally {
            setLoading(false)
        }

    }

    function handleChange(event) {
        setSignUpObj({ ...signUpObj, [event.target.name]: event.target.value })
        // console.log(event.target.value)
    }

    return (
        <div className="w-100 d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>

            <div className="w-100 p-2" style={{ maxWidth: '400px' }}>
                <Card>
                    <h2 className="text-primary text-center mt-2 mb-2">Forget Password</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form className="p-4" onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" name="email" onChange={(event) => handleChange(event)} required />
                        </Form.Group>
                        <Button type="submit" disabled={loading} className="w-100">Continue</Button>
                        <div className="w-100 text-center mt-2">
                            Alredy have an account <Link to="/login">Login</Link>
                        </div>
                    </Form>

                </Card>
                <div className="w-100 text-center mt-2">
                    Don't have an acoount ? <Link to="/signUp">Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword;
