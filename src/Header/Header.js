import styled from "styled-components";
import * as React from "react";

function Header(props) {
    const Wrapper = styled.h1`
            text-align: center;
        `;

    return (
        <Wrapper>
            <div>
                {props.title}
            </div>
        </Wrapper>
    )
}

export default Header;