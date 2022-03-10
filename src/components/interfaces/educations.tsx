function createData(
  service: string,
  day: string,
  date: string,
  time: string,
  location: string
) {
  return { day, date, time, service, location };
}

const educations11 = [
  createData(
    "Allmän Ställningsutbildning",
    "Måndag",
    "14/3 - 22",
    "08.00 - ca 15.00",
    "Borås"
  ),
  createData(
    "Heta Arbeten",
    "Tisdag",
    "15/3 - 22",
    "08.00 - ca 15.00",
    "Borås"
  ),
  createData(
    "Sax & Bomlift",
    "Onsdag",
    "16/3 - 22",
    "08.00 - ca 15.00",
    "Borås"
  ),
  createData(
    "Fallskyddsutbildning gr.",
    "Torsdag",
    "17/3 - 22",
    "08.00 - ca 12.00",
    "Borås"
  ),
  createData("Säkra lyft", "Torsdag", "17/3 - 22", "12.30 - ca 15.30", "Borås"),
];

const educations13 = [
  createData(
    "Heta Arbeten",
    "Tisdag",
    "29/3 - 22",
    "08.00 - ca 13.00",
    "Lärarledd webb"
  ),
  createData(
    "Sax & Bomlift repetition",
    "Onsdag",
    "30/3 - 22",
    "08.00 - ca 12.00",
    "Lärarledd webb"
  ),
  createData(
    "Fallskyddsutbildning gr.",
    "Onsdag",
    "30/3 - 22",
    "12.30 - ca 16.00",
    "Lärarledd webb"
  ),
];

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

export { educations14, educations11, educations13 };
