import React from 'react'; 
import axios from "axios" ; 
import classes  from "./leftcomponent.module.css"

class LeftSide extends React.Component {

    state = {
        videoList: [],
    }

    componentDidMount() {
        axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/video")
        .then(response => {
            this.setState({videoList: [...response.data]}); 
            
        }) 
       
        .catch(err => {
            console.log('Call Failed!!');
        });
    } 
render(){
    
return( 
   <div className= {classes.playerWrapper}> 
      
   { this.state.videoList.map((item =>{
        console.log(item) 
        if (item.id == this.props.props.match.params.videoId) {
            return( 
           
                <div className= {classes.playerWrapper1}>
                <iframe className ={classes.videoplayer} src={`https://player.vimeo.com/video/${item.vimeoId}`}  frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" __idm_id__="514841601"></iframe>
                <div>
                <div className={classes.videoactions}>
                <p><span className={classes.viewscount}>{item.views}</span> views</p>
                <div className ={classes.Parent}>
                <i class="far fa-heart" aria-hidden="true"></i>
                <i class="far fa-comment-alt" aria-hidden="true"></i>
                <i class="far fa-bookmark" aria-hidden="true"></i>
                </div>
                </div>
                <h3 className={classes.videotitle}>{item.title}</h3>
                <p className={classes.videodescription}>{item.description}</p>
                </div>
                </div> 
            ) } } ))
        
      
} 
</div>
)

} }
export default LeftSide ;  