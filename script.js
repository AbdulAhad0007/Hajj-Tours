document.addEventListener("DOMContentLoaded", function() {
    const menuButtons = document.querySelectorAll(".menu-btn");

    menuButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior
            const pageToOpen = this.getAttribute("href");
            if (pageToOpen) {
                window.location.href = pageToOpen;
            }
        });
    });
});

function interBooking(){
    window.open("international-booking.html","_blank","width=1200px,height=800px")
    }

function sendButton(){
    alert("Now,Click on Send Button In mail to Proceed!")
    }    

    // Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}