import React from 'react'
import Table from '../Table/Table'
import AthleteForm from '../Form/AthleteForm'

function Dashboard({ titleTable, dataTable, isLoading, buttons, isViewMode = true, entity, formComponent, actions }) {
    return (
        <main id="dashboard" className='flex-1 overflow-x-hidden overflow-y-auto'>
            {isViewMode &&
                <Table title={titleTable} data={dataTable} isLoading={isLoading} buttons={buttons} entity={entity} actions={actions} />
            }
            {!isViewMode && formComponent}
        </main>

    )
}

export default Dashboard

