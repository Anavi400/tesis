const API_URL = 'http://localhost:5000/api/admin';

const authHeader = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
        return { 'x-access-token': user.token };
    } else {
        return {};
    }
};

class AdminService {
    async getStats() {
        const response = await fetch(`${API_URL}/stats`, { headers: authHeader() });
        return response.json();
    }

    // === Claims ===
    async getComprobantes(filters = {}) {
        const query = new URLSearchParams(filters).toString();
        const response = await fetch(`${API_URL}/comprobantes?${query}`, { headers: authHeader() });
        return response.json();
    }

    async reviewComprobante(id, estado, comentarios) {
        const response = await fetch(`${API_URL}/comprobantes/${id}/review`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...authHeader()
            },
            body: JSON.stringify({ estado, comentarios })
        });
        return response.json();
    }

    // === Benefits ===
    async getBeneficios() {
        const response = await fetch(`${API_URL}/beneficios`, { headers: authHeader() });
        return response.json();
    }

    async createBeneficio(data) {
        const response = await fetch(`${API_URL}/beneficios`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', ...authHeader() },
            body: JSON.stringify(data)
        });
        return response.json();
    }

    async updateBeneficio(id, data) {
        const response = await fetch(`${API_URL}/beneficios/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', ...authHeader() },
            body: JSON.stringify(data)
        });
        return response.json();
    }

    async deleteBeneficio(id) {
        const response = await fetch(`${API_URL}/beneficios/${id}`, {
            method: 'DELETE',
            headers: authHeader()
        });
        return response.json();
    }

    // === News ===
    async getNoticias() {
        const response = await fetch(`${API_URL}/noticias`, { headers: authHeader() });
        return response.json();
    }

    async createNoticia(data) {
        const response = await fetch(`${API_URL}/noticias`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', ...authHeader() },
            body: JSON.stringify(data)
        });
        return response.json();
    }

    async publishNoticia(id) {
        const response = await fetch(`${API_URL}/noticias/${id}/publish`, {
            method: 'POST',
            headers: authHeader()
        });
        return response.json();
    }

    async deleteNoticia(id) {
        const response = await fetch(`${API_URL}/noticias/${id}`, {
            method: 'DELETE',
            headers: authHeader()
        });
        return response.json();
    }
}

const adminServiceInstance = new AdminService();
export default adminServiceInstance;
