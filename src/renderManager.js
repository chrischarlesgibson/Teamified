function renderManagerCard(Manager) {
  return ` <div class="container">
            <div class="row">
              <div class="col-12 col-md-4">
                <div class="card" style="width: 18rem">
                  <div class="card-header">
                    <h1 class="d-flex justify-content-center"> ${Manager.name}</h1>
                    <h5 class="d-flex justify-content-center">${Manager.role}</h5>
                    <span class="<span class="material-symbols-outlined">
                    coffee
                    </span> d-flex justify-content-center"
                      >coffee</span
                    >
                  </div>
          
                  <div class="card-body">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item border">ID: ${Manager.id}</li>
                      <li class="list-group-item border">Email:
                      <a class="email" href="mailto:
                        ${Manager.email}"target="_blank">${Manager.email}</a>
                      </li>
                      <li class="list-group-item border">Office: 
                      ${Manager.office}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
}

module.exports = renderManagerCard;