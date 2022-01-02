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
    "Heta arbeten",
    "Tisdag",
    "18/1 - 22",
    "08.00 - ca 13.00",
    "Lärarledd webb"
  ),
  createData(
    "Sax & Bomlift repetition",
    "Onsdag",
    "19/1 - 22",
    "08.00 - ca 12.00",
    "Lärarledd webb"
  ),
  createData(
    "Fallskyddsutbildning grund",
    "Onsdag",
    "19/1 - 22",
    "12.30 - ca 16.00",
    "Lärarledd webb"
  ),
  createData(
    "Säkra lyft",
    "Torsdag",
    "20/1 - 22",
    "08.00 - ca 12.00",
    "Lärarledd webb"
  ),
];

const educations2 = [
  createData(
    "Allmän Ställningsutbildning",
    "Måndag",
    "24/1 - 22",
    "08.00 - ca 15.00",
    "Skene"
  ),
  createData(
    "Heta Arbeten",
    "Tisdag",
    "25/1 - 22",
    "08.00 - ca 15.00",
    "Skene"
  ),
  createData(
    "Sax & Bomlift",
    "Onsdag",
    "26/1 - 22",
    "08.00 - ca 15.00",
    "Skene"
  ),
  createData(
    "Fallskyddsutbildning gr.",
    "Torsdag",
    "27/1 - 22",
    "08.00 - ca 12.00",
    "Skene"
  ),
  createData("Säkra lyft", "Torsdag", "27/1 - 22", "12.30 - ca 16.00", "Skene"),
];

export { educations1, educations2 };
