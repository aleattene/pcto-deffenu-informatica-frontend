import axios from 'axios';

const API_BASE_URL = 'https://.../profiles'; // Base URL Backend


const profilesService = {

    // Read Athlets
    getAthletes: async () => {
        return Promise.resolve([
            { id: 1, nome: 'Mario', cognome: 'Rossi' },
            { id: 2, nome: 'Giulia', cognome: 'Bianchi' },
          ]);
        // const response = await axios.get(`${API_BASE_URL}/athletes`);
        // return response.data;
    },

    // Create Athlete
    createAthlete: async (athlete) => {
        const response = await axios.post(`${API_BASE_URL}/athletes`, athlete);
        return response.data;
    },

    // Update Athlete
    updateAthlete: async (id, updatedAthlete) => {
        const response = await axios.put(`${API_BASE_URL}/athletes/${id}`, updatedAthlete);
        return response.data;
    },

    // Delete Athlete
    deleteAthlete: async (id) => {
        const response = await axios.delete(`${API_BASE_URL}/athletes/${id}`);
        return response.data;
    },

    // Read Trainers
    getTrainers: async () => {
        return Promise.resolve([
            { id: 1, nome: 'Luca', cognome: 'Verdi' },
            { id: 2, nome: 'Francesca', cognome: 'Neri' },
          ]);
        // const response = await axios.get(`${API_BASE_URL}/trainers`);
        // return response.data;
    },

    // Create Trainer
    createTrainer: async (trainer) => {
        const response = await axios.post(`${API_BASE_URL}/trainers`, trainer);
        return response.data;
    },

    // Update Trainer
    updateTrainer: async (id, updatedTrainer) => {
        const response = await axios.put(`${API_BASE_URL}/trainers/${id}`, updatedTrainer);
        return response.data;
    },

    // Delete Trainer
    deleteTrainer: async (id) => {
        const response = await axios.delete(`${API_BASE_URL}/trainers/${id}`);
        return response.data;
    },

    // Read SportDoctors
    getSportDoctors: async () => {
        return Promise.resolve([
            { id: 1, nome: 'Elisa', cognome: 'Conti' },
            { id: 2, nome: 'Paolo', cognome: 'Galli' },
          ]);
        // const response = await axios.get(`${API_BASE_URL}/sport-doctors`);
        // return response.data;
    },

    // Create Trainer
    createSportDoctor: async (sportDoctor) => {
        const response = await axios.post(`${API_BASE_URL}/sport-doctors`, sportDoctor);
        return response.data;
    },

    // Update Trainer
    updateSportDoctor: async (id, updatedSportDoctor) => {
        const response = await axios.put(`${API_BASE_URL}/sport-doctors/${id}`, updatedSportDoctor);
        return response.data;
    },

    // Delete Trainer
    deleteSportDoctor: async (id) => {
        const response = await axios.delete(`${API_BASE_URL}/sport-doctors/${id}`);
        return response.data;
    },

};

export default profilesService;
