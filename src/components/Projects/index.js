import { StyledEngineProvider } from "@mui/material";
import { style } from "@mui/system";
import React, { useState } from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import ProjectCard from "../Cards/ProjectCard";

const Container = styled.div`
    background: linear-gradient(
        343.07deg,
        rgba(132,59,206,0.06) 5.71%,
        rgba(132,59,206,0) 64.83%
    );
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
`;

const Wrapper = styled.div`
    max-width: 1350px;
    postion: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 12px;
    padding: 10px 0px 100px 0;
`;

const Title = styled.div`
    font-size: 42px;
    font-weight: 600;
    text-align: center;
    margin-top: 20px;
    color: ${({theme}) => theme.text_primary};

    @media screen and (max-width: 768px){
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    max-width: 800px;
    text-align: center;
    color: ${({theme}) => theme.text_secondary};

    @media screen and (max-width: 768px){
        font-size: 15px;
    }
`;

const ToggleGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({theme}) => theme.primary};
    color: ${({theme}) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0;

    @media (max-width: 768px){
        font-size: 12px;
    }
`;

const ToggleButton = styled.div`
    padding: 8px 18px;
    cursor: pointer;
    border-radius: 6px;

    ${({active, theme }) => 
        active &&
        `
            background-color: ${theme.primary+20};
        `
    }

    &:hover{
        background-color: ${({theme}) => theme.primary+10};
    }

    @media (max-width: 768px){
        padding: 6px 8px;
        border-radius: 4px;
    }
`;

const Divider = styled.div`
    width: 1.5px;
    background-color: ${({theme}) => theme.primary};
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 28px;
`;

const Projects = ({openModal,setOpenModal}) => {
    const [toggle,setToggle] = useState("all");
    return(
        <Container id="Projects">
            <Wrapper>
                <Title>Projects</Title>
                <Desc>Here is the list of projects I have worked on during my coding journey.</Desc>

                <ToggleGroup>
                    {toggle === "all" ? (
                        <ToggleButton active value="all" onClick={() => setToggle("all")}>ALL</ToggleButton>
                    ):(
                        <ToggleButton value="all" onClick={() => setToggle("all")}>ALL</ToggleButton>
                    )}
                    <Divider/>
                    {toggle === "web app" ? (
                        <ToggleButton active onClick={() => setToggle("web app")}>WEB APP'S</ToggleButton>
                    ):(
                        <ToggleButton onClick={() => setToggle("web app")}>WEB APP'S</ToggleButton>
                    )}
                    <Divider/>
                    {toggle === "ml" ? (
                        <ToggleButton active onClick={() => setToggle("ml")}>MACHINE LEARNING</ToggleButton>
                    ):(
                        <ToggleButton onClick={() => setToggle("ml")}>MACHINE LEARNING</ToggleButton>
                    )}
                    <Divider/>
                    {toggle === "other" ? (
                        <ToggleButton active onClick={() => setToggle("other")}>OTHER</ToggleButton>
                    ):(
                        <ToggleButton onClick={() => setToggle("other")}>OTHER</ToggleButton>
                    )}
                </ToggleGroup>

                <CardContainer>
                    {toggle === "all" && projects.map((project) => <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />)}
                    {projects
                        .filter((item) => item.category === toggle)
                        .map((project) => (
                            <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
                        ))
                    }
                </CardContainer>
            </Wrapper>
        </Container>
    )
}

export default Projects;