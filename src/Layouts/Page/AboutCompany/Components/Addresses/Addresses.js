import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='card d-flex justify-content-between p-4'>
            <div>
            <div className='title'>Адреса заведений</div>
            <div className='d-flex flex-column gap-1 pt-4'>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
            </div></div>
            <div className='d-inline-flex pt-4'>
                <SecondaryButton>Добавить филиал</SecondaryButton>
            </div>
        </div>
    );
}

export default Addresses;