



const modal = document.getElementById("companyLaunchModal");
const closeBtn = document.getElementsByClassName("custom-close")[0];

// Function to open the modal
function openModal() {
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Attach event listeners to all buttons with the class "trigger-modal"
document.querySelectorAll('.trigger-modal').forEach(button => {
    button.onclick = function() {
        openModal();
    }
});

// Close the modal when the user clicks on <span> (x)
closeBtn.onclick = function() {
    closeModal();
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}