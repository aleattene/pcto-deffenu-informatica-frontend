import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import profilesService from '../services/profilesService';
import Dashboard from '../components/Dashboard/Dashboard';
import Button from '../components/Button/Button';
import PaymentForm from '../components/Form/PaymentForm';

function PaymentModify() {
    // ID from URL
    // const { id } = useParams();
    // const navigate = useNavigate();
    const [athlete, setAthlete] = useState({
         payment_date:'',
         amount: 0,

    });

    /* Recupera i dati dell'atleta all'avvio
    useEffect(() => {
        profilesService.getAthleteById(id)
            .then(response => {
                setAthlete(response.data);
            })
            .catch(error => {
                console.error("Errore nel recupero dell'atleta:", error);
            });
    }, [id]);
    */
    

    // Aggiorna lo stato al cambio degli input
    const handleChange = (e) => {
        setPayment({ ...payment, [e.target.name]: e.target.value });
    };

    /* Invia i dati aggiornati al backend
    const handleSubmit = (e) => {
        e.preventDefault();
        profilesService.updateAthlete(id, athlete)
            .then(() => {
                alert("Atleta aggiornato con successo!");
                navigate('/athletes');  // Torna alla lista degli atleti
            })
            .catch(error => {
                console.error("Errore nell'aggiornamento:", error);
            });
    };
    */

    return (
        <div>
           <Dashboard content={<PaymentForm isEditMode={true} />} />
        </div>
    );
}

export default PaymentModify;
