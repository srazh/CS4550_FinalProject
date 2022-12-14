import {Link} from "react-router-dom";
const HeaderComponent = (token) => {
  return(
      <>
        <nav className="navbar navbar-expand navbar-dark bg-primary d-block">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarColor02">
              <div className="row flex-fill">
                <div className="col-2">
                  <ul className="navbar-nav">

                    <li className="nav-item">
                      {/*{token === '' &&*/}
                      <a href="http://localhost:8888"
                         className="nav-link">Login</a>
                      {/*}*/}
                    </li>
                    <li className="nav-item">
                      <Link to="/" className="nav-link">Home</Link>
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
                      <Link to="profile" className="nav-link">Profile</Link>
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