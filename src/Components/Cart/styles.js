import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    toolbar: {
        marginTop: '5%',
    },
    emptyButton: {
        minWidth: '150px',
    },
    [theme.breakpoints.down("xs")]: {
        marginRight: '20px',
    },
    checkoutButton: {
        minWidth: '150px',
    },
    link: {
        textDecoration: 'none',
    },
    cartDetails: {
        display: 'flex',
        marginTop: '10%',
        width: '100%',
        justifyContent: 'space-between',
    },
}));