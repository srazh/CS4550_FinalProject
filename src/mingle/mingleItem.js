import {useDispatch} from "react-redux";
import {deleteMingleThunk} from './mingle-thunks';

const MingleItem = ({
  mingle = {
    "_id": Number,
    "owners": String,
    "title": String,
    "img": String,
    "description": String,
    "likes": Number
  }
}) => {
  const dispatch = useDispatch();
  const deleteMingleHandler = (id) => {
    dispatch(deleteMingleThunk(id));
  }
  return(
      <>
        <div className="col-3">
        <div className="card bg-dark mb-3">
          <div className="card-header">{mingle.owners}</div>
          <img src={`${mingle.img}`} alt="fruits and vegetables" width="100%"/>
          <div className="card-body">
            <h4 className="card-title">{mingle.title}</h4>
            <p className="card-text">{mingle.description}</p>
          </div>
        </div>
        </div>

      </>
      // <li className="list-group-item">
      //   <div className="row">
      //     <div className="col-2">
      //       <img className="rounded-circle" src={`../images/${tuit.image}`} width={`100%`}
      //            alt={`${tuit.topic}`}/>
      //     </div>
      //     <div className="col-10 align-items-top">
      //       <i className="bi bi-x-lg float-end"
      //          onClick={() => deleteTuitHandler(tuit._id)}/>
      //       {tuit.username + ' '}
      //       <i className="bi bi-check-circle-fill"/>
      //       {' ' + tuit.handle + ' '}
      //       <div className="text-secondary d-inline">
      //         - {' ' + tuit.time}
      //       </div>
      //       <br/>
      //       {tuit.tuit}
      //       <br/>
      //       <TuitStats key={tuit._id} tuit={tuit}/>
      //     </div>
      //   </div>
      // </li>
  );
};
export default MingleItem;