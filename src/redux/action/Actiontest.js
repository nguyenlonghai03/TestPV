import Axios from 'axios';

export const TakeArrPost = async () => {
    return async (dispatch) => {
        try {
            const { data, status } = await Axios({
                url: `https://jsonplaceholder.typicode.com/posts`,
                method: 'GET'
            })

            if (status === 200) {
                dispatch({
                    type: 'LAY_DS_POST',
                    arrPost: data
                })
            }

        } catch (err) {
            console.log(err)
        }
    }
}

export const TakeCmt = async () => {
    return async (dispatch) => {
        try {
            const { data, status } = await Axios({
                url: `https://jsonplaceholder.typicode.com/comments`,
                method: 'GET'
            })

            if (status === 200) {
                dispatch({
                    type: 'LAY_DS_CMT',
                    arrCmt: data
                })
            }

        } catch (err) {
            console.log(err)
        }
    }
}

export const DeletePost = async (id) => {

    return async (dispatch) => {
        try {
            const { data, status } = await Axios({
                url: `https://jsonplaceholder.typicode.com/posts/${id}`,
                method: 'DELETE'
            })

            if (status === 200) {
                dispatch(await TakeArrPost())
            }

        } catch (err) {
            console.log(err)
        }
    }
}


