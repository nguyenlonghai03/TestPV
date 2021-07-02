import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { TakeArrPost, TakeCmt, DeletePost } from './redux/action/Actiontest';

export default function TestComponent() {
    const { arrCmt, arrPost } = useSelector(state => state.TestReducer);
    const dispatch = useDispatch();
    useEffect(async () => {
        dispatch(await TakeArrPost())
        dispatch(await TakeCmt())
    }, [])

    console.log("arrPost", arrPost);
    console.log("arrCMT", arrCmt);
    return (
        <div className="container">
            {arrPost.map((item, index) => {

                return <div className="m-5, p-2" style={{ border: "1px solid #333" }}>
                    <div className="" >
                        <h4>Post id = {item.id}</h4>

                        <div className="row">
                            <div className="col-md-6">
                                <p>Title: {item?.title}</p>
                                <p>Body: {item?.body}</p>
                                <button className="btn btn-delete" onClick={async () => {
                                    dispatch(await DeletePost(item.id))
                                }}> Delete</button>
                            </div>
                            <div className="col-md-6">
                                <h2>cmt của post {item.id}</h2>

                                {arrCmt.map((cmt, index) => {

                                    if (cmt.postId == item.id) {

                                        return <div>
                                            <p>Name: {cmt.name}</p>
                                            <p>Email: {cmt.email}</p>
                                            <p>Body: {cmt.body}</p>
                                            <hr></hr>
                                        </div>
                                    } else {
                                        return <></>
                                    }
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            })}




        </div>
    )
}
