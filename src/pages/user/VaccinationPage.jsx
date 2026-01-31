import React from 'react';
import { Activity, MapPin, Calendar, Clock, ShieldCheck } from 'lucide-react';

const VaccinationPage = () => {
    return (
        <div>
            <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text)' }}>Jornada de Salud</h2>
                <p style={{ color: 'var(--text-light)' }}>Información sobre vacunación y servicios médicos</p>
            </div>

            <div className="card" style={{ maxWidth: '800px', margin: '0 auto', borderTop: '4px solid var(--secondary)' }}>

                <div style={{ textAlign: 'center', padding: '2rem 0', borderBottom: '1px solid #e2e8f0' }}>
                    <div style={{
                        width: '64px', height: '64px',
                        background: '#ecfdf5', borderRadius: '50%',
                        color: 'var(--secondary)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        margin: '0 auto 1rem'
                    }}>
                        <Activity size={32} />
                    </div>
                    <h2 style={{ color: 'var(--secondary)' }}>Gran Jornada de Inmunización</h2>
                    <p style={{ marginTop: '0.5rem' }}>Para todas las edades | Totalmente Gratuito</p>
                </div>

                <div style={{ padding: '2rem 0' }}>
                    <div className="grid-3" style={{ textAlign: 'center' }}>
                        <div>
                            <Calendar size={24} color="var(--secondary)" style={{ marginBottom: '0.5rem' }} />
                            <p style={{ fontWeight: 600 }}>Fecha</p>
                            <p style={{ color: 'var(--text-light)' }}>Sábado 25 Marzo</p>
                        </div>
                        <div>
                            <Clock size={24} color="var(--secondary)" style={{ marginBottom: '0.5rem' }} />
                            <p style={{ fontWeight: 600 }}>Horario</p>
                            <p style={{ color: 'var(--text-light)' }}>8:00 AM - 4:00 PM</p>
                        </div>
                        <div>
                            <MapPin size={24} color="var(--secondary)" style={{ marginBottom: '0.5rem' }} />
                            <p style={{ fontWeight: 600 }}>Ubicación</p>
                            <p style={{ color: 'var(--text-light)' }}>Ambulatorio Principal</p>
                        </div>
                    </div>
                </div>

                <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <ShieldCheck size={20} /> Vacunas Disponibles
                    </h3>

                    <div style={{ display: 'grid', gap: '1rem' }}>
                        <VaccineItem
                            name="COVID-19 (Refuerzo)"
                            target="Adultos +18 años"
                            dose="3ra y 4ta dosis"
                        />
                        <VaccineItem
                            name="Influenza (Gripe)"
                            target="Niños y Adultos Mayores"
                            dose="Anual"
                        />
                        <VaccineItem
                            name="Polio / Pentavalente"
                            target="Niños 0-5 años"
                            dose="Esquema regular"
                        />
                        <VaccineItem
                            name="Fiebre Amarilla"
                            target="Viajeros / General"
                            dose="Dosis única"
                        />
                    </div>
                </div>

                <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-light)' }}>
                    <p><strong>Requisito Indispensable:</strong> Cédula de Identidad laminada y Tarjeta de Vacunación (si la posee).</p>
                </div>

            </div>
        </div>
    );
};

const VaccineItem = ({ name, target, dose }) => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'white', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #e2e8f0' }}>
        <div>
            <p style={{ fontWeight: 600, color: 'var(--text)' }}>{name}</p>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Dirigido a: {target}</p>
        </div>
        <div style={{ background: '#ecfdf5', color: 'var(--secondary)', fontSize: '0.75rem', padding: '0.25rem 0.5rem', borderRadius: '99px', fontWeight: 500 }}>
            {dose}
        </div>
    </div>
);

export default VaccinationPage;
