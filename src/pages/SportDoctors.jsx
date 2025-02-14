import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import profilesService from '../services/profilesService';
import Dashboard from '../components/Dashboard/Dashboard';
import PageLayout from '../components/Layout/PageLayout';
import ButtonInsert from '../components/Button/ButtonInsert';


function SportDoctors() {

	const navigate = useNavigate()

	// Sport Doctors
	const [sportDoctors, setSportDoctors] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchSportDoctors = async () => {
			try {
				const data = await profilesService.getSportDoctors();
				setSportDoctors(data);
			} catch (error) {
				console.error("Errore nel recupero dei medici sportivi:", error);
            } finally {
                setIsLoading(false);
            }
		};

		fetchSportDoctors();
	}, []);

	// Redirect
	const handleClickSix = () => navigate('/sport-doctors/new')

	// Handler Modify Button
	const handleModifyButton = (selectedId) => {
		navigate(`/sport-doctors/edit/${selectedId}`)
	};

	const handleDeleteButton = async (selectedId) => {
		const isConfirmed = window.confirm(`Sei sicuro di voler eliminare il medico sportivo con ID: ${selectedId}?`);
		console.log(isConfirmed)

		if (isConfirmed) {
			try {
				await profilesService.deleteSportDoctor(selectedId);
				alert("Medico Sportivo eliminato con successo!");
				const updatedSportDoctors = await profilesService.getSportDoctors();
				setSportDoctors(updatedSportDoctors);
			} catch (error) {
				console.error("Errore durante l'eliminazione:", error);
				alert("Errore durante l'eliminazione del medico sportivo.");
			}
		}
	};

	return (
		<div x-data="{ sidebarOpen: false }" class="flex h-screen bg-gray-200">
			<PageLayout>
			<Dashboard
				titleTable="Elenco Medici Sportivi"
				isLoading={isLoading}
				dataTable={sportDoctors}
				actions={[
					{ label: "Modifica Medico Selezionato", onClick: (selectedId) => handleModifyButton(selectedId) },
					{ label: "Elimina Medico Selezionato", onClick: (selectedId) => handleDeleteButton(selectedId) }
				]}
				buttons={[<ButtonInsert buttonText="Aggiungi Medico Sportivo" onClick={handleClickSix} />]}
				entity="Medico Sportivo"
			/>
			</PageLayout>
		</div>

	);
}

export default SportDoctors;


// DATA Sample
/*
const data = [
	{ id: 1, first_name: 'Mario', last_name: 'Rossi', vat_number: 'RSSMRA00A15H501Z' },
	{ id: 2, first_name: 'Giulia', last_name: 'Bianchi', vat_number: 'BNCGLI99E20F205Y' },
	{ id: 3, first_name: 'Luca', last_name: 'Verdi', vat_number: 'VRDLCU98C12F839L' },
	{ id: 4, first_name: 'Francesca', last_name: 'Neri', vat_number: 'NREFNC97L04L219Q' },
	{ id: 5, first_name: 'Alessandro', last_name: 'Ferrari', vat_number: 'FRRLSS95T25H501X' },
	{ id: 6, first_name: 'Valentina', last_name: 'Esposito', vat_number: 'SPSVLN02S30F205D' },
	{ id: 7, first_name: 'Andrea', last_name: 'Romano', vat_number: 'RMNAND01H18F839G' },
	{ id: 8, first_name: 'Sara', last_name: 'Costa', vat_number: 'CSTSRA00P10D969H' },
	{ id: 9, first_name: 'Federico', last_name: 'Lombardi', vat_number: 'LMBFRC98D22G224J' },
	{ id: 10, first_name: 'Martina', last_name: 'Ricci', vat_number: 'RCCMRT96B14C415S' },
];
*/
