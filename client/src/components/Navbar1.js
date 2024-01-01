import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Navbar1() {
    return (

<nav class="navbar navbar-expand-lg navbar-dark px-4 bg-primary">
  <a class="navbar-brand" href="#">Home</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav px-5 mr-auto d-flex justify-content-between">
      <li class="nav-item active">
        <a class="nav-link" href="#">Shop <span class="sr-only">(current)</span></a>
      </li>

      <li class=" px-5 nav-item ">
        <NavDropdown  className='text-light'  title="BLOG" id="">
        <NavDropdown.Item eventKey="4.1">Left Sidebar</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Right Sidebar</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">No Sidebar</NavDropdown.Item>
      </NavDropdown>
      </li>

      <li class="nav-item ">
        <NavDropdown  className='text-light'  title="PAGES" >
        <NavDropdown.Item eventKey="4.1">Left Sidebar</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Right Sidebar</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">No Sidebar</NavDropdown.Item>
      </NavDropdown>
      </li>


      <li class=" px-5 nav-item">
        <a class="text-light nav-link" href="#">Contact Us</a>
      </li>
      <li class="nav-item">
        <a class="text-light nav-link" href="#">Features</a>
      </li>
    </ul>
    <span class=" text-light navbar-text">
      SPECIAL OFFERS !
    </span>
  </div>
</nav>
    )};