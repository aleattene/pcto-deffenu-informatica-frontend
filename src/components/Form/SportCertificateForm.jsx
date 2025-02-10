import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import documentationService from '../../services/documentationService';
import profilesService from '../../services/profilesService';
import Button from '../Button/Button';
import './SportCertificateForm.css';

function SportCertificateForm({ isEditMode = false, dataSportCertificate = {} }) {

    const navigate = useNavigate();

    // SportDoctors
    const [sportDoctors, setSportDoctors] = useState([])

    // Athletes
    const [athletes, setAthletes] = useState([])

    // SportCertificates
    const [sportCertificate, setSportCertificate] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Chiamata API per ottenere atleti
                const dataAthletes = await profilesService.getAthletes();
                setAthletes(dataAthletes);

                // Chiamata API per ottenere i medici sportivi
                const dataSportDoctors = await profilesService.getSportDoctors();
                setSportDoctors(dataSportDoctors);
            } catch (error) {
                console.error("Errore nel caricamento degli atleti o dei medici sportivi:", error);
            }
        };

        fetchData();
    }, []);

    // Update the state when dataAthlete are available
    useEffect(() => {
        if (isEditMode && dataSportCertificate) {
            setSportCertificate(dataSportCertificate);
        }
    }, [isEditMode, dataSportCertificate]);


    // Update the state when fields change
    const handleChange = (event) => {
        const { name, value } = event.target;
        setSportCertificate(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle the submit (create or update sportCertificate)
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (isEditMode) {
                await documentationService.updateSportCertificate(sportCertificate.id, sportCertificate);
                alert("Certificato Medico aggiornato con successo!");
            } else {
                await documentationService.createSportCertificate(sportCertificate);
                alert("Certificato Medico creato con successo!");
            }
            navigate('/sport-certificates')
        } catch (error) {
            console.error("Errore nel salvataggio del certificato medico: ", error);
            alert("Si è verificato un errore nel salvataggio del certificato medico.");
        }
    };

    return (
        <div id="form-container">
            <h1>{isEditMode ? "Modifica Certificato Medico" : "Aggiungi Certificato Medico"}</h1>
            <form id="sport-certificates-form" onSubmit={handleSubmit}>
                <div id="sport-certificates-container">
                    <div class="sport-certificates-group">

                        <label for="issue_date">Data di Emissione</label>
                        <input type="date" id="issue_date" name="issue_date" value={sportCertificate.issue_date} onChange={handleChange} required />

                        <label for="expiration_date">Data di Scadenza</label>
                        <input type="date" id="expiration_date" name="expiration_date" value={sportCertificate.expiration_date} onChange={handleChange} required />

                        <label>Medico Sportivo</label>
                        <select name="sport_doctor" value={sportCertificate.sport_doctor} onChange={handleChange} required>
                            <option value="">Seleziona medico</option>
                            {sportDoctors.map(sport_doctor => (
                                <option key={sport_doctor.id} value={sport_doctor.id}>
                                    {sport_doctor.first_name} {sport_doctor.last_name}
                                </option>
                            ))}
                        </select>
                        <label>Atleta</label>
                        <select name="athlete" value={sportCertificate.athlete} onChange={handleChange} required>
                            <option value="">Seleziona atleta</option>
                            {athletes.map(athlete => (
                                <option key={athlete.id} value={athlete.id}>
                                    {athlete.first_name} {athlete.last_name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div class="buttons">
                    <Button type="submit" buttonText={isEditMode ? "Salva Modifiche" : "Inserisci Certificato Medico"} />
                    <Button buttonText="Annulla" onClick={() => navigate('/sport-certificates')} />
                </div>
            </form>
        </div>
    );
}

export default SportCertificateForm;


// DATA SAMPLE

/*
const dataSportDoctors = [
    { id: 1, first_name: "Antonio", last_name: "Salta", vat_number: "56478912547" },
    { id: 2, first_name: "Simone", last_name: "Balla", vat_number: "91256478547" },
    { id: 3, first_name: "Francesco", last_name: "Rosolino", vat_number: "89125475647" },
    { id: 4, first_name: "Francesca", last_name: "Mirandola", vat_number: "78956412547" },
    { id: 5, first_name: "Luca", last_name: "Antonelli", vat_number: "91254564787" }
]

const dataAthletes = [
    { id: 1, first_name: "Simone", last_name: "Salta" },
    { id: 2, first_name: "Simone", last_name: "Balla" },
    { id: 3, first_name: "Francesco", last_name: "Rosolino" },
    { id: 4, first_name: "Francesca", last_name: "Mirandola" },
    { id: 5, first_name: "Luca", last_name: "Antonelli" }
]
    */