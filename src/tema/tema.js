import { createMuiTheme } from '@material-ui/core/style';

const tema = createMuiTheme({
    typography : {
        useNextVariants: true
    },
    palette : {
        primary : {
            main : '#FAC830'
        },
        common : {
            white : 'white'
        },
        secondary : {
            main : '#15130F'
        }
    },
    spacing : 10
});

export default tema;