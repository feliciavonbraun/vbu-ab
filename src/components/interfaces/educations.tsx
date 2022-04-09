function createData(
  service: string,
  day: string,
  date: string,
  time: string,
  location: string
) {
  return { day, date, time, service, location };
}

const educations14 = [
  createData(
    "Allmän Ställningsutbildning",
    "Måndag",
    "4/4 - 22",
    "08.00 - ca 15.00",
    "Göteborg"
  ),
  createData(
    "Truck dag 1",
    "Måndag",
    "4/4 - 22",
    "08.00 - ca 15.00",
    "Göteborg"
  ),
  createData(
    "Heta Arbeten",
    "Tisdag",
    "5/4 - 22",
    "08.00 - ca 15.00",
    "Göteborg"
  ),
  createData(
    "Truck dag 2",
    "Tisdag",
    "5/4 - 22",
    "08.00 - ca 15.00",
    "Göteborg"
  ),
  createData(
    "Sax & Bomlift",
    "Onsdag",
    "6/4 - 22",
    "08.00 - ca 15.00",
    "Göteborg"
  ),
  createData(
    "Fallskyddsutbildning gr.",
    "Torsdag",
    "7/4 - 22",
    "08.00 - ca 12.00",
    "Göteborg"
  ),
  createData(
    "Säkra lyft",
    "Torsdag",
    "7/4 - 22",
    "12.30 - ca 16.00",
    "Göteborg"
  ),
];
const educations17 = [
  createData(
    "Heta Arbeten",
    "Måndag",
    "25/4 - 22",
    "08.00 - ca 13.00",
    "Lärarledd webb"
  ),
  createData(
    "Sax & Bomlift repetition",
    "Onsdag",
    "11/5 - 22",
    "08.00 - ca 12.00",
    "Lärarledd webb"
  ),
  createData(
    "Fallskyddsutbildning gr.",
    "Torsdag",
    "11/5 - 22",
    "12-30 - ca 16.00",
    "Lärarledd webb"
  ),
];

export { educations14, educations17 };
