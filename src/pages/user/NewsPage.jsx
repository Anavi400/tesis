import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const mockNews = [
    {
        id: 1,
        titulo: "Jornada de Vacunación Confirmada",
        descripcion: "Se realizará la jornada de vacunación para niños y adultos mayores. Contaremos con vacunas contra la influenza y refuerzos COVID-19. Es obligatorio presentar cédula de identidad y tarjeta de vacunación.",
        fecha: "2024-03-25",
        hora: "08:00 AM",
        ubicacion: "Centro Comunal Principal"
    },
    {
        id: 2,
        titulo: "Llegada de Bolsas CLAP",
        descripcion: "La distribución del beneficio CLAP correspondiente al mes de Marzo comenzará este fin de semana. Por favor estar atentos a los jefes de calle para la recolección de pagos.",
        fecha: "2024-03-22",
        hora: "09:00 AM",
        ubicacion: "Sede del Consejo"
    },
    {
        id: 3,
        titulo: "Mantenimiento de Tuberías de Gas",
        descripcion: "PDVSA Gas realizará inspecciones en la zona 4. Se suspenderá el servicio temporalmente durante la mañana.",
        fecha: "2024-03-20",
        hora: "07:00 AM",
        ubicacion: "Sector Colinas - Zona 4"
    }
];

const NewsPage = () => {
    return (
        <div>
            <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text)' }}>Noticias y Eventos</h2>
                <p style={{ color: 'var(--text-light)' }}>Mantente informado de lo que sucede en tu comunidad</p>
            </div>

            <div style={{ display: 'grid', gap: '1.5rem' }}>
                {mockNews.map((news) => (
                    <div key={news.id} className="card" style={{ borderLeft: '4px solid var(--primary)' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{news.titulo}</h3>
                        <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                            {news.descripcion}
                        </p>

                        <div style={{
                            display: 'flex',
                            gap: '1.5rem',
                            flexWrap: 'wrap',
                            borderTop: '1px solid #f1f5f9',
                            paddingTop: '1rem',
                            fontSize: '0.875rem',
                            color: 'var(--text-light)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Calendar size={16} color="var(--primary)" />
                                <span>{news.fecha}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Clock size={16} color="var(--primary)" />
                                <span>{news.hora}</span>
                            </div>
                            {news.ubicacion && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <MapPin size={16} color="var(--primary)" />
                                    <span>{news.ubicacion}</span>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsPage;
