function createData(
  service: string,
  day: string,
  date: string,
  time: string,
  location: string
) {
  return { day, date, time, service, location };
}

const educations33 = [
  createData(
    "Heta Arbeten",
    "Tisdag",
    "16/8 - 22",
    "08.00 - ca 15.00",
    "Borås"
  ),
  createData(
    "Sax & Bomlift",
    "Onsdag",
    "17/8 - 22",
    "08.00 - ca 15.00",
    "Borås"
  ),
  createData(
    "Fallskyddsutbildning gr.",
    "Torsdag",
    "18/8 - 22",
    "08.00 - ca 12.00",
    "Borås"
  ),
];

const educations24 = [
  createData(
    "Heta Arbeten",
    "Tisdag",
    "14/6 - 22",
    "08.00 - ca 15.00",
    "Göteborg"
  ),
  createData(
    "Sax & Bomlift",
    "Onsdag",
    "15/6 - 22",
    "08.00 - ca 15.00",
    "Göteborg"
  ),
  createData(
    "Fallskyddsutbildning gr.",
    "Torsdag",
    "16/6 - 22",
    "08.00 - ca 12.00",
    "Göteborg"
  ),
  createData(
    "Säkra lyft.",
    "Torsdag",
    "16/6 - 22",
    "12.30 - ca 16.00",
    "Göteborg"
  ),
];

const educations25 = [
  createData(
    "Sax & Bomlift",
    "Onsdag",
    "22/6 - 22",
    "08.00 - ca 15.00",
    "Kalmar"
  ),
  createData(
    "Fallskyddsutbildning gr.",
    "Torsdag",
    "23/6 - 22",
    "08:00 - ca 12.00",
    "Kalmar"
  ),
  createData(
    "Heta Arbeten",
    "Onsdag",
    "29/6 - 22",
    "08.00 - ca 15.00",
    "Kalmar"
  ),
];

export { educations33, educations25, educations24 };
