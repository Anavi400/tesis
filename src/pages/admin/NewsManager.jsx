import React, { Component } from 'react';
import AdminService from '../../services/adminService';
import { Plus, Send, Trash } from 'lucide-react';

class NewsManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noticias: [],
            loading: true,
            showForm: false,
            formData: {
                titulo: '',
                contenido: '',
                tipo: 'informativo',
                prioridad: 0
            }
        };
    }

    componentDidMount() {
        this.loadNoticias();
    }

    loadNoticias = async () => {
        try {
            const data = await AdminService.getNoticias();
            this.setState({ noticias: data, loading: false });
        } catch (err) {
            console.error(err);
        }
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await AdminService.createNoticia(this.state.formData);
            this.setState({ showForm: false, formData: { titulo: '', contenido: '', tipo: 'informativo', prioridad: 0 } });
            this.loadNoticias();
        } catch (err) {
            alert('Error creating news');
        }
    };

    handlePublish = async (id) => {
        try {
            await AdminService.publishNoticia(id);
            alert('Noticia publicada!');
            this.loadNoticias();
        } catch (err) {
            alert('Error publishing');
        }
    };

    render() {
        const { noticias, showForm, formData } = this.state;

        return (
            <div>
                <div className="page-header">
                    <h2 className="page-title">Noticias y Anuncios</h2>
                    <button
                        onClick={() => this.setState({ showForm: !showForm })}
                        className="btn btn-purple"
                    >
                        <Plus size={20} /> Nueva Noticia
                    </button>
                </div>

                {showForm && (
                    <div className="card" style={{ borderLeft: '4px solid #9333ea', marginBottom: '2rem' }}>
                        <form onSubmit={this.handleSubmit}>
                            <div className="grid-1" style={{ display: 'grid', gap: '1rem' }}>
                                <input
                                    type="text"
                                    placeholder="Título del anuncio"
                                    className="form-control"
                                    style={{ fontWeight: 'bold' }}
                                    value={formData.titulo}
                                    onChange={e => this.setState({ formData: { ...formData, titulo: e.target.value } })}
                                    required
                                />
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <select
                                        className="form-control"
                                        style={{ width: 'auto' }}
                                        value={formData.tipo}
                                        onChange={e => this.setState({ formData: { ...formData, tipo: e.target.value } })}
                                    >
                                        <option value="informativo">Informativo</option>
                                        <option value="urgente">Urgente</option>
                                        <option value="recordatorio">Recordatorio</option>
                                    </select>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <input
                                            type="checkbox"
                                            checked={formData.prioridad === 1}
                                            onChange={e => this.setState({ formData: { ...formData, prioridad: e.target.checked ? 1 : 0 } })}
                                        />
                                        Alta Prioridad
                                    </label>
                                </div>
                                <textarea
                                    placeholder="Contenido..."
                                    className="form-control"
                                    rows="5"
                                    value={formData.contenido}
                                    onChange={e => this.setState({ formData: { ...formData, contenido: e.target.value } })}
                                    required
                                />
                                <button type="submit" className="btn btn-purple" style={{ justifySelf: 'start' }}>
                                    Guardar Borrador
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {noticias.map(noticia => (
                        <div key={noticia.id} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderLeft: '4px solid #d1d5db' }}>
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                                    <span className={`badge ${noticia.tipo === 'urgente' ? 'badge-red' : 'badge-gray'}`} style={{ textTransform: 'uppercase' }}>
                                        {noticia.tipo}
                                    </span>
                                    <span style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
                                        {new Date(noticia.created_at).toLocaleDateString()}
                                    </span>
                                    <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#4b5563' }}>
                                        {noticia.estado}
                                    </span>
                                </div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', margin: '0 0 0.5rem 0' }}>{noticia.titulo}</h3>
                                <p style={{ color: '#4b5563', fontSize: '0.875rem', margin: 0 }}>{noticia.contenido}</p>
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                {noticia.estado === 'borrador' && (
                                    <button
                                        onClick={() => this.handlePublish(noticia.id)}
                                        className="btn-icon"
                                        style={{ color: '#2563eb', backgroundColor: '#eff6ff', borderRadius: '0.25rem' }}
                                        title="Publicar"
                                    >
                                        <Send size={18} />
                                    </button>
                                )}
                                <button className="btn-icon" style={{ color: '#dc2626', backgroundColor: '#fef2f2', borderRadius: '0.25rem' }}>
                                    <Trash size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default NewsManager;
