import Gallery1 from "../../assets/gallery/gallery1.jpeg";
import Gallery2 from "../../assets/gallery/gallery2.jpeg";
import Gallery3 from "../../assets/gallery/gallery3.jpeg";
import Gallery4 from "../../assets/gallery/gallery4.jpeg";
import Gallery5 from "../../assets/gallery/gallery5.jpeg";
import Gallery6 from "../../assets/gallery/gallery6.jpeg";
import Gallery7 from "../../assets/gallery/gallery7.jpeg";
import Gallery8 from "../../assets/gallery/gallery8.jpeg";

export interface Gallery {
  image: any;
  alt: string;
}

const gallerys: Gallery[] = [
  {
    image: Gallery1,
    alt: "",
  },
  {
    image: Gallery2,
    alt: "",
  },
  {
    image: Gallery3,
    alt: "",
  },
  {
    image: Gallery4,
    alt: "",
  },
  {
    image: Gallery5,
    alt: "",
  },
  {
    image: Gallery6,
    alt: "",
  },
  {
    image: Gallery7,
    alt: "",
  },
  {
    image: Gallery8,
    alt: "",
  },
];
export default gallerys;
