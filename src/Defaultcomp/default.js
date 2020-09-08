import React from 'react'; 
import axios from "axios" ; 
import classes  from "./default.module.css"
import "./default.css"
class LeftSide1 extends React.Component {

 

render(){

return(
  
               <div className= {classes.playerWrapper}>
                <iframe className ={classes.videoplayer} src={`https://player.vimeo.com/video/189860660`}  frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" __idm_id__="514841601"></iframe>
                <div>
                <div className={classes.videoactions}>
                <p><span className={classes.viewscount}>45454</span> views</p>
                 <div className={classes.parent}>
                <i class="far fa-heart" aria-hidden="true"></i>
                <i class="far fa-comment-alt" aria-hidden="true"></i>
                <i class="far fa-bookmark" aria-hidden="true"></i>
                </div>
                </div>
                <h3 className={classes.videotitle}>done</h3>
                <p className={classes.videodescription}>ok fine</p>
                </div>
                </div> 
            )
        


 





}
 }

 

export default LeftSide1 ;  