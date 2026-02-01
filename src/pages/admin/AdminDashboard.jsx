import React, { Component } from 'react';
import ClaimsManager from './ClaimsManager';
import BenefitsManager from './BenefitsManager';
import NewsManager from './NewsManager';
import { LayoutDashboard, FileText, Gift, Bell } from 'lucide-react';
import './Admin.css';

class AdminDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'claims'
        };
    }

    render() {
        const { activeTab } = this.state;

        return (
            <div className="admin-container">
                {/* Sidebar */}
                <aside className="admin-sidebar">
                    <div className="sidebar-header">
                        <h1 className="sidebar-title">Admin Panel</h1>
                        <p className="sidebar-subtitle">Comunidad Unida</p>
                    </div>
                    <nav className="sidebar-nav">
                        <button
                            onClick={() => this.setState({ activeTab: 'dashboard' })}
                            className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
                        >
                            <LayoutDashboard size={20} /> Dashboard
                        </button>
                        <button
                            onClick={() => this.setState({ activeTab: 'claims' })}
                            className={`nav-item ${activeTab === 'claims' ? 'active' : ''}`}
                        >
                            <FileText size={20} /> Comprobantes
                        </button>
                        <button
                            onClick={() => this.setState({ activeTab: 'benefits' })}
                            className={`nav-item ${activeTab === 'benefits' ? 'active' : ''}`}
                        >
                            <Gift size={20} /> Beneficios
                        </button>
                        <button
                            onClick={() => this.setState({ activeTab: 'news' })}
                            className={`nav-item ${activeTab === 'news' ? 'active' : ''}`}
                        >
                            <Bell size={20} /> Noticias
                        </button>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="admin-main">
                    <header className="admin-header">
                        <h2 className="page-title" style={{ textTransform: 'capitalize' }}>{activeTab}</h2>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <span style={{ fontSize: '0.875rem', color: '#4b5563' }}>Admin User</span>
                            <div style={{ width: '2rem', height: '2rem', backgroundColor: '#3b82f6', borderRadius: '50%' }}></div>
                        </div>
                    </header>

                    <div className="admin-content">
                        {activeTab === 'dashboard' && (
                            <div className="card">
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Bienvenido al Panel de Administración</h3>
                                <p style={{ color: '#6b7280' }}>Seleccione una opción del menú para comenzar.</p>
                            </div>
                        )}
                        {activeTab === 'claims' && <ClaimsManager />}
                        {activeTab === 'benefits' && <BenefitsManager />}
                        {activeTab === 'news' && <NewsManager />}
                    </div>
                </main>
            </div>
        );
    }
}

export default AdminDashboard;
