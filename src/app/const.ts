import { IColumn } from './table-utilities/models';

export const campaignColumnConfig: IColumn[] = [
    {
      headerText: 'Campaign ID',
      accessor: 'campaignId'
    },
    {
      headerText: 'Check Name',
      accessor: 'name'
    },
    {
      headerText: 'Check Type',
      accessor: 'type'
    },
    {
      headerText: 'Start Date',
      accessor: 'startDate'
    },
    {
      headerText: 'Country',
      accessor: 'primaryCountry'
    },
    {
      headerText: 'Total Impressions',
      accessor: 'impressions'
    },
    {
      headerText: 'Last Release Date',
      accessor: 'lastReleaseDate'
    },
    {
      headerText: 'Status',
      accessor: 'releaseStatus'
    }
  ]