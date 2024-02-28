import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '217px' : props.minWidth;
    const Button = styled.div`
        border-radius: 24px;
        border: 1px solid var(--Steel-Gray-500, #64748B);
        background: var(--White, #FFF);
        min-width: ${minWidth};
        color: #64748B;
        &:hover {
            opacity: 0.8;
            border: 1px solid var(--White, #FFF);
        }
        &:active {
            opacity: 0.6;
            border: 1px solid var(--White, #FFF);
        }
    `;
    return (
        <Clickable >
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default SecondaryButton;