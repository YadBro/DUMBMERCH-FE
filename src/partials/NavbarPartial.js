import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import DumbMerchLogo from '../assets/img/DumbMerch_Logo.png'

export default function NavbarPartial(){
    return(
        <nav className="navbar fw-bold navbar-expand-lg navbar-dark p-4">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img src={DumbMerchLogo} alt="DumbMerch Logo" width="70" height="68.22" />
            </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-lg-0">
                </ul>
                <div className="d-flex">
                    <ul className="navbar-nav me-auto mb-lg-0">
                        <li className="nav-item dropdown me-2">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <FontAwesomeIcon icon={solid('cart-shopping')} />
                            <sup className="text-white">3+</sup>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item me-2">
                            <a className="nav-link active text-white" aria-current="page" href="#">Complain</a>
                        </li>
                        <li className="nav-item me-2">
                            <a className="nav-link fw-900 text-white" aria-current="page" href="#">Category</a>
                        </li>
                        <li className="nav-item me-2">
                            <a className="nav-link text-white" aria-current="page" href="#">Product</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" aria-current="page" href="#">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    )
}