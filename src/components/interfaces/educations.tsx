function createData(
  service: string,
  day: string,
  date: string,
  time: string,
  location: string
) {
  return { day, date, time, service, location };
}

const educations3 = [
  createData(
    "Allmän Ställningsutbildning",
    "Måndag",
    "7/2 - 22",
    "08.00 - ca 15.00",
    "Göteborg"
  ),
  createData(
    "Truck dag 1",
    "Måndag",
    "7/2 - 22",
    "08.00 - ca 15.00",
    "Göteborg"
  ),
  createData(
    "Heta Arbeten",
    "Tisdag",
    "8/2 - 22",
    "08.00 - ca 15.00",
    "Göteborg"
  ),
  createData(
    "Truck dag 2",
    "Tisdag",
    "8/2 - 22",
    "08.00 - ca 15.00",
    "Göteborg"
  ),
  createData(
    "Sax & Bomlift",
    "Onsdag",
    "9/2 - 22",
    "08.00 - ca 15.00",
    "Göteborg"
  ),
  createData(
    "Fallskyddsutbildning gr.",
    "Torsdag",
    "10/2 - 22",
    "08.00 - ca 12.00",
    "Göteborg"
  ),
  createData(
    "Säkra lyft",
    "Torsdag",
    "10/2 - 22",
    "12.30 - ca 16.00",
    "Göteborg"
  ),
];

const educations4 = [
  createData(
    "Heta Arbeten",
    "Tisdag",
    "22/2 - 22",
    "08.00 - ca 13.00",
    "Lärarledd webb"
  ),
  createData(
    "Sax & Bomlift repetition",
    "Onsdag",
    "23/2 - 22",
    "08.00 - ca 12.00",
    "Lärarledd webb"
  ),
  createData(
    "Fallskyddsutbildning gr.",
    "Onsdag",
    "23/2 - 22",
    "12.30 - ca 16.00",
    "Lärarledd webb"
  ),
  createData(
    "Säkra lyft",
    "Torsdag",
    "24/2 - 22",
    "08.00 - ",
    "Lärarledd webb"
  ),
];

const educations9 = [
  createData(
    "Allmän Ställningsutbildning",
    "Måndag",
    "28/2 - 22",
    "08.00 - ca 15.00",
    "Varberg"
  ),
  createData(
    "Heta Arbeten",
    "Tisdag",
    "1/3 - 22",
    "08.00 - ca 15.00",
    "Varberg"
  ),
  createData(
    "Sax & Bomlift repetition",
    "Onsdag",
    "2/3 - 22",
    "08.00 - ca 15.00",
    "Varberg"
  ),
  createData(
    "Fallskyddsutbildning gr.",
    "Torsdag",
    "3/3 - 22",
    "08.00 - ca 12.00",
    "Varberg"
  ),
  createData(
    "Säkra lyft",
    "Torsdag",
    "3/3 - 22",
    "12.30 - ca 15.30",
    "Varberg"
  ),
];

export { educations3, educations4, educations9 };
