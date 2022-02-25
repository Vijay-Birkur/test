import React,{useState} from 'react'; 


const HcdHome = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return <>


<div className="modal-dialog" show={show}>

        <div className="modal-content" style={{"borderRadius":"15px"}}>
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Add Employee Details</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Client Name</label>
                <input
                  type="email"
                  className="form-control"
                  id="imageUrl"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Candidate Name</label>
                <input
                  type="email"
                  className="form-control"
                  id="imageUrl"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Applicable Vacancy</label>
                <input
                  type="email"
                  className="form-control"
                  id="taskTitle"
                  aria-describedby="emailHelp"
                  placeholder="Job Role"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Hourly Rate</label>
                <input
                  type="email"
                  className="form-control"
                  id="taskType"
                  aria-describedby="emailHelp"
                  placeholder="In Euros"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Tentative start Date</label>
                <input
                  type="email"
                  className="form-control"
                  id="taskDesc"
                  aria-describedby="emailHelp"
                  placeholder="DD/MM/YYYY" />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button data-bs-dismiss="modal" onclick = "generatePDF()" type="button" className="btn btn-primary">Generate PDF</button>
          </div>
        </div>
      </div>
   
      <div class="modal " id="openModal" tabindex="-3">
      <div class="modal-dialog ">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Task View</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="card shadow-sm task__card " >

              <div class="card-header d-flex justify-content-end task__card__header">
        
              </div>
              <div class="card-body"  >
                        <img  src="" alt="Card image cap" id="openImage" class="card-img-top " width="height=200rem" />
              
                <h1 class="task__card__title" id="openTitle"></h1>
                <p class="description trim-3-lines font-large " id="openDesc" >
                 
                </p>
                <div class="tags text-white d-flex flex-wrap">
                  <h3>
                    <span class="badge h1 bg-primary m-1" id="openType"></span>
                  </h3>
                  
                </div>
              </div>
              <div class="card-footer">
                
              </div>
            </div>
            </div>
            

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>

<nav className="px-1 navbar navbar-expand-lg navbar-dark bg-light" id="navbar">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-primary" id="mainText" href="#" style={{}}>HCD generation App</a>
        <button
          className="navbar-toggler bg-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active text-secondary fw-bold" href="#"
                >Home
                <span className="visually-hidden">(current)</span>
              </a>
            </li>
          </ul>

          <button
            type="button"
            className="btn btn-sm btn-primary ml-auto"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={handleShow}
          >
            <i className="fas fa-plus me-2"></i>Add Employee
          </button>
        </div>
      </div>
    </nav>
    <div className="container">
      <section className="mt-4">
        <div className="row justify-content-center mt-4">
          <div className="col-md-6 col-lg-4 mt-3">
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-dark" type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="mt-1">
        <div className="row task__container">
          
         
            
              </div>
        
      </section>
    </div>
    

  </>
};

export default HcdHome;
