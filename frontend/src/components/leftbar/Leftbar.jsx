import './leftbar.scss'
import Friends from '../../assets/friendship.png'
import Groups from '../../assets/people.png'
import Market from '../../assets/retailer.png'
import Watch from '../../assets/facebook.png'
import Memories from '../../assets/chronometer.png'
import Events from '../../assets/planner.png'
import Gaming from '../../assets/gaming.png'
import Gallery from '../../assets/gallery.png'
import Videos from '../../assets/camera.png'
import Messages from '../../assets/chat.png'
import Tutorials from '../../assets/tutorial.png'
import Courses from '../../assets/online-learning.png'
import Fund from '../../assets/charity.png'


function Leftbar(){
    return(
        <div className="leftbar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                    <img src="https://images.pexels.com/photos/7550294/pexels-photo-7550294.jpeg"/>
                    <span>John doe</span>
                    </div>
                    <div className="item">
                        <img src={Friends} />
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <img src={Groups} />
                        <span>Groups</span>
                    </div>
                    <div className="item">
                        <img src={Market} />
                        <span>Marketplace</span>
                    </div>
                    <div className="item">
                        <img src={Watch} />
                        <span>Watch</span>
                    </div>
                    <div className="item">
                        <img src={Memories} />
                        <span>Memories</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span>Your shortcuts</span>
                    <div className="item">
                        <img src={Events} />
                        <span>Events</span>
                    </div><div className="item">
                        <img src={Gaming} />
                        <span>Gaming</span>
                    </div><div className="item">
                        <img src={Gallery} />
                        <span>Gallery</span>
                    </div><div className="item">
                        <img src={Videos} />
                        <span>Videos</span>
                    </div><div className="item">
                        <img src={Messages} />
                        <span>Messages</span>
                    </div>
                </div>
                <hr/>
                <div className="menu">
                    <span>Others</span>
                    <div className="item">
                        <img src={Fund} />
                        <span>Fundraiser</span>
                    </div><div className="item">
                        <img src={Tutorials} />
                        <span>Tutorials</span>
                    </div><div className="item">
                        <img src={Courses} />
                        <span>Courses</span>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default Leftbar