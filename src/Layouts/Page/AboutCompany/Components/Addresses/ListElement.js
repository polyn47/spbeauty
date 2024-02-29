import styled from 'styled-components';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';
import IconOnlyButton from '../../../../../Components/IconOnlyButton.js';

const Option = styled.div`
    color: #0F172A;
`;

function ListElement(props) {
    return (
            <div className='d-flex flex-row align-items-center align-self-stretch gap-2 my-3'>
                <Option className='flex-grow-1'>{props.children}</Option>
                <IconOnlyButton minWidth='28' icon={<EditIcon/>}/>
                <IconOnlyButton minWidth='28' icon={<RemoveIcon/>}/>
            </div>
    )
}

export default ListElement;