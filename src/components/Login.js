import React, { useState } from 'react'
import { Form, Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext';
import { Link, useHistory } from 'react-router-dom'

function Login() {
    var [signUpObj, setSignUpObj] = useState({
        email: '',
        password: '',
    })

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const History = useHistory('')
    var { login } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('')
            setLoading(true)
            await login(signUpObj.email, signUpObj.password)
            History.push('/')
        }
        catch {
            setError('Failed to login')
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
                    <h2 className="text-primary text-center mt-2 mb-2">Log In</h2>
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
                        <Button type="submit" disabled={loading} className="w-100">Login</Button>
                        <div className="w-100 text-center mt-2">
                            <Link to="/forgetPassword">Forget Password ?</Link>
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

export default Login;
