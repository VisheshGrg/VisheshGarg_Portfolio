import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";
import { style } from "@mui/system";

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
    padding-bottom: 70px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 99%, 0 100%);
`;

const Wrapper = styled.div`
    max-width: 1100px;
    postion: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 12px;
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

const SkillsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    justify-content: center;
    gap: 30px;
`;

const Skill = styled.div`
    width: 100%;
    max-width: 500px;
    background-color: ${({theme}) => theme.card};
    border: 0.1px solid #854CE6;
    border-radius: 16px;
    padding: 18px 36px;

    @media (max-width: 768px){
        max-width: 400px;
        padding: 10px 36px;
    }
    @media (max-width: 500px){
        max-width: 330px;
        padding: 10px 36px;
    }
`;

const SkillTitle = styled.h2`
    font-size: 28px;
    font-weight: 600;
    color: ${({theme}) => theme.text_secondary};
    margin-bottom: 20px;
    text-align: center;
`;

const SkillList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 20px;
`;

const SkillItem = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
    font-size: 14px;
    color: ${({theme}) => theme.text_primary+80};
    border-radius: 12px;
    border: 0.1px solid ${({theme}) => theme.text_primary+80};
    padding: 10px 14px;
    font-weight: 400;

    @media (max-width: 768px){
        font-size: 13px;
        padding: 8px 12px;
    }

    @media (max-width: 500px){
        font-size: 13px;
        padding: 7px 12px;
    }
`;

const SkillImage = styled.img`
    width: 24px;
    height: 24px;
`;

const Skills = () => {
    return(
        <Container id="skills">
            <Wrapper>
                <Title>Skills</Title>
                <Desc>Here are some of the skills I've been honing over the past two years</Desc>
                <SkillsContainer>
                    {skills.map((item) => (
                        <Skill>
                            <SkillTitle>{item.title}</SkillTitle>
                            <SkillList>
                                {
                                    item.skills.map((skill) => (
                                        <SkillItem>
                                            <SkillImage src={skill.image} />
                                            {skill.name}
                                        </SkillItem>
                                    ))
                                }
                            </SkillList>
                        </Skill>
                    ))}
                </SkillsContainer>
            </Wrapper>
        </Container>
    )
};

export default Skills;