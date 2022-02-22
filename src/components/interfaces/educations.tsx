function createData(
  service: string,
  day: string,
  date: string,
  time: string,
  location: string
) {
  return { day, date, time, service, location };
}

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

export { educations9, educations11, educations13 };
