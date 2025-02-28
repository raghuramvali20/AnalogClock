const hoursHand = document.getElementById('hours');
    const minutesHand = document.getElementById('minuts');
    const secondsHand = document.getElementById('seconds');
    const numbers = document.querySelectorAll('.number');

    function updateClock() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        const hoursRotation = (hours % 12) * 30 + minutes * 0.5;
        const minutesRotation = minutes * 6;
        const secondsRotation = seconds * 6;

        hoursHand.style.transform = `rotate(${hoursRotation}deg)`;
        minutesHand.style.transform = `rotate(${minutesRotation}deg)`;
        secondsHand.style.transform = `rotate(${secondsRotation}deg)`;
    }

    setInterval(updateClock, 1000);
    updateClock();

    numbers.forEach((number, index) => {
        number.style.transform = `rotate(${index * 30}deg)`;
        const span = number.querySelectorAll('span');
        span.forEach((span) => {
            span.style.transform = `rotate(${-(index * 30)}deg)`;
        });
        
    });