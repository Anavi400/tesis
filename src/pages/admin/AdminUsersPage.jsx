import React, { useState } from 'react';
import { Search, CheckCircle, Clock } from 'lucide-react';

const AdminUsersPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Mock Data
    const [users, setUsers] = useState([
        { id: 1, name: 'Juan Pérez', email: 'juan@example.com', cedula: '12345678', grupo: 'Familia Pérez', verificado: true },
        { id: 2, name: 'María González', email: 'maria@example.com', cedula: '87654321', grupo: 'Familia González', verificado: false },
        { id: 3, name: 'Pedro Rodriguez', email: 'pedro@example.com', cedula: '11223344', grupo: 'Familia Rodríguez', verificado: false },
        { id: 4, name: 'Ana Lopez', email: 'ana@example.com', cedula: '44332211', grupo: 'Familia López', verificado: true },
    ]);

    const toggleVerification = (id) => {
        setUsers(users.map(u => u.id === id ? { ...u, verificado: !u.verificado } : u));
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.cedula.includes(searchTerm)
    );

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', color: '#1e293b' }}>Gestión de Usuarios</h2>
                <button className="btn btn-primary">Exportar CSV</button>
            </div>

            <div className="card">
                {/* Filters */}
                <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
                    <div style={{ position: 'relative', flex: 1 }}>
                        <Search size={18} style={{ position: 'absolute', top: '12px', left: '12px', color: '#94a3b8' }} />
                        <input
                            type="text"
                            className="input-field"
                            style={{ paddingLeft: '2.5rem' }}
                            placeholder="Buscar por nombre o cédula..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <select className="input-field" style={{ width: '200px' }}>
                        <option value="all">Todos los estados</option>
                        <option value="verified">Verificados</option>
                        <option value="pending">Pendientes</option>
                    </select>
                </div>

                {/* Table */}
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '0.875rem', textTransform: 'uppercase' }}>
                                <th style={{ padding: '1rem' }}>Nombre Completo</th>
                                <th style={{ padding: '1rem' }}>Cédula</th>
                                <th style={{ padding: '1rem' }}>Email</th>
                                <th style={{ padding: '1rem' }}>Grupo Familiar</th>
                                <th style={{ padding: '1rem' }}>Estado</th>
                                <th style={{ padding: '1rem' }}>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.map(user => (
                                <tr key={user.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '1rem', fontWeight: 500 }}>{user.name}</td>
                                    <td style={{ padding: '1rem' }}>{user.cedula}</td>
                                    <td style={{ padding: '1rem', color: '#64748b' }}>{user.email}</td>
                                    <td style={{ padding: '1rem' }}>{user.grupo}</td>
                                    <td style={{ padding: '1rem' }}>
                                        {user.verificado ? (
                                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', color: '#059669', background: '#ecfdf5', padding: '0.25rem 0.5rem', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 600 }}>
                                                <CheckCircle size={12} /> Verificado
                                            </span>
                                        ) : (
                                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', color: '#d97706', background: '#fffbeb', padding: '0.25rem 0.5rem', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 600 }}>
                                                <Clock size={12} /> Pendiente
                                            </span>
                                        )}
                                    </td>
                                    <td style={{ padding: '1rem' }}>
                                        <button
                                            onClick={() => toggleVerification(user.id)}
                                            className="btn"
                                            style={{
                                                padding: '0.25rem 0.75rem',
                                                fontSize: '0.75rem',
                                                background: user.verificado ? '#fee2e2' : '#dcfce7',
                                                color: user.verificado ? '#ef4444' : '#15803d'
                                            }}
                                        >
                                            {user.verificado ? 'Revocar' : 'Verificar'}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminUsersPage;
