import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {createMingleThunk, findAllMingleThunk, deleteMingleThunk} from "./mingle-thunks";
import MingleItem from "./mingleItem";
//import {userLikesMovieThunk} from "../likes/likes-thunks";

const MingleComponent = () => {
  const {mingles} = useSelector(state => state.mingles);
  const [mingle, setMingle] = useState({title: 'New Mingle'});
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(findAllMingleThunk())
  }, [])
  console.log(mingles);
  return(
      <>
        {
          mingles.map(mingle =>
              <MingleItem
                  key={mingle._id}
                  mingle={mingle}/>
          )
        }
      </>
  );
}

export default MingleComponent;