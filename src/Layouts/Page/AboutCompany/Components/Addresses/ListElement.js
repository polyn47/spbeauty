import styled from 'styled-components';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';
import IconOnlyButton from '../../../../../Components/IconOnlyButton.js';

const Option = styled.div`
    color: #0F172A;
    width: 405px;
`;

function ListElement(props) {
    return (
        <div className='d-flex flex-row align-items-center'>
            <Option className='flex-grow-1 py-3'>{props.children}</Option>
            <div className='d-inline-flex flex-row gap-1'>
            <IconOnlyButton minWidth='28' icon={<EditIcon/>}/>
            <IconOnlyButton minWidth='28' icon={<RemoveIcon/>}/></div>
        </div>
    );
}

export default ListElement;