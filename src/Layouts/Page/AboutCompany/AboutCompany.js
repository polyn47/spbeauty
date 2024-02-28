import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";
function AboutCompany() {
    return (
        <div className='d-flex flex-column gap-5 mx-4 px-5 my-5 py-3'>
            <Heading/> {/* Заголовок и кнопка справа */}
            <div className='d-inline-flex flex-row gap-5'>
                <General/>  {/* Основная информация вроде названия, типа и телефона */}
                <Addresses/> {/* Список доступных адресов заведений */}
            </div>
        </div>
    );
}

export default AboutCompany;