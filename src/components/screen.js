import Rooms from "./scrollbar";
import Searchbox from "./Blog";
import img01 from '../images/pexels-pixabay-210604.jpg';
import img02 from '../images/pexels-pixabay-271618.jpg';
import img03 from '../images/room3.jpg';
import img04 from '../images/room5.jpg';
import img05 from '../images/room6.jpg';
import Mail from "./footer01";


const Screen = () => {
    const location = {loc1:'Kano', loc2:'Lagos', loc3:'Abuja'};
    return (
        <div className="footer">
            <Searchbox />
            <Rooms  img={img01}  rloc={location.loc1} name='Bristal palace hotel, lekki phase 1.'/>
            <Rooms  img={img02} rloc={location.loc2} name='Brain palace hotel, Along side airport road.'/>
            <Rooms img={img03} rloc={location.loc1} name='karmalace hotel, Along side airport road.' />
            <Rooms img={img04} rloc={location.loc3}  name='Britel hotel, Along side airport road.'/>
            <Rooms img={img05} rloc={location.loc3} name='Rilace hotel, Along side airport road.'/>
            <Rooms img={img02} rloc={location.loc2} name='Rain palace hotel, Along side airport road.'/>
            <hr /> <hr />
            <Mail />
        </div>
    );
}
 
export default Screen;
