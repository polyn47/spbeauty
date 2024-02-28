import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";
function AboutCompany() {
    return (
        <div className='col mx-4 my-3 p-5'>
            <div className='row'><Heading/></div> {/* Заголовок и кнопка справа */}
            <div className='row'><div className='row'>
                <div className='col'><General/></div>  {/* Основная информация вроде названия, типа и телефона */}
                <div className='col'><Addresses/></div>   {/* Список доступных адресов заведений */}
            </div></div>
        </div>
    );
}

export default AboutCompany;