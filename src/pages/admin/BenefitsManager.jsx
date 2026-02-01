import React, { Component } from 'react';
import AdminService from '../../services/adminService';
import { Plus, Edit, Trash } from 'lucide-react';

class BenefitsManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beneficios: [],
            loading: true,
            isEditing: false,
            currentBeneficio: {
                titulo: '',
                descripcion: '',
                categoria: 'alimentacion',
                cupos: 0
            }
        };
    }

    componentDidMount() {
        this.loadBeneficios();
    }

    loadBeneficios = async () => {
        try {
            const data = await AdminService.getBeneficios();
            this.setState({ beneficios: data, loading: false });
        } catch (err) {
            console.error(err);
        }
    };

    handleSave = async (e) => {
        e.preventDefault();
        const { currentBeneficio, isEditing } = this.state;

        try {
            if (isEditing && currentBeneficio.id) {
                await AdminService.updateBeneficio(currentBeneficio.id, currentBeneficio);
            } else {
                await AdminService.createBeneficio(currentBeneficio);
            }
            this.setState({
                isEditing: false,
                currentBeneficio: { titulo: '', descripcion: '', categoria: 'alimentacion', cupos: 0 }
            });
            this.loadBeneficios();
        } catch (err) {
            alert('Error saving benefit');
        }
    };

    handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this benefit?')) {
            await AdminService.deleteBeneficio(id);
            this.loadBeneficios();
        }
    };

    render() {
        const { beneficios, isEditing, currentBeneficio } = this.state;

        return (
            <div>
                <div className="page-header">
                    <h2 className="page-title">Gestión de Beneficios</h2>
                    <button
                        onClick={() => this.setState({
                            isEditing: true,
                            currentBeneficio: { titulo: '', descripcion: '', categoria: 'alimentacion', cupos: 0 }
                        })}
                        className="btn btn-primary"
                    >
                        <Plus size={20} /> Nuevo Beneficio
                    </button>
                </div>

                {isEditing && (
                    <div className="card" style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{currentBeneficio.id ? 'Editar' : 'Crear'} Beneficio</h3>
                        <form onSubmit={this.handleSave} className="grid-2">
                            <input
                                type="text"
                                placeholder="Título"
                                className="form-control"
                                value={currentBeneficio.titulo}
                                onChange={e => this.setState({ currentBeneficio: { ...currentBeneficio, titulo: e.target.value } })}
                                required
                            />
                            <select
                                className="form-control"
                                value={currentBeneficio.categoria}
                                onChange={e => this.setState({ currentBeneficio: { ...currentBeneficio, categoria: e.target.value } })}
                            >
                                <option value="alimentacion">Alimentación</option>
                                <option value="salud">Salud</option>
                                <option value="gas">Gas</option>
                                <option value="educacion">Educación</option>
                            </select>
                            <textarea
                                placeholder="Descripción"
                                className="form-control"
                                style={{ gridColumn: '1 / -1' }}
                                rows="3"
                                value={currentBeneficio.descripcion}
                                onChange={e => this.setState({ currentBeneficio: { ...currentBeneficio, descripcion: e.target.value } })}
                                required
                            />
                            <input
                                type="number"
                                placeholder="Cupos"
                                className="form-control"
                                value={currentBeneficio.cupos}
                                onChange={e => this.setState({ currentBeneficio: { ...currentBeneficio, cupos: e.target.value } })}
                            />
                            <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                                <button
                                    type="button"
                                    onClick={() => this.setState({ isEditing: false })}
                                    className="btn btn-secondary"
                                >
                                    Cancelar
                                </button>
                                <button type="submit" className="btn btn-success">
                                    Guardar
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                <div className="card-grid">
                    {beneficios.map(b => (
                        <div key={b.id} className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                                <span className="badge badge-yellow" style={{ textTransform: 'capitalize' }}>{b.categoria}</span>
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    <button onClick={() => this.setState({ isEditing: true, currentBeneficio: b })} className="btn-icon">
                                        <Edit size={18} />
                                    </button>
                                    <button onClick={() => this.handleDelete(b.id)} className="btn-icon" style={{ color: '#dc2626' }}>
                                        <Trash size={18} />
                                    </button>
                                </div>
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{b.titulo}</h3>
                            <p style={{ color: '#4b5563', fontSize: '0.875rem', marginBottom: '1rem', flex: 1 }}>{b.descripcion}</p>
                            <div style={{ fontSize: '0.875rem', color: '#6b7280', paddingTop: '0.5rem', borderTop: '1px solid #e5e7eb' }}>
                                Cupos: {b.cupos} | Estado: {b.estado}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default BenefitsManager;
