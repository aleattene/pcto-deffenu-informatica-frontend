import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './PaymentForm.css';
import Button from '../Button/Button';
import profilesService from '../../services/profilesService';
import paymentsService from '../../services/paymentsService';

function PaymentForm({ isEditMode = false, dataPayment = {} }) {

    const navigate = useNavigate();

    // Trainers
    const [trainers, setTrainers] = useState([])

    // Payments
    const [payment, setPayment] = useState({
        payment_date: '',
        amount: '',
        trainer: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Chiamata API per ottenere trainers
                const dataTrainers = await profilesService.getTrainers();
                setTrainers(dataTrainers);
            } catch (error) {
                console.error("Errore nel caricamento degli allenatori:", error);
            }
        };

        fetchData();
    }, []);

    // Update the state when dataPayment are available
    useEffect(() => {
        if (isEditMode && dataPayment) {
            setPayment(dataPayment);
        }
    }, [isEditMode, dataPayment]);

    // Update the state when fields change
    const handleChange = (event) => {
        const { name, value } = event.target;
        setPayment(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle the submit (create or update payment)
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (isEditMode) {
                await paymentsService.updatePayment(payment.id, payment);
                alert("Compenso aggiornato con successo!");
            } else {
                await paymentsService.createPayment(payment);
                alert("Compenso creato con successo!");
            }
            navigate('/payments')
        } catch (error) {
            console.error("Errore nel salvataggio del compenso: ", error);
            alert("Si è verificato un errore nel salvataggio del compenso.");
        }
    };

    return (
        <div id="form-container">
            <h1>{isEditMode ? "Modifica Compenso" : "Aggiungi Compenso"}</h1>
            <form id="payments-form" onSubmit={handleSubmit}>
                <div id="payments-container">
                    <div class="payments-group">

                        <label for="payment_date">Data di Pagamento</label>
                        <input type="date" id="payment_date" name="payment_date" value={payment.payment_date} onChange={handleChange} required />

                        <label for="amount">Importo</label>
                        <input type="text" id="amount" name="amount" value={payment.amount} onChange={handleChange} required />

                        <select name="trainer" value={payment.trainer} onChange={handleChange} required>
                            <option value="">Seleziona allenatore</option>
                            {trainers.map(trainer => (
                                <option key={trainer.id} value={trainer.id}>
                                    {trainer.first_name} {trainer.last_name}
                                </option>
                            ))}
                        </select>

                    </div>
                </div>
                <div class="buttons">
                    <Button type="submit" buttonText={isEditMode ? "Salva Modifiche" : "Crea Compenso"} />
                    <Button buttonText="Annulla" onClick={() => navigate('/payments')} />
                </div>
            </form>
        </div>
    );
}

export default PaymentForm;