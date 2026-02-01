import React from 'react';
import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';

const Navbar = () => {
    return (
        <nav style={{
            height: 'var(--header-height)',
            background: 'var(--surface)',
            borderBottom: '1px solid #e2e8f0',
            position: 'sticky',
            top: 0,
            zIndex: 10
        }}>
            <div className="container" style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                {/* Logo */}
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
                    <div style={{
                        background: 'var(--primary)',
                        padding: '0.5rem',
                        borderRadius: 'var(--radius-md)',
                        color: 'white'
                    }}>
                        <Users size={24} />
                    </div>
                    <span style={{
                        fontSize: '1.25rem',
                        fontWeight: '700',
                        color: 'var(--primary)'
                    }}>
                        Comunidad Unida
                    </span>
                </Link>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <Link to="/login" className="btn btn-secondary">
                        Iniciar Sesión
                    </Link>
                    <Link to="/register" className="btn btn-primary">
                        Registrarse
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
