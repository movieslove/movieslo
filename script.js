function toggleOttDetails(ottId) {
    const details = document.getElementById(ottId);
    const activeDetails = document.querySelector('.ott-details.active');
    if (activeDetails) {
        activeDetails.classList.remove('active');
    }
    details.classList.toggle('active');
}

function purchasePlan(planName) {
    alert(`You have selected to purchase: ${planName}`);
    window.location.href = 'purchase.html'; // Redirect to purchase.html
}

const cursorAnimation = document.getElementById('cursor-animation');

document.addEventListener('mousemove', e => {
    cursorAnimation.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;");
});

const sparkleContainer = document.getElementById('sparkle-container');

document.addEventListener('mousemove', e => {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.top = `${e.pageY}px`;
    sparkle.style.left = `${e.pageX}px`;
    sparkleContainer.appendChild(sparkle);

    setTimeout(() => {
        sparkleContainer.removeChild(sparkle);
    }, 1000);
});

