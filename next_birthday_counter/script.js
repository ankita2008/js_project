// let timer;

// function calculateBirthday() {
//   const dob = document.getElementById("dob").value;

//   if (!dob) {
//     alert("Please select your date of birth");
//     return;
//   }

//   const birthDate = new Date(dob);

//   // old timer stop
//   clearInterval(timer);

//   timer = setInterval(() => {
//     const today = new Date();

//     let nextBirthday = new Date(
//       today.getFullYear(),
//       birthDate.getMonth(),
//       birthDate.getDate()
//     );

//     if (nextBirthday < today) {
//       nextBirthday.setFullYear(today.getFullYear() + 1);
//     }

//     const diff = nextBirthday - today;

//     // ⏱️ convert
//     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//     const minutes = Math.floor((diff / (1000 * 60)) % 60);
//     const seconds = Math.floor((diff / 1000) % 60);

//     document.getElementById("result").innerText =
//       `🎉 ${days}d ${hours}h ${minutes}m ${seconds}s left`;

//   }, 1000);
// }



// 👉 apni full DOB set karo
const birthYear = 2005;
const birthMonth = 7;   // aug (0 = Jan)
const birthDate = 24;

function startCountdown() {
  setInterval(() => {
    const today = new Date();

    // 🎂 Next Birthday
    let nextBirthday = new Date(
      today.getFullYear(),
      birthMonth,
      birthDate
    );

    if (nextBirthday < today) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const diff = nextBirthday - today;

    // ⏱️ Time convert
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    // 🎉 Age calculate
    let age = today.getFullYear() - birthYear;

    if (
      today.getMonth() < birthMonth ||
      (today.getMonth() === birthMonth && today.getDate() < birthDate)
    ) {
      age--;
    }

    document.getElementById("result").innerText =
      `🎂 Age: ${age} years\n⏳ ${days}d ${hours}h ${minutes}m ${seconds}s left`;

  }, 1000);
}

startCountdown();