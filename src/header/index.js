const HeaderComponent = () => {
  return(
      <>
        <nav className="navbar navbar-expand navbar-dark bg-primary d-block">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarColor02">
              <div className="row flex-fill">
                <div className="col-2">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link active" href="#">Home/logo?
                        <span className="visually-hidden">(current)</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-8">
                  <form className="d-flex">
                    <input className="form-control rounded-pill" type="text"
                           placeholder="Search Mingles"/>
                  </form>
                </div>
                <div className="col-2">
                  <ul className="navbar-nav float-end">
                    <li className="nav-item">
                      <a className="nav-link" href="#">Profile</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>

      </>
  );
}
export default HeaderComponent;