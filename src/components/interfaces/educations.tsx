function createData(
  service: string,
  day: string,
  date: string,
  time: string,
  location: string
) {
  return { day, date, time, service, location };
}

const educations1 = [
  createData(
    "Sax & Bomlift repetition",
    "Onsdag",
    "8/12 - 21",
    "08.00 - ca 12.00",
    "Lärarledd webb"
  ),
  createData(
    "Fallskyddsutbildning grund ",
    "Onsdag",
    "8/12 - 21",
    "12.30 - ca 16.00",
    "Lärarledd webb"
  ),
  createData(
    "Heta arbeten",
    "Torsdag",
    "9/12 - 21",
    "08.00 - ca 13.00",
    "Lärarledd webb"
  ),
];

const educations2 = [
  createData(
    "Heta Arbeten",
    "Måndag",
    "20/12 - 21",
    "08.00 - ca 15.00",
    "Lärarledd webb"
  ),
  createData(
    "Truck dag 1",
    "Måndag",
    "20/12 - 21",
    "12.30 - ca 15.00",
    "Lärarledd webb"
  ),
  createData(
    "Sax & Bomlift",
    "Tisdag",
    "21/12 - 21",
    "08.00 - ca 15.00",
    "Lärarledd webb"
  ),
  createData(
    "Truck dag 2",
    "Tisdag",
    "21/11 - 21",
    "08.00 - ca 15.00",
    "Göteborg"
  ),
  createData(
    "Fallskyddsutbildning gr.",
    "Onsdag",
    "22/12 - 21",
    "08.00 - ca 12.00",
    "Göteborg"
  ),
  createData(
    "Säkra lyft / Traversutbildning",
    "Onsdag",
    "22/12 - 21",
    "12.30 - ca 16.00",
    "Göteborg"
  ),
];

export { educations1, educations2 };
