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
    "Allmän Ställning",
    "Måndag",
    "15/8 - 22",
    "08.00 - ca 16.00",
    "Borås"
  ),
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
  createData("Säkra lyft", "Torsdag", "18/8 - 22", "12.30 - ca 16.00", "Borås"),
];

const educations34 = [
  createData(
    "Allmän Ställning",
    "Måndag",
    "22/8 - 22",
    "08.00 - ca 16.00",
    "Skene"
  ),
  createData(
    "Heta Arbeten",
    "Tisdag",
    "23/8 - 22",
    "08.00 - ca 15.00",
    "Skene"
  ),
  createData(
    "Sax & Bomlift",
    "Onsdag",
    "24/8 - 22",
    "08.00 - ca 15.00",
    "Skene"
  ),
  createData(
    "Fallskyddsutbildning gr.",
    "Torsdag",
    "25/8 - 22",
    "08.00 - ca 12.00",
    "Skene"
  ),
  createData("Säkra lyft", "Torsdag", "25/8 - 22", "12.30 - ca 16.00", "Skene"),
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

export { educations33, educations25, educations34 };
