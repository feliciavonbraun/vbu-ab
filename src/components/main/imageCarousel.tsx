import { Box } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import gallerys from "../interfaces/galleryArray";
import { Link } from "react-router-dom";
import arrow from "../../assets/Icons/arrow.svg";
import styled from "styled-components";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: "nowrap",
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: "translateZ(0)",
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    },
  })
);

function ImageCarousel() {
  const classes = useStyles();

  return (
    <Wrapper>
      <Box className={classes.root}>
        <h2 id="imageCarousel">GALLERI</h2>

        <ImageList className={classes.gridList} cols={4}>
          {gallerys.map((gallery, index) => (
            <ImageListItem key={index}>
              <img src={gallery.image} alt={gallery.alt} />
            </ImageListItem>
          ))}
        </ImageList>

        <StyledLink to="./gallery">
          <img src={arrow} alt="" style={{ width: "60px" }} />
        </StyledLink>
      </Box>
    </Wrapper>
  );
}
export default ImageCarousel;

const Wrapper = styled.div`
  margin: 30px 0;
`;

const StyledLink = styled(Link)`
  margin-top: 30px;
`;
