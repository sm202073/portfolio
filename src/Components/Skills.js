import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'Object Oriented Programming in Java'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar 
                            title={'HTML, CSS, JavaScript'}
                            width={'65%'}
                            text={'65%'}
                        />
                        <ProgressBar 
                            title={'React JS'}
                            width={'60%'}
                            text={'60%'}
                        />
                        <ProgressBar 
                            title={'Visual Studio Code'}
                            width={'50%'}
                            text={'50%'}
                        />
                        <ProgressBar 
                            title={'Python'}
                            width={'40%'}
                            text={'40%'}
                        />
                        <ProgressBar 
                            title={'React JS'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar 
                            title={'Github & Git'}
                            width={'75%'}
                            text={'75%'}
                        />

                        <ProgressBar 
                            title={'Features and Technical Writing'}
                            width={'60%'}
                            text={'60%'}
                        />

                        <ProgressBar 
                            title={'Intellectually curious & willing to learn'}
                            width={'100%'}
                            text={'100%'}
                        />

                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
