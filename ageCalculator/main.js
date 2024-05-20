function calculateAge() {
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value) - 1;
  const year = parseInt(document.getElementById("year").value);

  if (day && month >= 0 && year) {
    const birthDate = new Date(year, month, day);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    const ageResult = document.getElementById("result");
    if (age > 0) {
      ageResult.innerText = `Your age is ${age} years.`;
    } else {
      ageResult.innerText = `you entered invalid date`;
    }
  } else {
    ageResult.innerText = "Please enter a valid date.";
  }
}
