import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/Navbar';
import { User, Mail, Lock, Phone, CreditCard, Users } from 'lucide-react';

const RegisterPage = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        cedula: '',
        telefono: '',
        grupoFamiliar: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }
        // Mock registration -> auto login
        login({
            name: `${formData.nombre} ${formData.apellido}`,
            email: formData.email,
            grupoFamiliar: formData.grupoFamiliar
        }, 'user');
        navigate('/dashboard');
    };

    return (
        <div style={{ minHeight: '100vh', background: 'var(--background)', paddingBottom: '4rem' }}>
            <Navbar />
            <div className="container" style={{ display: 'flex', justifyContent: 'center', paddingTop: '4rem' }}>
                <div className="card" style={{ width: '100%', maxWidth: '600px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <h2 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Únete a la Comunidad</h2>
                        <p style={{ color: 'var(--text-light)' }}>Completa tus datos para registrarte</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="grid-2">
                            <div className="input-group">
                                <label className="input-label">Nombre</label>
                                <div style={{ position: 'relative' }}>
                                    <User size={18} style={{ position: 'absolute', top: '10px', left: '10px', color: '#94a3b8' }} />
                                    <input type="text" name="nombre" className="input-field" style={{ paddingLeft: '2.5rem' }} required value={formData.nombre} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="input-group">
                                <label className="input-label">Apellido</label>
                                <input type="text" name="apellido" className="input-field" required value={formData.apellido} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="grid-2">
                            <div className="input-group">
                                <label className="input-label">Cédula</label>
                                <div style={{ position: 'relative' }}>
                                    <CreditCard size={18} style={{ position: 'absolute', top: '10px', left: '10px', color: '#94a3b8' }} />
                                    <input type="number" name="cedula" className="input-field" style={{ paddingLeft: '2.5rem' }} required value={formData.cedula} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="input-group">
                                <label className="input-label">Teléfono</label>
                                <div style={{ position: 'relative' }}>
                                    <Phone size={18} style={{ position: 'absolute', top: '10px', left: '10px', color: '#94a3b8' }} />
                                    <input type="tel" name="telefono" className="input-field" style={{ paddingLeft: '2.5rem' }} required value={formData.telefono} onChange={handleChange} />
                                </div>
                            </div>
                        </div>

                        <div className="input-group">
                            <label className="input-label">Grupo Familiar</label>
                            <div style={{ position: 'relative' }}>
                                <Users size={18} style={{ position: 'absolute', top: '10px', left: '10px', color: '#94a3b8', pointerEvents: 'none' }} />
                                <select
                                    name="grupoFamiliar"
                                    className="input-field"
                                    style={{ paddingLeft: '2.5rem', appearance: 'auto' }}
                                    required
                                    value={formData.grupoFamiliar}
                                    onChange={handleChange}
                                >
                                    <option value="">Seleccione su grupo...</option>
                                    <option value="familia_perez">Familia Pérez</option>
                                    <option value="familia_gonzalez">Familia González</option>
                                    <option value="familia_rodriguez">Familia Rodríguez</option>
                                    <option value="nuevo">Crear Nuevo Grupo</option>
                                </select>
                            </div>
                        </div>

                        <div className="input-group">
                            <label className="input-label">Correo Electrónico</label>
                            <div style={{ position: 'relative' }}>
                                <Mail size={18} style={{ position: 'absolute', top: '10px', left: '10px', color: '#94a3b8' }} />
                                <input type="email" name="email" className="input-field" style={{ paddingLeft: '2.5rem' }} required value={formData.email} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="grid-2">
                            <div className="input-group">
                                <label className="input-label">Contraseña</label>
                                <div style={{ position: 'relative' }}>
                                    <Lock size={18} style={{ position: 'absolute', top: '10px', left: '10px', color: '#94a3b8' }} />
                                    <input type="password" name="password" className="input-field" style={{ paddingLeft: '2.5rem' }} required minLength={8} value={formData.password} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="input-group">
                                <label className="input-label">Confirmar Contraseña</label>
                                <input type="password" name="confirmPassword" className="input-field" required minLength={8} value={formData.confirmPassword} onChange={handleChange} />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                            Registrarse
                        </button>
                    </form>

                    <div style={{ marginTop: '1.5rem', textAlign: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem' }}>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>
                            ¿Ya tienes cuenta? <br />
                            <Link to="/login" style={{ fontWeight: '600' }}>Inicia Sesión</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
