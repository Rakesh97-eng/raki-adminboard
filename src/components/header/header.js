import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import CloseIcon from '@mui/icons-material/Close';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Navcontext } from "../../context/navcontext";


const Header = () => {
  const {dispatch,value} = useContext(Navcontext);
  const opennav = ()=>{
    dispatch({type:"OpenNav"})
  }
  
  return (
    <>
      <div className="headcontainer">
        <div className="headleft">
          Materially
          <span className="hamburger" onClick={opennav}>
            {value?<ArrowLeftIcon/>: <MenuIcon/>}
           
            </span>
        </div>
        <div className="headright">
            <input type="search" placeholder="search"/>
            <span className="headicon"> <FontAwesomeIcon icon={faHome} /></span>
            <span className="headicon"><FontAwesomeIcon icon={faHome}/></span>
            <span className="headicon"><FontAwesomeIcon icon={faHome}/></span>
        </div>
      </div>
    </>
  );
};

export default Header;
