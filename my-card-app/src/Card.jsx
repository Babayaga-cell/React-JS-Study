import profilePic from './assets/alt-dp.png'
function Card(){
    return(
        <div className="card">

            <img className="cardImage" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Lex</h2>
            <p className="card-text">I develop applications</p>

        </div>
    );
}

export default Card