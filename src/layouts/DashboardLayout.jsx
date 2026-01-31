import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Users, LogOut, FileText, ShoppingBag, Activity, Flame, ChevronDown, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const DashboardLayout = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const navItems = [
        { name: 'Noticias', path: '/dashboard', icon: FileText },
        { name: 'CLAP', path: '/dashboard/clap', icon: ShoppingBag },
        { name: 'Vacunación', path: '/dashboard/vacunacion', icon: Activity },
        { name: 'Gas', path: '/dashboard/gas', icon: Flame },
    ];

    const isActive = (path) => {
        if (path === '/dashboard' && location.pathname === '/dashboard') return true;
        if (path !== '/dashboard' && location.pathname.startsWith(path)) return true;
        return false;
    };

    return (
        <div style={{ minHeight: '100vh', background: 'var(--background)' }}>
            {/* Dashboard Navbar */}
            <nav style={{
                background: 'var(--surface)',
                borderBottom: '1px solid #e2e8f0',
                padding: '0.75rem 0',
                position: 'sticky',
                top: 0,
                zIndex: 20
            }}>
                <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                        {/* Logo */}
                        <Link to="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
                            <div style={{
                                background: 'var(--primary)',
                                padding: '0.4rem',
                                borderRadius: 'var(--radius-md)',
                                color: 'white'
                            }}>
                                <Users size={20} />
                            </div>
                            <span style={{ fontWeight: '700', color: 'var(--primary)', fontSize: '1.1rem' }}>
                                Comunidad 23
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="desktop-nav" style={{ display: 'flex', gap: '0.5rem' }}>
                            {navItems.map((item) => {
                                const active = isActive(item.path);
                                return (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            padding: '0.5rem 1rem',
                                            borderRadius: 'var(--radius-md)',
                                            color: active ? 'var(--primary)' : 'var(--text-light)',
                                            background: active ? '#eff6ff' : 'transparent',
                                            fontWeight: 500,
                                            fontSize: '0.9rem',
                                            transition: 'all 0.2s'
                                        }}
                                    >
                                        <item.icon size={18} />
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Profile Dropdown */}
                    <div style={{ position: 'relative' }}>
                        <button
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '0.5rem',
                                borderRadius: 'var(--radius-md)'
                            }}
                        >
                            <div style={{
                                width: '36px', height: '36px',
                                background: '#e2e8f0',
                                borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: 'var(--text)'
                            }}>
                                <User size={20} />
                            </div>
                            <div style={{ textAlign: 'left', display: 'none', md: 'block' }}>
                                <p style={{ fontSize: '0.875rem', fontWeight: 600 }}>{user?.name}</p>
                                <p style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>{user?.email}</p>
                            </div>
                            <ChevronDown size={16} color="var(--text-light)" />
                        </button>

                        {isProfileOpen && (
                            <div style={{
                                position: 'absolute',
                                top: '110%',
                                right: 0,
                                width: '200px',
                                background: 'white',
                                borderRadius: 'var(--radius-md)',
                                boxShadow: 'var(--shadow-lg)',
                                border: '1px solid #e2e8f0',
                                padding: '0.5rem',
                                zIndex: 30
                            }}>
                                <div style={{ padding: '0.5rem 0.75rem', borderBottom: '1px solid #f1f5f9', marginBottom: '0.5rem' }}>
                                    <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-light)' }}>GRUPO FAMILIAR</p>
                                    <p style={{ fontSize: '0.875rem' }}>{user?.grupoFamiliar || 'No asignado'}</p>
                                </div>

                                <button
                                    onClick={() => navigate('/dashboard/historial')}
                                    className="dropdown-item"
                                    style={{
                                        width: '100%', textAlign: 'left', padding: '0.5rem 0.75rem',
                                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                                        background: 'transparent', border: 'none', cursor: 'pointer',
                                        fontSize: '0.875rem', borderRadius: 'var(--radius-sm)'
                                    }}
                                >
                                    <FileText size={16} /> Historial de Pagos
                                </button>

                                <button
                                    onClick={handleLogout}
                                    className="dropdown-item"
                                    style={{
                                        width: '100%', textAlign: 'left', padding: '0.5rem 0.75rem',
                                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                                        background: 'transparent', border: 'none', cursor: 'pointer',
                                        fontSize: '0.875rem', borderRadius: 'var(--radius-sm)',
                                        color: 'var(--error)'
                                    }}
                                >
                                    <LogOut size={16} /> Cerrar Sesión
                                </button>
                            </div>
                        )}
                    </div>

                </div>
            </nav>

            {/* Main Content Area */}
            <main className="container" style={{ padding: '2rem 1rem' }}>
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;
