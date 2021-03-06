import React, {Component} from 'react'
import Story from './Story'
import '../css/StoryReel.css'
import rushang from '../../utils/Images/rushang.PNG'
import prathma from '../../utils/Images/Prathma.PNG'
import chintu from '../../utils/Images/Chintu.PNG'
import pratik from '../../utils/Images/Pratik.PNG'
import { Grid } from '@material-ui/core'

export default class StoryReel extends Component {
    render() {
        return (
            <div className="storyReel">
                <Grid container direction="row">
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
                </Grid>
                    
               
               
                
            
            </div>
        )
    }
}