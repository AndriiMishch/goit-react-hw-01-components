import styled from 'styled-components';

export const Table = styled.table({
  backgroundColor: '#fff',
  borderCollapse: 'collapse',
  minWidth: '80%',
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.15)',
});

export const TableHead = styled.thead({
  borderBottom: '1px solid #ccc',
  padding: '24px',

  '> tr': {
    backgroundColor: '#44B6DF',
    color: '#ffffff',

    '> th': {
      padding: '16px',
    },
  },
});

export const TableBody = styled.tbody({
  '> tr': {
    textAlign: 'center',
    borderBottom: '1px solid #dddddd',
    '&:nth-child(even)': {
      backgroundColor: '#f3f3f3',
    },
    '> td': {
      padding: '16px',
    },
  },
});