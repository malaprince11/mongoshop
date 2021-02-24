import { makeStyles } from '@material-ui/core/styles';
import { black } from 'material-ui/styles/colors';

export default makeStyles((theme) => ({
  
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(4),
  },
  root: {
    flexGrow: 1,
  },
  title: {
    display:"flex",
    textTransform:"uppercase",
    color:"white",
    borderRadius:15,
    height:150,
    padding:10,
    marginTop:60,
    fontSize:52,
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    backgroundColor:"#2A9D8F",
    
  },
  botiquediv:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  
}));