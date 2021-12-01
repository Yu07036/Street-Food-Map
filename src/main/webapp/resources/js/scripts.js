/*!
* Start Bootstrap - Scrolling Nav v5.0.4 (https://startbootstrap.com/template/scrolling-nav)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE)
*/
//
// Scripts
//

var contentModal = document.getElementById('contentModal');
var modifyModal = document.getElementById('modifyModal');
var deleteModal = document.getElementById('deleteModal');

var no;
var content;
var title;
var date;
contentModal.addEventListener('show.bs.modal', function (event) {
    // Button that triggered the modal
    var button = event.relatedTarget;
    // Extract info from data-bs-* attributes


    var n_content = button.getAttribute('data-bs-content');
    var n_title = button.getAttribute('data-bs-title');
    var n_date = button.getAttribute('data-bs-date');
    var n_no = button.getAttribute('data-bs-no');



    if (n_content!=null || n_title!=null || n_date!=null) {
        content = n_content;
        title = n_title;
        date = n_date;
        no = n_no;
    }
    // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    //
    // Update the modal's content.
    var modalTitle = document.getElementById('contentModalLabel');
    var modalBodyInput = document.getElementById('contentModalBody');
    var modalFooter = document.getElementById('contentModalFooter');
    modalTitle.innerHTML = title;
    modalBodyInput.innerHTML = content;
    modalFooter.innerHTML = date;
});

modifyModal.addEventListener('show.bs.modal', function (event) {
    var modalNo = document.getElementById('modifyModalNo');
    var modalTextInput = document.getElementById('modifyModalTitle');
    var modalTextArea = document.getElementById('modifyModalContent');
    modalNo.value = no;
    modalTextInput.value = title;
    modalTextArea.innerHTML = content;
});

deleteModal.addEventListener('show.bs.modal', function (event) {
    var modalNo = document.getElementById('deleteModalNo');
    modalNo.value = no;
});

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

