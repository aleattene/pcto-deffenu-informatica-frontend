import React from 'react'
import Table from '../Table/Table'

function Dashboard({ titleTable, dataTable, isLoading, buttons, isViewMode = true , entity}) {
    return (
        <main id="dashboard" className='flex-1 overflow-x-hidden overflow-y-auto'>
            {isViewMode &&
                <Table title={titleTable} data={dataTable} isLoading={isLoading} buttons={buttons} entity={entity}/>
            }
        </main>

    )
}

export default Dashboard

