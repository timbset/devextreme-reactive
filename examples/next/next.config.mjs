import transpiler from 'next-transpile-modules'

const withTM = transpiler(['@mui/icons-material', '@mui/x-date-pickers']);

export default withTM({});
