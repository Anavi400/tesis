import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/Navbar';
import { Mail, Lock, LogIn } from 'lucide-react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) return;

        // Call auth context login
        login({ email, name: 'Usuario Prueba' }, 'user');
        navigate('/dashboard');
    };

    return (
        <div style={{ minHeight: '100vh', background: 'var(--background)' }}>
            <Navbar />
            <div className="container" style={{ display: 'flex', justifyContent: 'center', paddingTop: '4rem' }}>
                <div className="card" style={{ width: '100%', maxWidth: '400px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <h2 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Bienvenido de nuevo</h2>
                        <p style={{ color: 'var(--text-light)' }}>Ingresa tus credenciales para continuar</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label className="input-label">Correo Electrónico</label>
                            <div style={{ position: 'relative' }}>
                                <Mail size={18} style={{ position: 'absolute', top: '10px', left: '10px', color: '#94a3b8' }} />
                                <input
                                    type="email"
                                    className="input-field"
                                    style={{ paddingLeft: '2.5rem' }}
                                    placeholder="ejemplo@correo.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="input-group">
                            <label className="input-label">Contraseña</label>
                            <div style={{ position: 'relative' }}>
                                <Lock size={18} style={{ position: 'absolute', top: '10px', left: '10px', color: '#94a3b8' }} />
                                <input
                                    type="password"
                                    className="input-field"
                                    style={{ paddingLeft: '2.5rem' }}
                                    placeholder="Mínimo 8 caracteres"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    minLength={8}
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                            <LogIn size={18} /> Iniciar Sesión
                        </button>
                    </form>

                    <div style={{ marginTop: '1.5rem', textAlign: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem' }}>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>
                            ¿No tienes una cuenta? <br />
                            <Link to="/register" style={{ fontWeight: '600' }}>Regístrate aquí</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
