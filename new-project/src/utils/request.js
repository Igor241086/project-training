const API_URL = import.meta.env.VITE_API_URL

export async function request(endpoint, options = {}) {
    const response = await fetch(`${API_URL}${endpoint}`, options)
    
    if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
    }
    
    return response.json();
}