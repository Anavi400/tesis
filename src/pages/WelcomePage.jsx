import React from 'react';
import Navbar from '../components/Navbar';
import { ArrowRight, ShieldCheck, Heart, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />

            <main style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                <div className="container">
                    <div className="grid-2" style={{ alignItems: 'center', padding: '4rem 0' }}>

                        {/* Left Content - 60% approx visual weight */}
                        <div style={{ paddingRight: '2rem' }}>
                            <div style={{
                                display: 'inline-block',
                                padding: '0.25rem 0.75rem',
                                background: '#eff6ff',
                                color: 'var(--primary)',
                                borderRadius: '999px',
                                fontSize: '0.875rem',
                                fontWeight: '600',
                                marginBottom: '1.5rem'
                            }}>
                                Gestión Comunitaria Inteligente
                            </div>

                            <h1 style={{ marginBottom: '1.5rem', fontSize: '3rem' }}>
                                Comunidad Conectada: <br />
                                <span style={{ color: 'var(--primary)' }}>23 de Enero y Colinas</span>
                            </h1>

                            <p style={{
                                fontSize: '1.25rem',
                                color: 'var(--text-light)',
                                marginBottom: '2.5rem',
                                lineHeight: 1.6
                            }}>
                                Gestionando nuestros recursos, fortaleciendo nuestra comunidad. Accede a información sobre beneficios y servicios de manera fácil y rápida desde cualquier dispositivo.
                            </p>

                            <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
                                <Link to="/login" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}>
                                    Ingresar al Portal <ArrowRight size={20} />
                                </Link>
                                <Link to="/register" className="btn btn-secondary" style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}>
                                    Crear Cuenta
                                </Link>
                            </div>

                            <div style={{ display: 'flex', gap: '2rem', borderTop: '1px solid #e2e8f0', paddingTop: '2rem' }}>
                                <FeatureItem icon={<ShieldCheck />} text="Gestión Segura" />
                                <FeatureItem icon={<Zap />} text="Rápido Acceso" />
                                <FeatureItem icon={<Heart />} text="Unión Vecinal" />
                            </div>
                        </div>

                        {/* Right Image - 40% */}
                        <div style={{ position: 'relative' }}>
                            <div style={{
                                background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
                                borderRadius: '2rem',
                                padding: '0.5rem',
                                boxShadow: 'var(--shadow-lg)',
                                transform: 'rotate(2deg)'
                            }}>
                                {/* Placeholder for community image - using a generating gradient div instead of external image for reliability */}
                                <div style={{
                                    height: '500px',
                                    borderRadius: '1.75rem',
                                    background: '#ffffff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    overflow: 'hidden',
                                    position: 'relative'
                                }}>
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        opacity: 0.1,
                                        background: 'radial-gradient(circle at 50% 50%, #1e40af 1px, transparent 1px)',
                                        backgroundSize: '20px 20px'
                                    }} />
                                    <div style={{ textAlign: 'center', padding: '2rem' }}>
                                        <Users size={64} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
                                        <h3 style={{ color: 'var(--primary)' }}>Centro Comunitario Digital</h3>
                                        <p style={{ color: 'var(--text-light)' }}>Todo lo que necesitas en un solo lugar</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
};

const FeatureItem = ({ icon, text }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-light)' }}>
        <span style={{ color: 'var(--primary)' }}>{React.cloneElement(icon, { size: 20 })}</span>
        <span style={{ fontWeight: 500 }}>{text}</span>
    </div>
);

export default WelcomePage;
