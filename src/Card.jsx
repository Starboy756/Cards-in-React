import profilePic from './assets/newPic.png'

function Card(){
    return(
        <div className="card">
            <img className="card-img" src= {profilePic} alt="Profile Picture"></img>
            <h2 className="card-title">Taseen Tariq</h2>
            <p className="card-text">Hey I am Learning React With JSX - JavaScript XML</p>
        </div>
    );
}

export default Card