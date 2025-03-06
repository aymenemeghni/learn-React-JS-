import Post from "./Post";
import "./Midel.css";

const Midel = (props) => {
    const list = props.PUB;

    return (
        <div>
        {list.map(function (e) {
            return (
            
                <Post key={e.id} pub={e} />
            
            );
        })}
        </div>
    );
};
export default Midel;
