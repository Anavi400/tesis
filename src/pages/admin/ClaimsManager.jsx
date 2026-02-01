import React, { Component } from 'react';
import AdminService from '../../services/adminService';
import { Eye, Check, X } from 'lucide-react';

class ClaimsManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comprobantes: [],
            loading: true,
            filter: 'pendiente',
            selectedComprobante: null,
            reviewComment: '',
            error: null
        };
    }

    componentDidMount() {
        this.loadComprobantes();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.filter !== this.state.filter) {
            this.loadComprobantes();
        }
    }

    loadComprobantes = async () => {
        try {
            this.setState({ loading: true });
            const data = await AdminService.getComprobantes({ estado: this.state.filter });
            this.setState({ comprobantes: data, loading: false });
        } catch (err) {
            this.setState({ error: 'Error loading data', loading: false });
        }
    };

    handleReview = async (status) => {
        const { selectedComprobante, reviewComment } = this.state;
        if (!selectedComprobante) return;

        try {
            await AdminService.reviewComprobante(selectedComprobante.id, status, reviewComment);
            this.setState({ selectedComprobante: null, reviewComment: '' });
            this.loadComprobantes();
        } catch (err) {
            alert('Failed to update status');
        }
    };

    render() {
        const { comprobantes, loading, filter, selectedComprobante } = this.state;

        return (
            <div>
                <div className="page-header">
                    <h2 className="page-title">Gestión de Comprobantes</h2>
                </div>

                {/* Filters */}
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                    {['pendiente', 'verificado', 'rechazado'].map(status => (
                        <button
                            key={status}
                            onClick={() => this.setState({ filter: status })}
                            className={`btn ${filter === status ? 'btn-primary' : 'btn-secondary'}`}
                            style={{ textTransform: 'capitalize' }}
                        >
                            {status}
                        </button>
                    ))}
                </div>

                {/* Table */}
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Usuario</th>
                                <th>Tipo</th>
                                <th>Monto</th>
                                <th>Fecha</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr><td colSpan="6" style={{ textAlign: 'center' }}>Cargando...</td></tr>
                            ) : comprobantes.map(item => (
                                <tr key={item.id}>
                                    <td>{item.usuario?.nombre || 'N/A'}</td>
                                    <td style={{ textTransform: 'capitalize' }}>{item.tipo_beneficio}</td>
                                    <td>{item.monto}</td>
                                    <td>{new Date(item.fecha_subida).toLocaleDateString()}</td>
                                    <td>
                                        <span className={`badge ${item.estado === 'pendiente' ? 'badge-yellow' :
                                                item.estado === 'verificado' ? 'badge-green' :
                                                    'badge-red'
                                            }`}>
                                            {item.estado}
                                        </span>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => this.setState({ selectedComprobante: item })}
                                            className="btn-icon"
                                        >
                                            <Eye size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Review Modal */}
                {selectedComprobante && (
                    <div className="modal-overlay">
                        <div className="modal">
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Revisar Comprobante #{selectedComprobante.id}</h3>

                            <div className="form-group">
                                <label className="label">Comprobante:</label>
                                <div style={{ marginTop: '0.5rem', backgroundColor: '#f3f4f6', padding: '1rem', borderRadius: '0.5rem', textAlign: 'center' }}>
                                    <p style={{ color: '#6b7280', fontStyle: 'italic' }}>Imagen Ref: {selectedComprobante.imagen_url}</p>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="label">Comentarios:</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={this.state.reviewComment}
                                    onChange={(e) => this.setState({ reviewComment: e.target.value })}
                                    placeholder="Razón de rechazo o nota de aprobación..."
                                />
                            </div>

                            <div className="modal-actions">
                                <button
                                    onClick={() => this.setState({ selectedComprobante: null })}
                                    className="btn btn-secondary"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={() => this.handleReview('rechazado')}
                                    className="btn btn-danger"
                                >
                                    <X size={16} /> Rechazar
                                </button>
                                <button
                                    onClick={() => this.handleReview('verificado')}
                                    className="btn btn-success"
                                >
                                    <Check size={16} /> Aprobar
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default ClaimsManager;
