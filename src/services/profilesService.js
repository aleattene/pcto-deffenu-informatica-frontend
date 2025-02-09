import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/';
const API_VERSION = 'api/v1/'
const APP = 'profiles/'
const URL = `${API_BASE_URL}${API_VERSION}${APP}`

const ATHLETES_ENDPOINT = 'athletes/'
const CATEGORIES_ENDPOINT = 'category/'
const TRAINERS_ENDPOINT = 'trainers/'
const SPORT_DOCTORS_ENDPOINT = 'sport-doctors/'

const API_ATHLETES = `${URL}${ATHLETES_ENDPOINT}`
const API_CATEGORIES = `${URL}${CATEGORIES_ENDPOINT}`
const API_TRAINERS = `${URL}${TRAINERS_ENDPOINT}`
const API_SPORT_DOCTORS = `${URL}${SPORT_DOCTORS_ENDPOINT}`


const profilesService = {

    // ATHLETS

    // Read Athlets
    getAthletes: async () => {
        const response = await axios.get(`${API_ATHLETES}`);
        return response.data;
    },

    // Create Athlete
    createAthlete: async (athlete) => {
        const response = await axios.post(`${API_ATHLETES}`, athlete);
        return response.data;
    },

    // Update Athlete
    updateAthlete: async (id, updatedAthlete) => {
        const response = await axios.put(`${API_ATHLETES}${id}/`, updatedAthlete);
        return response.data;
    },

    // Delete Athlete
    deleteAthlete: async (id) => {
        const response = await axios.delete(`${API_ATHLETES}${id}/`);
        return response.data;
    },

    // Read Athlete by ID
    getAthleteByID: async (id) => {
        const response = await axios.get(`${API_ATHLETES}${id}/`);
        return response.data;
    },


    // CATEGORIES

    // Read Category
    getCategories: async () => {
        const response = await axios.get(`${API_CATEGORIES}`);
        return response.data;
    },


    // TRAINERS

    // Read Trainers
    getTrainers: async () => {
        const response = await axios.get(`${API_TRAINERS}`);
        return response.data;
    },

    // Create Trainer
    createTrainer: async (trainer) => {
        const response = await axios.post(`${API_TRAINERS}`, trainer);
        return response.data;
    },

    // Update Trainer
    updateTrainer: async (id, updatedTrainer) => {
        const response = await axios.put(`${API_TRAINERS}${id}/`, updatedTrainer);
        return response.data;
    },

    // Delete Trainer
    deleteTrainer: async (id) => {
        const response = await axios.delete(`${API_TRAINERS}${id}/`);
        return response.data;
    },

    // Read Trainer by ID
    getTrainerByID: async (id) => {
        const response = await axios.get(`${API_TRAINERS}${id}/`);
        return response.data;
    },


    // SPORT DOCTORS

    // Read SportDoctors
    getSportDoctors: async () => {
        const response = await axios.get(`${API_SPORT_DOCTORS}`);
        return response.data;
    },

    // Create SportDoctor
    createSportDoctor: async (sportDoctor) => {
        console.log(sportDoctor)
        const response = await axios.post(`${API_SPORT_DOCTORS}`, sportDoctor);
        return response.data;
    },

    // Update SportDoctor
    updateSportDoctor: async (id, updatedSportDoctor) => {
        const response = await axios.put(`${API_SPORT_DOCTORS}${id}/`, updatedSportDoctor);
        return response.data;
    },

    // Delete SportDoctor
    deleteSportDoctor: async (id) => {
        const response = await axios.delete(`${API_SPORT_DOCTORS}${id}/`);
        return response.data;
    },

    // Read SportDoctor by ID
    getSportDoctorByID: async (id) => {
        const response = await axios.get(`${API_SPORT_DOCTORS}${id}/`);
        return response.data;
    },

};

export default profilesService;
