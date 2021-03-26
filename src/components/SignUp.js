import React, { useState } from 'react'
import { Form, Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext';
import { Link, useHistory } from 'react-router-dom'
function SignUp() {
    var [signUpObj, setSignUpObj] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const History = useHistory('')
    var { signup } = useAuth()

    async function handleSubmit(e) {
        e.preventDefault();

        if (signUpObj.password !== signUpObj.confirmPassword) {
            return setError('Password do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(signUpObj.email, signUpObj.password)
            History.push('/')
        }
        catch {
            setError('Failed to create account')
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
                    <h2 className="text-primary text-center mt-2 mb-2">Sign Up</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form className="p-4" onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" name="email" onChange={(event) => handleChange(event)} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" onChange={(event) => handleChange(event)} required />
                        </Form.Group>
                        <Form.Group id="confirmPassword">
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control type="password" name="confirmPassword" onChange={(event) => handleChange(event)} required />
                        </Form.Group>
                        <Button type="submit" disabled={loading} className="w-100">Sign Up</Button>
                    </Form>
                </Card>
                <div className="w-100 text-center mt-2">
                    Alredy have an acoount ? <Link to="/login">log in</Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp;
