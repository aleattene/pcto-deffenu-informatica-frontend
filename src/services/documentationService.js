import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/';
const API_VERSION = 'api/v1/'
const APP = 'documentation/'
const URL = `${API_BASE_URL}${API_VERSION}${APP}`

const SPORT_CERTIFICATES_ENDPOINT = 'sport-certificates/'

const API_SPORT_CERTIFICATES = `${URL}${SPORT_CERTIFICATES_ENDPOINT}`


const documentationService = {

    // SPORT CERTIFICATES

    // Read Sport Certificates
    getSportCertificates: async () => {
        const response = await axios.get(`${API_SPORT_CERTIFICATES}`);
        return response.data;
    },

    // Create Sport Certificate
    createSportCertificate: async (sportCertificate) => {
        console.log(sportCertificate)
        const response = await axios.post(`${API_SPORT_CERTIFICATES}`, sportCertificate);
        return response.data;
        
    },

    // Update Sport Certificate
    updateSportCertificate: async (id, updatedSportCertificate) => {
        const response = await axios.put(`${API_SPORT_CERTIFICATES}${id}/`, updatedSportCertificate);
        return response.data;
    },

    // Delete Sport Certificate
    deleteSportCertificate: async (id) => {
        const response = await axios.delete(`${API_SPORT_CERTIFICATES}${id}/`);
        return response.data;
    },

    // Read Sport Certificate by ID
    getSportCertificateByID: async (id) => {
        const response = await axios.get(`${API_SPORT_CERTIFICATES}${id}/`);
        return response.data;
    },

};

export default documentationService;
