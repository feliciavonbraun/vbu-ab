import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { CSSProperties } from '@material-ui/styles';

interface Gallery {
    image: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

function PhotoGallery() {

    const gallerys: Gallery[] = [
        {
            image: "https://wallpaperaccess.com/full/1154366.jpg"
        }, {
            image: "https://wallpaperaccess.com/full/1154366.jpg"
        }, {
            image: "https://wallpaperaccess.com/full/1154366.jpg"
        }, {
            image: "https://wallpaperaccess.com/full/1154366.jpg"
        }, {
            image: "https://wallpaperaccess.com/full/1154366.jpg"
        }, {
            image: "https://wallpaperaccess.com/full/1154366.jpg"
        }, {
            image: "https://wallpaperaccess.com/full/1154366.jpg"
        }, {
            image: "https://wallpaperaccess.com/full/1154366.jpg"
        }, {
            image: "https://wallpaperaccess.com/full/1154366.jpg"
        }
    ]

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1} style={galleryContainer}>
                {gallerys.map((gallery, index) =>
                    <Grid key={index} item xs={4}>
                        {/* <Paper className={classes.paper}> */}
                            <img src={gallery.image} width='100%' height='100%' alt="" />
                        {/* </Paper> */}
                    </Grid>
                )}
            </Grid>
        </div>
    );
}
export default PhotoGallery;

const galleryContainer: CSSProperties = {
    padding: '3rem 5rem'
}