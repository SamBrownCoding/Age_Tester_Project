document.getElementById('age').addEventListener('click', () => {
    const birthDate = new Date(document.getElementById('date').value);
    const today = new Date();
    console.log("Birth Date:", birthDate);
    console.log("Today's Date:", today);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDay() - birthDate.getDay();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age;
    }

    console.log("Age:", age);

    const result = document.getElementById('dateResult');
    const adultImage = document.getElementById('adult');
    const seniorImage = document.getElementById('senior');
    const minor = document.getElementById('bye');
    if (age >= 0 && age <= 120) {
        if (age < 18) {
            result.innerHTML = "You are a minor";
            adultImage.classList.add('d-none');
            seniorImage.classList.add('d-none');
            minor.classList.remove('d-none');
        } else if (age >= 18 && age < 65) {
            result.innerHTML = "You are an adult";
            adultImage.classList.remove('d-none');
            seniorImage.classList.add('d-none');
            minor.classList.add('d-none');

        } else if (age >= 65) {
            result.innerHTML = "You are a senior";
            adultImage.classList.add('d-none');
            seniorImage.classList.remove('d-none');
            minor.classList.add('d-none');

        }
    } else {
        result.innerHTML = "Please enter a valid date";
        adultImage.classList.add('d-none');
        seniorImage.classList.add('d-none');
        minor.classList.add('d-none');


    }
});

document.getElementById('reset').addEventListener('click', () => {
    document.getElementById('date').value = '';
    document.getElementById('dateResult').innerHTML = '';
    document.getElementById('adult').classList.add('d-none');
    document.getElementById('senior').classList.add('d-none');
    document.getElementById('bye').classList.add('d-none');
});