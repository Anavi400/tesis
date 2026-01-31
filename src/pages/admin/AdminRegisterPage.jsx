import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/Navbar';
import { Lock, Key, UserCheck } from 'lucide-react';

const AdminRegisterPage = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        cedula: '',
        email: '',
        password: '',
        codigoInvitacion: ''
    });

    const validCodes = ["COMUNIDAD-2024-ADMIN", "23ENERO-ADMIN-2024"];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate Invitation Code
        if (!validCodes.includes(formData.codigoInvitacion)) {
            alert("Código de invitación inválido");
            return;
        }

        if (formData.password.length < 12) {
            alert("La contraseña debe tener al menos 12 caracteres");
            return;
        }

        // Mock registration -> auto login as admin
        login({
            name: `${formData.nombre} ${formData.apellido}`,
            email: formData.email
        }, 'admin');
        navigate('/admin/dashboard');
    };

    return (
        <div style={{ minHeight: '100vh', background: 'var(--background)' }}>
            <Navbar />

            <div className="container" style={{ display: 'flex', justifyContent: 'center', paddingTop: '4rem', paddingBottom: '4rem' }}>
                <div className="card" style={{ width: '100%', maxWidth: '500px', borderTop: '4px solid var(--accent)' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <div style={{
                            display: 'inline-flex',
                            padding: '1rem',
                            background: '#fff7ed',
                            borderRadius: '50%',
                            color: 'var(--accent)',
                            marginBottom: '1rem'
                        }}>
                            <UserCheck size={32} />
                        </div>
                        <h2 style={{ color: 'var(--text)', marginBottom: '0.5rem' }}>Registro Administrativo</h2>
                        <p style={{ color: 'var(--text-light)' }}>Requiere código de invitación</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="grid-2">
                            <div className="input-group">
                                <label className="input-label">Nombre</label>
                                <input type="text" name="nombre" className="input-field" required onChange={handleChange} />
                            </div>
                            <div className="input-group">
                                <label className="input-label">Apellido</label>
                                <input type="text" name="apellido" className="input-field" required onChange={handleChange} />
                            </div>
                        </div>

                        <div className="input-group">
                            <label className="input-label">Cédula</label>
                            <input type="number" name="cedula" className="input-field" required onChange={handleChange} />
                        </div>

                        <div className="input-group">
                            <label className="input-label">Email Institucional</label>
                            <input type="email" name="email" className="input-field" required onChange={handleChange} />
                        </div>

                        <div className="input-group">
                            <label className="input-label">Contraseña (min 12 caracteres)</label>
                            <div style={{ position: 'relative' }}>
                                <Lock size={18} style={{ position: 'absolute', top: '10px', left: '10px', color: '#94a3b8' }} />
                                <input
                                    type="password"
                                    name="password"
                                    className="input-field"
                                    style={{ paddingLeft: '2.5rem' }}
                                    required
                                    minLength={12}
                                    placeholder="***********"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="input-group" style={{ background: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px dashed #cbd5e1' }}>
                            <label className="input-label" style={{ color: 'var(--accent)' }}>Código de Invitación</label>
                            <div style={{ position: 'relative' }}>
                                <Key size={18} style={{ position: 'absolute', top: '10px', left: '10px', color: 'var(--accent)' }} />
                                <input
                                    type="text"
                                    name="codigoInvitacion"
                                    className="input-field"
                                    style={{ paddingLeft: '2.5rem', borderColor: 'var(--accent)' }}
                                    required
                                    placeholder="ABCD-1234-XYZ"
                                    onChange={handleChange}
                                />
                            </div>
                            <small style={{ display: 'block', marginTop: '0.5rem', color: 'var(--text-light)' }}>
                                Proporcionado por el Super Admin
                            </small>
                        </div>

                        <button type="submit" className="btn btn-accent" style={{ width: '100%', marginTop: '1.5rem' }}>
                            Registrar Administrador
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminRegisterPage;
