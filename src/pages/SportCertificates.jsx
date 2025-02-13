import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import documentationService from '../services/documentationService';
import ButtonInsert from '../components/Button/ButtonInsert';
import Dashboard from '../components/Dashboard/Dashboard';
import PageLayout from '../components/Layout/PageLayout';


function SportCertifcates() {

    const navigate = useNavigate()

    // Sport Certificates
    const [sportCertifcates, setSportCertificates] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchSportCertifcates = async () => {
            try {
                const data = await documentationService.getSportCertificates();
                setSportCertificates(data);
            } catch (error) {
                console.error("Errore nel recupero dei Certificati Medici:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSportCertifcates();
    }, []);

    // Redirect
    const handleClickFour = () => navigate('/sport-certificates/new')

    // Handler Modify Button
    const handleModifyButton = (selectedId) => {
        navigate(`/sport-certificates/edit/${selectedId}`)
    };


    // Handler Delete Button
    const handleDeleteButton = async (selectedId) => {
        const isConfirmed = window.confirm(`Sei sicuro di voler eliminare il certificato medico con ID: ${selectedId}?`);

        if (isConfirmed) {
            try {
                await documentationService.deleteSportCertificate(selectedId);
                alert("Certificato Medico eliminato con successo!");
                const updatedSportCertifcates = await documentationService.getSportCertificates();
                setSportCertificates(updatedSportCertifcates);

            } catch (error) {
                console.error("Errore durante l'eliminazione:", error);
                alert("Errore durante l'eliminazione del certificato medico.");
            }
        }
    };


    return (
        <div x-data="{ sidebarOpen: false }" class="flex h-screen bg-gray-200">
            <PageLayout>
                <Dashboard
                    titleTable="Elenco Certificati Medici"
                    isLoading={isLoading}
                    dataTable={sportCertifcates}
                    actions={[
                        { label: "Modifica Certificato Medico Selezionato", onClick: (selectedId) => handleModifyButton(selectedId) },
                        { label: "Elimina Certificato Medico Selezionato", onClick: (selectedId) => handleDeleteButton(selectedId) }
                    ]}
                    buttons={[<ButtonInsert buttonText="Inserisci Certificato Medico" onClick={handleClickFour} />]}
                    entity="Certificato Medico"
                />
            </PageLayout>
        </div>
    );
}

export default SportCertifcates;


// DATA Sample

/*
const data = [
    { id: 1, issue_date: '2000-01-15', expiration_date: '2000-01-15' },
    { id: 2, issue_date: '1999-05-20', expiration_date: '1999-05-20' },
    { id: 3, issue_date: '1998-03-12', expiration_date: '2000-01-15' },
    { id: 4, issue_date: '1997-07-04', expiration_date: '2000-01-15' },
    { id: 5, issue_date: '1995-12-25', expiration_date: '2000-01-15' },
    { id: 6, issue_date: '2002-11-30', expiration_date: '2000-01-15' },
    { id: 7, issue_date: '2001-06-18', expiration_date: '2000-01-15' },
    { id: 8, issue_date: '2000-09-10', expiration_date: '2000-01-15' },
    { id: 9, issue_date: '1998-04-22', expiration_date: '2000-01-15' },
    { id: 10, issue_date: '1996-02-14', expiration_date: '2000-01-15' },
];
*/