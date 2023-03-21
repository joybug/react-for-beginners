import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function MovieDetails({id, coverImg,title,summary,genres}){
    return ( 
    <div>
        <img src={coverImg} alt={title}/>
        <h2>
            {title}
        </h2>
        <p>{summary}</p>
        <ul>
          {genres.map((g)=>(
            <li key={g}>{g}</li>
          ))}
        </ul>
        <Link to="/">목록으로 돌아가기</Link>
    </div>
    );
}

MovieDetails.propTypes ={
  coverImg: PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  summary:PropTypes.string.isRequired,
  genres:PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default MovieDetails;