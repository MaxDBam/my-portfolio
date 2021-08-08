'use strict';

console.log('Starting up');

function initPage() {
  renderProjectCards();
}

function renderProjectCards() {
  var elProjCards = document.querySelector('.cards');
  const projectCards = getProjects();
  var numOfModal = 0;
  var strHTMLs = projectCards.map(project => {
    return `
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfoliomodal${numOfModal++}" onclick="renderProjectModal(${numOfModal})">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/${project.id}.jpg" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${project.name}</h4>
            <p class="text-muted badge badge-pill badge-warning">${project.labels}</p>
          </div>
        </div>
        `
  });
  elProjCards.innerHTML = strHTMLs.join('');

}

function renderProjectModal(modalNum) {

  var elChosenModal = document.querySelector('.chosen-modal');
  console.log(getProjects()[modalNum - 1]);

  var strHTMLs =  `
        <div class="portfolio-modal modal fade" id="portfolioModal${modalNum}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="modal-body">
                    <!-- Project Details Go Here -->
                    <h2>${getProjects()[modalNum - 1].name}</h2>
                    <p class="item-intro text-muted">${getProjects()[modalNum - 1].title}</p>
                    <img class="img-fluid d-block mx-auto" src="img/portfolio/${getProjects()[modalNum - 1].id}.jpg" alt="">
                    <p>${getProjects()[modalNum - 1].desc}</p>
                    <ul class="list-inline">
                      <li>Date: ${getProjects()[modalNum - 1].publishedAt}</li>
                      <li>Client: CA</li>
                      <li>Category: ${getProjects()[modalNum - 1].labels}</li>
                    </ul>
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                        <i class="fa fa-times"></i>
                        Close Project</button>
                    <a target="_blank" href="${getProjects()[modalNum - 1].url}"><button class="btn btn-primary">Check it Out</button></a>    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        `

  elChosenModal.innerHTML = strHTMLs;
  $('.modal').modal('show');
}

function onSubmitMail() {
  var elEmailInput = $('input[type="email"]').val();
  var elSubjectInput = $('input[type="text"]').val();
  var elMessageInput = $('textarea').val();
  if (!elEmailInput) {
    return;
  }
  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${elEmailInput}&su=${elSubjectInput}&body=${elMessageInput}`);
}