import React from "react";
import styled from "styled-components";


const StyledNasaPhoto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lightgrey;
    color: crimson;
`

const PhotoBorder = styled.div`
    border 10px solid green;
    background-color: orange;
`

const PhotoTitle = styled.h3`
    color: blue;
`


const NasaPhoto = (props) => {
    return (
        <StyledNasaPhoto className='nasa-photo-wrapper'>
            <PhotoTitle>{props.photo.title}</PhotoTitle>
            <p>{props.photo.date}</p>
            <PhotoBorder> 
                <img src={props.photo.hdurl} />
            </PhotoBorder> 
            <p className='explanation'>{props.photo.explanation}</p>
        </StyledNasaPhoto>
    );
}

export default NasaPhoto;