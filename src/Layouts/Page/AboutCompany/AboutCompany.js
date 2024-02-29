import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";
function AboutCompany() {
    return (
        <div className='pt-5 mt-3 px-5 mx-4'>
            <Heading/> {/* Заголовок и кнопка справа */}
            <div className='row pt-5'>
                <div className='col'><General/></div>  {/* Основная информация вроде названия, типа и телефона */}
                <div className='col'><Addresses/></div> {/* Список доступных адресов заведений */}
            </div>
        </div>
    );
}

export default AboutCompany;