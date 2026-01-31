import React, { useState } from 'react';
import { CreditCard, Calendar, Package, Upload, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const ClapPage = () => {
    const [file, setFile] = useState(null);
    const [reference, setReference] = useState('');

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Comprobante enviado con éxito (Simulación)");
        setFile(null);
        setReference('');
    };

    return (
        <div>
            <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text)' }}>Beneficio CLAP</h2>
                <p style={{ color: 'var(--text-light)' }}>Gestión de bolsa de alimentación - Marzo 2024</p>
            </div>

            <div className="grid-2">
                {/* Left Column: Info & Products */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    {/* Main Info Card */}
                    <div className="card" style={{ borderTop: '4px solid var(--primary)' }}>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Calendar size={20} className="text-primary" /> Cronograma
                        </h3>
                        <div style={{ display: 'grid', gap: '0.75rem' }}>
                            <InfoRow label="Inicio de Cobro" value="18 de Marzo" />
                            <InfoRow label="Cierre de Cobro" value="22 de Marzo" />
                            <InfoRow label="Fecha de Retiro" value="25 de Marzo" />
                            <div style={{ marginTop: '0.5rem', padding: '0.75rem', background: '#eff6ff', borderRadius: 'var(--radius-sm)', color: 'var(--primary)', fontWeight: 600, textAlign: 'center' }}>
                                Monto a Pagar: Bs. 150,00
                            </div>
                        </div>
                    </div>

                    {/* User Status */}
                    <div className="card">
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Tu Estado</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ padding: '0.5rem', borderRadius: '50%', background: '#fef3c7', color: '#d97706' }}>
                                <Clock size={24} />
                            </div>
                            <div>
                                <p style={{ fontWeight: 600 }}>Pendiente por Pago</p>
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>Aún no has reportado tu pago</p>
                            </div>
                        </div>
                    </div>

                    {/* Products List */}
                    <div className="card">
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Package size={20} /> Contenido del Beneficio
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <ProductItem name="Harina de Maíz" quantity="4 kg" />
                            <ProductItem name="Arroz Blanco" quantity="2 kg" />
                            <ProductItem name="Pasta Alimenticia" quantity="2 kg" />
                            <ProductItem name="Azúcar" quantity="1 kg" />
                            <ProductItem name="Aceite Comestible" quantity="1 Lt" />
                            <ProductItem name="Granos (Lentejas)" quantity="500 gr" />
                        </ul>
                    </div>

                </div>

                {/* Right Column: Payment & Upload */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    {/* Payment Data */}
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
                            <div style={{ paddingBottom: '0.5rem', borderBottom: '1px solid #cbd5e1' }}>
                                <p style={{ color: 'var(--text-light)', fontSize: '0.8rem' }}>Titular</p>
                                <p style={{ fontWeight: 500 }}>Consejo Comunal 23E</p>
                            </div>
                            <div style={{ paddingBottom: '0.5rem', borderBottom: '1px solid #cbd5e1' }}>
                                <p style={{ color: 'var(--text-light)', fontSize: '0.8rem' }}>RIF</p>
                                <p style={{ fontWeight: 500 }}>J-12345678-9</p>
                            </div>
                            <div>
                                <p style={{ color: 'var(--text-light)', fontSize: '0.8rem' }}>Pago Móvil</p>
                                <p style={{ fontWeight: 500 }}>0412-1234567</p>
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

                            <div className="input-group">
                                <label className="input-label">Capture / Comprobante</label>
                                <div style={{
                                    border: '2px dashed #cbd5e1',
                                    borderRadius: 'var(--radius-md)',
                                    padding: '1.5rem',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    background: file ? '#f0fdf4' : 'transparent',
                                    borderColor: file ? 'var(--success)' : '#cbd5e1'
                                }}>
                                    <input
                                        type="file"
                                        id="file-upload"
                                        style={{ display: 'none' }}
                                        accept="image/*,.pdf"
                                        onChange={handleFileChange}
                                    />
                                    <label htmlFor="file-upload" style={{ cursor: 'pointer', display: 'block' }}>
                                        {file ? (
                                            <div style={{ color: 'var(--success)' }}>
                                                <CheckCircle size={24} style={{ display: 'block', margin: '0 auto 0.5rem' }} />
                                                <span style={{ fontSize: '0.9rem' }}>{file.name}</span>
                                            </div>
                                        ) : (
                                            <div style={{ color: 'var(--text-light)' }}>
                                                <Upload size={24} style={{ display: 'block', margin: '0 auto 0.5rem' }} />
                                                <span style={{ fontSize: '0.9rem' }}>Click para subir imagen o PDF</span>
                                                <br />
                                                <small>(Máx 5MB)</small>
                                            </div>
                                        )}
                                    </label>
                                </div>
                            </div>

                            <button type="submit" disabled={!file || !reference} className="btn btn-primary" style={{ width: '100%' }}>
                                Enviar Comprobante
                            </button>

                            <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-light)', background: '#fff7ed', padding: '0.5rem', borderRadius: 'var(--radius-sm)' }}>
                                <AlertCircle size={16} color="#ea580c" style={{ minWidth: '16px' }} />
                                <p>La verificación puede tardar hasta 24h hábiles.</p>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

const InfoRow = ({ label, value }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
        <span style={{ color: 'var(--text-light)' }}>{label}</span>
        <span style={{ fontWeight: 500 }}>{value}</span>
    </div>
);

const ProductItem = ({ name, quantity }) => (
    <li style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid #f1f5f9', fontSize: '0.9rem' }}>
        <span>{name}</span>
        <span style={{ color: 'var(--text-light)', background: '#f1f5f9', padding: '0.1rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>{quantity}</span>
    </li>
);

export default ClapPage;
