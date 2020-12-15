import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 1rem;
`;

export const Input = styled.input`
    border: 2px solid #7BAAC4;
    display: block;
    width: 100%;
    font-size: 1rem;
    padding: .55rem .8rem;
    border-radius: 13px;
    background: white;
    transition: 0.2s;
    cursor: pointer;

    &:focus, &:hover {
        outline: none;
        border-color: #FF3D22;
    } 
    &:focus {
        transform: scale(1.02);
    box-shadow: black 2px 2px 4px;
    }
    
`;

export const Label = styled.label`
    display: block;
    font-size: 1rem;
    line-height: 1;
    padding-bottom: .4rem;
    font-weight: bold;
    color: #273746;
`