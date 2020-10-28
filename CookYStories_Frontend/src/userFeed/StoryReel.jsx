import React, {Component} from 'react'
import Story from './Story'
import '../css/userfeed-css/StoryReel.css'
import rushang from '../Images/rushang.PNG'
import prathma from '../Images/Prathma.PNG'
import chintu from '../Images/Chintu.PNG'
import pratik from '../Images/Pratik.PNG'

export default class StoryReel extends Component {
    render() {
        return (
            <div className="storyReel">
                <Story
                    image={rushang}
                    title='Rushang Shah' 
                />
                <Story
                    image={prathma}
                    title='Prathma Rastogi' 
                />
                <Story
                    image={chintu}
                    title='Chintamani Satavlekar' 
                />
                <Story
                    image={pratik}
                    title='Pratik Bhatia' 
                />
                <Story
                    image={rushang}
                    title='Rushang Shah' 
                />
                <Story
                    image={prathma}
                    title='Prathma Rastogi' 
                />
                <Story
                    image={chintu}
                    title='Chintamani Satavlekar' 
                />
                <Story
                    image={pratik}
                    title='Pratik Bhatia' 
                />
                
                
            </div>
        )
    }
}