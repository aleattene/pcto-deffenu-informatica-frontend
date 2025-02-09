import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import profilesService from '../../services/profilesService';
import Button from '../Button/Button';
import './AthleteForm.css';

function AthleteForm({ isEditMode = false, dataAthlete = {} }) {

    const navigate = useNavigate();

    // Set the initial state to empty array
    const [athlete, setAthlete] = useState([]);

    // Update the state when dataAthlete are available
    useEffect(() => {
        if (isEditMode && dataAthlete) {
            setAthlete(dataAthlete);
        }
    }, [isEditMode, dataAthlete]);

    // Categories 
    const [categories, setCategories] = useState(dataCategories)
    /*
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await profilesService.getCategories();
                setCategories(data);
            } catch (error) {
                console.error("Errore nel caricamento delle categorie:", error);
            }
        };
    
        fetchCategories();
    }, []);
    */
   // Trainers
   // const [trainers, setTrainers] = useState(dataTrainers)

    // Update the state when fields change
    const handleChange = (event) => {
        const { name, value } = event.target;
        setAthlete(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle the submit (create or update athlete)
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (isEditMode) {
                await profilesService.updateAthlete(athlete.id, athlete);
                alert("Atleta aggiornato con successo!");
            } else {
                await profilesService.createAthlete(athlete);
                alert("Atleta creato con successo!");
            }
            navigate('/athletes')
        } catch (error) {
            console.error("Errore nel salvataggio dell'atleta: ", error);
            alert("Si è verificato un errore nel salvataggio dell'atleta.");
        }
    };

    return (
        <div id="form-container">
            <h1>{isEditMode ? "Modifica Atleta" : "Aggiungi Atleta"}</h1>
            <form id="athletes-form" onSubmit={handleSubmit}>
            <div id="athletes-container">
                <div className="athletes-group">
                    <label>Nome</label>
                    <input type="text" name="first_name" value={athlete.first_name} onChange={handleChange} required />

                    <label>Cognome</label>
                    <input type="text" name="last_name" value={athlete.last_name} onChange={handleChange} required />

                    <label>Data di Nascita</label>
                    <input type="date" name="date_of_birth" value={athlete.date_of_birth} onChange={handleChange} required />

                    <label>Luogo di Nascita</label>
                    <input type="text" name="place_of_birth" value={athlete.place_of_birth} onChange={handleChange} required />

                    <label>Codice Fiscale</label>
                    <input type="text" name="fiscal_code" value={athlete.fiscal_code} onChange={handleChange} maxLength={16} required />

                    <label>Categoria</label>
                    <select name="category" value={athlete.category} onChange={handleChange} required>
                        <option value="">Seleziona categoria</option>
                        {categories.map(cat => (
                            <option key={cat.id} value={cat.id}>
                                {cat.code} - {cat.description}
                            </option>
                        ))}
                    </select>
                    {/*
                    <label>Allenatore</label>
                    <select name="trainer" value={athlete.trainers} onChange={handleChange} required>
                        <option value="">Seleziona allenatore</option>
                        {trainers.map(trainer => (
                            <option key={trainer.id} value={trainer.id}>
                                {trainer.first_name} {trainer.last_name}
                            </option>
                        ))}
                    </select>
                    */}
                </div>
                </div>
                <div className="buttons">
                    <Button type="submit" buttonText={isEditMode ? "Salva Modifiche" : "Inserisci Atleta"} />
                    <Button buttonText="Annulla" onClick={() => navigate('/athletes')} />
                </div>
            </form>
        </div>
    );
}

export default AthleteForm;


// Data Sample

const dataCategories = [
    { id: 1, code: 'AM', description: 'Allievi Maschile' },
    { id: 2, code: 'AF', description: 'Allieve Femminile' },
    { id: 3, code: 'JM', description: 'Juniores Maschile' },
    { id: 4, code: 'JF', description: 'Juniores Femminile' },
    { id: 5, code: 'PM', description: 'Promesse Maschile' },
    { id: 6, code: 'PF', description: 'Promesse Femminile' },
    { id: 7, code: 'SM', description: 'Seniores Maschile' },
    { id: 8, code: 'SF', description: 'Seniores Femminile' }
];


const dataTrainers = [
    { id: 1, first_name: "Luca", last_name: "Bianchi", fiscal_code: "LCABNC80A01H501Z" } ,
    { id: 2, first_name: "Marco", last_name: "Rossi", fiscal_code: "MRCRSS85B02F205Y" },
    { id: 3, first_name: "Giulia", last_name: "Verdi", fiscal_code: "GLVVRD90C03L219X" },
    { id: 4, first_name: "Francesca", last_name: "Neri", fiscal_code: "FRANER95D04T320W" },
    { id: 5, first_name: "Davide", last_name: "Moretti", fiscal_code: "DVDMRT99E05P123V" }
]