import styled from "styled-components";

export const PopLayout = styled.div`
    position: fixed;
    z-index: 999;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: hsla(215, 13%, 49%, .8);

    .pop-win {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 30rem;
        background: hsl(220, 15%, 12%);
        border-radius: 1rem;
    }

    h1 {
        padding: .5rem;
        font-size: 24px;
        font-weight: normal;
        font-family: ht, sans-serif;
        text-align: center;
        color: #fff;
    }

    .group {
        text-align: center;
        h2 {
            text-align: left;
            padding: .5rem 1.5rem;
            margin: .5rem 1rem;
            color: #fff;
            border-bottom: 1px solid #fff;
        }
        input, label, span {
            display: inline-block;
            border: 0;
            height: 2rem;
            line-height: 2rem;
            margin: .6rem .8rem;
            color: #fff;
        }
        label {
            min-width: 2rem;
            text-align: right;
        }
        input {
            padding: 0 .4rem;
            min-width: 10rem;
            border-radius: 6px;
            text-align: left;
            color: hsl(220, 15%, 12%);
            font-size: 16px;
        }
        span {
            min-width: 2rem;
            text-align: left;
        }
    }

    .submit {
        border-top: 1px solid #fff;
        margin: 1rem;
        padding: .5rem 1.5rem;
    }
`;

export const Button = styled.div`
    display: inline-block;
    margin: .6rem .8rem;
    padding: .6rem .5rem;
    min-width: 4rem;
    border-radius: 6px;
    color: #fff;
    text-align: center;
    cursor: default;
    ${(props)=>props.primary?"background: hsl(16, 99%, 60%);min-width:12rem;":"background: hsl(105, 64%, 42%);"};

    &:hover {
        
        ${(props)=>props.primary?"background: hsl(16, 99%, 55%);min-width:12rem;":"background: hsl(105, 64%, 50%);"};
    }
`;