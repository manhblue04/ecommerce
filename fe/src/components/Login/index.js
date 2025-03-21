"use client"

import { useState } from "react"
import "./Login.css"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Login attempt with:", { email, password })
        // Add your login logic here
    }

    const handleGoogleLogin = () => {
        console.log("Google login clicked")
        // Add your Google login logic here
    }

    const handleFacebookLogin = () => {
        console.log("Facebook login clicked")
        // Add your Facebook login logic here
    }

    return (
        <div>


            <div className="login-container">
                <div className="login-header">
                    <h1 className="login-title">ĐĂNG NHẬP TÀI KHOẢN</h1>
                    <p className="login-subtitle">Nhập email và mật khẩu của bạn:</p>
                </div>

                <div className="social-login">
                    <button className="google-btn" onClick={handleGoogleLogin}>
                        <span className="btn-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.033s2.701-6.032 6.033-6.032c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.798-1.677-4.203-2.701-6.735-2.701-5.445 0-9.878 4.433-9.878 9.878s4.433 9.878 9.878 9.878c8.836 0 10.695-8.836 9.878-11.586h-9.878z"
                                    fill="white"
                                />
                            </svg>
                        </span>
                        Đăng nhập Google
                    </button>

                    <button className="facebook-btn" onClick={handleFacebookLogin}>
                        <span className="btn-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20.9 2H3.1C2.5 2 2 2.5 2 3.1v17.8c0 0.6 0.5 1.1 1.1 1.1h9.6v-7.8h-2.6v-3h2.6V9.2c0-2.6 1.6-4 3.9-4 1.1 0 2.1 0.1 2.3 0.1v2.7h-1.6c-1.3 0-1.5 0.6-1.5 1.5v1.9h3l-0.4 3h-2.6V22h5.1c0.6 0 1.1-0.5 1.1-1.1V3.1c0-0.6-0.5-1.1-1.1-1.1z"
                                    fill="white"
                                />
                            </svg>
                        </span>
                        Đăng nhập Facebook
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="email"
                            className="input-field"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <input
                            type="password"
                            className="input-field"
                            placeholder="Mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="recaptcha-notice">
                        This site is protected by reCAPTCHA and the Google
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                            {" "}
                            Privacy Policy
                        </a>{" "}
                        and
                        <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
                            {" "}
                            Terms of Service
                        </a>{" "}
                        apply.
                    </div>

                    <button type="submit" className="login-btn">
                        Đăng nhập
                    </button>
                </form>

                <div className="login-footer">
                    <div>
                        Khách hàng mới?
                        <a href="/register">Tạo tài khoản</a>
                    </div>
                    <div>
                        Quên mật khẩu?
                        <a href="/forgot-password">Khôi phục mật khẩu</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

