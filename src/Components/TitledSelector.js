import styled from "styled-components";

const Select = styled.select`
    border-radius: 24px;
    border: 1px solid var(--Steel-Gray-200, #E2E8F0);
    background-color: var(--Steel-Gray-50, #F8FAFC);
    color: #0F172A;
`;

function TitledSelector({title, options}) {
    const Title = title === undefined ? 
        (<div></div>) : 
        (<div>{title}</div>);
    return (
        <div className='d-inline-flex flex-column gap-2'>
            {Title}
            <Select className='px-3 py-2'>
                {options.map(optionName => {
                    return (
                        <option key={optionName}>{optionName}</option>
                    );
                })}
            </Select>
        </div>
    );
}

export default TitledSelector;