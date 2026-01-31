import React, { useState } from 'react';
import { CreditCard, Calendar, Flame, Upload, Truck } from 'lucide-react';

const GasPage = () => {
    const [reference, setReference] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Comprobante de Gas enviado con éxito");
        setReference('');
    };

    return (
        <div>
            <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text)' }}>Servicio de Gas Doméstico</h2>
                <p style={{ color: 'var(--text-light)' }}>Jornada de recarga de bombonas</p>
            </div>

            <div className="grid-2">
                {/* Left Column: Info & Process */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    <div className="card" style={{ borderTop: '4px solid var(--accent)' }}>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Calendar size={20} className="text-primary" /> Ciclo de Atención
                        </h3>
                        <div style={{ display: 'grid', gap: '1rem' }}>
                            <div className="timeline-item">
                                <div style={{ fontWeight: 600, color: 'var(--primary)' }}>1. Pago del Servicio</div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Hasta el 20 de Marzo</div>
                            </div>
                            <div className="timeline-item">
                                <div style={{ fontWeight: 600 }}>2. Recolección de Cilindros Vacíos</div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>23 de Marzo - 8:00 AM</div>
                                <div style={{ fontSize: '0.8rem', background: '#fff7ed', padding: '0.25rem 0.5rem', marginTop: '0.25rem', borderRadius: '4px' }}>
                                    Lugar: Cancha Deportiva
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div style={{ fontWeight: 600 }}>3. Entrega de Cilindros Llenos</div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>25 de Marzo - 2:00 PM</div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Flame size={20} /> Precios Vigentes
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <PriceItem name="Bombona Pequeña (10kg)" price="Bs. 40,00" />
                            <PriceItem name="Bombona Mediana (18kg)" price="Bs. 80,00" />
                            <PriceItem name="Bombona Grande (43kg)" price="Bs. 180,00" />
                        </ul>
                    </div>

                </div>

                {/* Right Column: Payment & Upload */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    {/* Payment Data - Reused styling */}
                    <div className="card" style={{ background: '#f8fafc' }}>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <CreditCard size={20} /> Datos Bancarios
                        </h3>
                        <div style={{ fontSize: '0.9rem', display: 'grid', gap: '0.75rem' }}>
                            <div style={{ paddingBottom: '0.5rem', borderBottom: '1px solid #cbd5e1' }}>
                                <p style={{ color: 'var(--text-light)', fontSize: '0.8rem' }}>Banco</p>
                                <p style={{ fontWeight: 500 }}>Banco de Venezuela</p>
                            </div>
                            <div style={{ paddingBottom: '0.5rem', borderBottom: '1px solid #cbd5e1' }}>
                                <p style={{ color: 'var(--text-light)', fontSize: '0.8rem' }}>Número de Cuenta</p>
                                <p style={{ fontWeight: 500, fontFamily: 'monospace', letterSpacing: '0.5px' }}>0102-0123-4567-8901-2345</p>
                            </div>
                            <div>
                                <p style={{ color: 'var(--text-light)', fontSize: '0.8rem' }}>Pago Móvil</p>
                                <p style={{ fontWeight: 500 }}>0412-1234567 (RIF: J-12345678-9)</p>
                            </div>
                        </div>
                    </div>

                    {/* Upload Form */}
                    <div className="card">
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Upload size={20} /> Reportar Pago
                        </h3>

                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <label className="input-label">Tipo de Bombona</label>
                                <select className="input-field" style={{ appearance: 'auto' }}>
                                    <option>Pequeña 10kg</option>
                                    <option>Mediana 18kg</option>
                                    <option>Grande 43kg</option>
                                </select>
                            </div>

                            <div className="input-group">
                                <label className="input-label">Número de Referencia</label>
                                <input
                                    type="number"
                                    className="input-field"
                                    required
                                    placeholder="Últimos 4-6 dígitos"
                                    value={reference}
                                    onChange={(e) => setReference(e.target.value)}
                                />
                            </div>

                            <button type="submit" className="btn btn-accent" style={{ width: '100%' }}>
                                Registrar Pago
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

const PriceItem = ({ name, price }) => (
    <li style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #f1f5f9', fontSize: '0.9rem' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Truck size={16} color="var(--text-light)" /> {name}
        </span>
        <span style={{ fontWeight: 600, color: 'var(--primary)' }}>{price}</span>
    </li>
);

export default GasPage;
