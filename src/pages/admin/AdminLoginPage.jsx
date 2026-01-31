import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/Navbar';
import { Shield, Lock, LayoutDashboard } from 'lucide-react';

const AdminLoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // basic mock validation
        if (email && password) {
            login({ email, name: 'Administrador' }, 'admin');
            navigate('/admin/dashboard');
        }
    };

    return (
        <div style={{ minHeight: '100vh', background: 'var(--background)' }}>
            <Navbar /> {/* Reuse Navbar but maybe conditionally hide login items later or keep for navigation */}

            <div className="container" style={{ display: 'flex', justifyContent: 'center', paddingTop: '4rem' }}>
                <div className="card" style={{ width: '100%', maxWidth: '400px', borderTop: '4px solid var(--accent)' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <div style={{
                            display: 'inline-flex',
                            padding: '1rem',
                            background: '#fef2f2',
                            borderRadius: '50%',
                            color: 'var(--accent)',
                            marginBottom: '1rem'
                        }}>
                            <Shield size={32} />
                        </div>
                        <h2 style={{ color: 'var(--text)', marginBottom: '0.5rem' }}>Acceso Administrativo</h2>
                        <p style={{ color: 'var(--text-light)' }}>Solo personal autorizado</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label className="input-label">Email Institucional</label>
                            <input
                                type="email"
                                className="input-field"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label className="input-label">Contraseña</label>
                            <div style={{ position: 'relative' }}>
                                <Lock size={18} style={{ position: 'absolute', top: '10px', left: '10px', color: '#94a3b8' }} />
                                <input
                                    type="password"
                                    className="input-field"
                                    style={{ paddingLeft: '2.5rem' }}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-accent" style={{ width: '100%', marginTop: '1rem' }}>
                            <LayoutDashboard size={18} /> Entrar al Panel
                        </button>
                    </form>

                    <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                        <Link to="/admin/register" style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>
                            Registrar nuevo administrador
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLoginPage;
