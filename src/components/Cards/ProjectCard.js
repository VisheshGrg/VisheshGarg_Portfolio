import React from "react";
import styled from "styled-components";

const Card = styled.div`
    width: 330px;
    height: 490px;
    background-color: ${({theme}) => theme.card};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;

    &:hover{
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }
`;

const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: ${({theme}) => theme.white};
    border-radius: 10px;
    object-fit: cover;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`;

const Tags = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
    align-items: center;
`;

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`;

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme}) => theme.primary};
    background-color: ${({theme}) => theme.primary+15};
    padding: 2px 8px;
    border-radius: 10px;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({theme}) => theme.text_secondary};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    margin-left: 2px;
    color: ${({theme}) => theme.text_secondary+80};

    @media (max-width: 768px){
        font-size: 10px;
    }
`;

const Description = styled.div`
    font-weight: 400;
    font-size: 14px;
    color: ${({theme}) => theme.text_secondary+99};
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    margin-top: 8px;
    max-width: 100%;
`;

const ButtonGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
`;

const Button = styled.a`
    background-color: transparent;
    color: ${({theme}) => theme.primary};
    border: 0.1px solid ${({theme}) => theme.primary};
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 8px;
    font-size: 0.8rem;
    font-weight: 400;
    cursor: pointer;
    text-decoration: none;

    :hover{
        background-color: ${({theme}) => theme.primary};
        color: ${({theme}) => theme.white};
    }
`;


const ProjectCard = ({project,setOpenModal}) => {
    return (
        <Card onClick={() => setOpenModal({state: true, project: project})}>
            <Image src={project.image} />
            <Tags>
                {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            {/* <ButtonGroup>
                <Button href={project.github} target="_blank">View Repo</Button>
                <Button href={project.webapp} target="_blank">Deployed Link</Button>
            </ButtonGroup> */}
        </Card>
    )
}

export default ProjectCard;