import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() =>({
    roots:{
        maxWidth:'100%'
    },
    media: {
        height: 0,
        paddingTop: '60%',
        objectfit:"cover"
    },
    cardAction: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent:{
        display: 'flex',
        justifyContent:'space-between',
    }
}));