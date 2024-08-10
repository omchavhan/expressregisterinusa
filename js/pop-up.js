document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        question.classList.toggle('active');
        const answer = question.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});

function myFunction() {
    const element = document.getElementById("price01");
    element.scrollIntoView();
}
function myBlog() {
    const element = document.getElementById("blog01");
    element.scrollIntoView();
}

function myFunction() {
    const element = document.getElementById("price01");
    element.scrollIntoView();
}
function myBlog() {
    const element = document.getElementById("blog01");
    element.scrollIntoView();
}

const modal = document.getElementById("formModal");
const btns = document.querySelectorAll(".btn-green.add");
const span = document.getElementsByClassName("close")[0];
const form = document.getElementById("launchForm");

btns.forEach(btn => {
    btn.onclick = function (e) {
        e.preventDefault();
        modal.style.display = "block";
    }
});

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

form.onsubmit = function (e) {
    e.preventDefault();

    modal.style.display = "none";
}

$(function () {

    // Get the form.
    var form = $('#contact-form');

    // Get the messages div.
    var formMessages = $('.form-messege');

    // Set up an event listener for the contact form.
    $(form).submit(function (e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
            .done(function (response) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');

                // Set the message text.
                $(formMessages).text(response);

                // Clear the form.
                $('#contact-form input,#contact-form textarea').val('');
            })
            .fail(function (data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');

                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
    });

});