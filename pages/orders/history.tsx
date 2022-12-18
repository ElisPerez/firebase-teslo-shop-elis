import NextLink from 'next/link';

// import { Chip, Grid, Link, Typography } from '@mui/material'; // No usar asi porque es mas lento en dev.
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from '@mui/x-data-grid';

import { ShopLayout } from '../../components/layouts';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'fullname', headerName: 'Full Name', width: 300 },
  {
    field: 'paid',
    headerName: 'Paid',
    description: 'Shows information if the order is paid or not',
    width: 200,
    renderCell: (params: GridRenderCellParams) => {
      return params.row.paid ? (
        <Chip color='success' label='Paid' variant='outlined' />
      ) : (
        <Chip color='error' label='Not paid' variant='outlined' />
      );
    },
  },
  {
    field: 'order',
    headerName: 'Show order',
    width: 200,
    sortable: false,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <NextLink href={`/orders/${params.row.id}`} passHref>
          <Link underline='always'>Show order</Link>
        </NextLink>
      );
    },
  },
];

const row = [
  { id: 1, paid: true, fullname: 'Elis Antonio Perez' },
  { id: 2, paid: false, fullname: 'Yamilexy Torres' },
  { id: 3, paid: true, fullname: 'Darianny Sharisff Perez' },
  { id: 4, paid: false, fullname: 'Efrain Santiago Perez' },
];

export const HistoryPage = () => {
  return (
    <ShopLayout title={'Orders History'} pageDescription={'Client’s Orders history'}>
      <Typography variant='h1' component='h1'>
        Orders History
      </Typography>

      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
          <DataGrid columns={columns} rows={row} pageSize={10} rowsPerPageOptions={[10]} />
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default HistoryPage;
