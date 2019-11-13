import React from 'react'

function ContentContainer(){
    return (
        <div className="content__container">
            <ContentBox></ContentBox>
            <ContentBox></ContentBox>
            <ContentBox></ContentBox>
        </div>
    )
}

function ContentBox(){
    return (
        <div className="content__box">
            <ImageBox></ImageBox>
            <Content></Content>
        </div>
    )
}

function Content(){
    return(
        <div className="content">
            <p>Content</p>
        </div>
    )
}

function ImageBox(){
    return(
        <div className = "image__Box">
            <img src="#" alt = "image2 title"></img>
        </div>
    )
}

export default ContentContainer