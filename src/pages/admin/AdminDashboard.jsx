import React from 'react';
import { Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom';
import { Users, FileText, ShoppingBag, Activity, BarChart2, LogOut, CheckSquare } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

// Subcomponents
import AdminUsersPage from './AdminUsersPage';

const AdminDashboard = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    const navItems = [
        { name: 'Vista General', path: '/admin/dashboard', icon: BarChart2, exact: true },
        { name: 'Usuarios', path: '/admin/dashboard/users', icon: Users },
        { name: 'Verificación Pagos', path: '/admin/dashboard/payments', icon: CheckSquare },
        { name: 'Gestión Beneficios', path: '/admin/dashboard/benefits', icon: ShoppingBag },
        { name: 'Noticias', path: '/admin/dashboard/news', icon: FileText },
    ];

    const isActive = (item) => {
        if (item.exact) return location.pathname === '/admin/dashboard';
        return location.pathname.startsWith(item.path);
    };

    return (
        <div style={{ minHeight: '100vh', background: '#f1f5f9' }}>

            {/* Top Bar */}
            <header style={{ background: '#1e293b', color: 'white', padding: '1rem 0' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h1 style={{ fontSize: '1.25rem', margin: 0 }}>Panel de Administración</h1>
                        <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Comunidad Conectada: 23 de Enero</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="btn"
                        style={{ color: '#ef4444', background: 'rgba(239, 68, 68, 0.1)' }}
                    >
                        <LogOut size={16} /> Salir
                    </button>
                </div>
            </header>

            {/* Navigation Bar */}
            <nav style={{ background: 'white', borderBottom: '1px solid #e2e8f0', overflowX: 'auto' }}>
                <div className="container" style={{ display: 'flex' }}>
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '1rem 1.5rem',
                                color: isActive(item) ? 'var(--accent)' : 'var(--text-light)',
                                borderBottom: isActive(item) ? '2px solid var(--accent)' : '2px solid transparent',
                                fontWeight: 500,
                                fontSize: '0.9rem',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            <item.icon size={18} />
                            {item.name}
                        </Link>
                    ))}
                </div>
            </nav>

            {/* Content Area */}
            <main className="container" style={{ padding: '2rem 1rem' }}>
                <Routes>
                    <Route path="/" element={<OverviewStats />} />
                    <Route path="/users" element={<AdminUsersPage />} />
                    <Route path="/payments" element={<div>Módulo de Pagos (Próximamente)</div>} />
                    <Route path="/benefits" element={<div>Módulo de Beneficios (Próximamente)</div>} />
                    <Route path="/news" element={<div>Módulo de Noticias (Próximamente)</div>} />
                </Routes>
            </main>

        </div>
    );
};

// Overview Component
const OverviewStats = () => {
    return (
        <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#1e293b' }}>Resumen de Actividad</h2>

            {/* Metrics Cards */}
            <div className="grid-3" style={{ marginBottom: '2rem' }}>
                <StatCard title="Total Usuarios" value="1,234" icon={Users} color="blue" />
                <StatCard title="Verificaciones Pendientes" value="45" icon={CheckSquare} color="orange" />
                <StatCard title="Beneficios Activos" value="3" icon={Activity} color="green" />
            </div>

            <div className="grid-2">
                <div className="card">
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Registros Recientes</h3>
                    {/* Mock Table */}
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                        <thead>
                            <tr style={{ textAlign: 'left', color: '#64748b' }}>
                                <th style={{ padding: '0.5rem' }}>Usuario</th>
                                <th style={{ padding: '0.5rem' }}>Fecha</th>
                                <th style={{ padding: '0.5rem' }}>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1, 2, 3].map(i => (
                                <tr key={i} style={{ borderTop: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '0.75rem 0.5rem' }}>Usuario Nuevo {i}</td>
                                    <td style={{ padding: '0.75rem 0.5rem' }}>Hace {i} horas</td>
                                    <td style={{ padding: '0.75rem 0.5rem' }}><span style={{ color: '#d97706', background: '#fffbeb', padding: '0.1rem 0.4rem', borderRadius: '4px', fontSize: '0.75rem' }}>Pendiente</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Another Card Placeholder */}
                <div className="card">
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Estado del Sistema</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>CLAP Marzo</span>
                            <span style={{ color: '#10b981', fontWeight: 600 }}>Activo (Cobranza)</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>Gas Jornada 4</span>
                            <span style={{ color: '#ef4444', fontWeight: 600 }}>Cerrado</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>Vacunación</span>
                            <span style={{ color: '#3b82f6', fontWeight: 600 }}>Próximamente</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const StatCard = ({ title, value, icon: Icon, color }) => {
    const colors = {
        blue: { bg: '#eff6ff', text: '#1d4ed8' },
        orange: { bg: '#fff7ed', text: '#c2410c' },
        green: { bg: '#ecfdf5', text: '#047857' }
    };
    const theme = colors[color] || colors.blue;

    return (
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '1rem', borderRadius: '50%', background: theme.bg, color: theme.text }}>
                <Icon size={24} />
            </div>
            <div>
                <p style={{ color: '#64748b', fontSize: '0.875rem' }}>{title}</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e293b' }}>{value}</p>
            </div>
        </div>
    );
};

export default AdminDashboard;
