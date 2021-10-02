const counterSpan = document.getElementById("counter");

const startDate = new Date(2021, 8, 27, 9).getTime();

console.log(startDate);

const counter = () => {
  const counterTime = Date.now() - startDate;
  const days = Math.floor(counterTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((counterTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((counterTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((counterTime % (1000 * 60)) / 1000);
  counterSpan.innerText = `${days} Jours, ${hours} Heures, ${minutes} Minutes et ${seconds} Secondes.`
  setTimeout(counter, 1000);
}

counter();