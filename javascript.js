// On DOMContentLoaded, animate the button-1, button-2, and button-3 elements
window.addEventListener('DOMContentLoaded', function() {
  // Create an array of the button elements you want to animate
  // To replicate: add more selectors to this array for more buttons
  var btns = [
    document.querySelector('.button-1'), // Selects the first button by class
    document.querySelector('.button-2'), // Selects the second button by class
    document.querySelector('.button-3')  // Selects the third button by class
  ];

  // Loop through each button and apply animation logic
  btns.forEach(function(btn, i) {
    if (btn) {
      // Start hidden and with no animation
      btn.style.opacity = '0'; // Make button invisible initially
      btn.style.animation = 'none'; // Remove any previous animation

      // Add mouseenter event to play MoveUp animation on hover
      // To replicate: change 'MoveUp' to your desired keyframes
      btn.addEventListener('mouseenter', function() {
        btn.style.animation = 'none'; // Reset animation
        void btn.offsetWidth; // Force reflow to restart animation
        btn.style.animation = 'MoveUp 0.5s ease-in-out forwards'; // Play MoveUp animation
      });

      // Add mouseleave event to play MoveDown animation when mouse leaves
      // To replicate: change 'MoveDown' to your desired keyframes
      btn.addEventListener('mouseleave', function() {
        btn.style.animation = 'none'; // Reset animation
        void btn.offsetWidth; // Force reflow to restart animation
        btn.style.animation = 'MoveDown 0.5s ease-in-out forwards'; // Play MoveDown animation
      });

      // Animate the button in on page load with a staggered delay
      // To replicate: adjust the delay or animation as needed
      setTimeout(function() {
        btn.style.animation = 'MoveIn1 1s ease-in-out forwards'; // Play MoveIn1 animation
        btn.style.opacity = '1'; // Make button visible
      }, 100 + i * 500); // Stagger each button by 0.5s
    }
  });
});
