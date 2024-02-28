import styled from "styled-components";

const Input = styled.input`
    outline: none;
    border-radius: 24px;
    border: 1px solid var(--Steel-Gray-200, #E2E8F0);
    background-color: var(--Steel-Gray-50, #F8FAFC);
    color: var(--Steel-Gray-900, #0F172A);
    &:hover {
        opacity: 0.8;
    }
    width: 447px;
`;

function TitledTextInput({title, def}) {
    const Title = title === undefined ? 
        (<div></div>) : 
        (<div className='caption-gray'>{title}</div>);
    return (
        <div className='d-flex flex-column gap-2'>
            {Title}
            <Input className='px-3 py-2' defaultValue={def} ></Input>
        </div>
    );
}

export default TitledTextInput;