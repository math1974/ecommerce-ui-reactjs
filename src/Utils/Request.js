import axios from 'axios';
import lodash from 'lodash';

export const get = async ({ params, url }) => {
	try {
		const response = await axios.get(BASE_URL + url, {
			params: {
                ...params || {},
                token: localStorage.getItem('token')
            },
		});

		return lodash.get(response, 'data.data');
	} catch (error) {
		return null;
	}
};

export const post = async ({ data, url }) => {
	try {
		const response = await axios.post(BASE_URL + url, {
			...data
		}, {
            qs: {
                token: localStorage.getItem('token')
            }
        });

		return lodash.get(response, 'data');
	} catch (error) {
		return null;
	}
};

export const put = async ({ params, url }) => {
	try {
		const response = await axios.put(BASE_URL + url, {
			...params
		}, {
            qs: {
                token: localStorage.getItem('token')
            }
        });

		return lodash.get(response, 'data');
	} catch (error) {
		return null;
	}
};

export const remove = async ({ params, url }) => {
	try {
		const response = await axios.delete(BASE_URL + url, {
			...params
		}, {
            qs: {
                token: localStorage.getItem('token')
            }
        });

		return lodash.get(response, 'data');
	} catch (error) {
		return null;
	}
};

export const BASE_URL = process.env.REACT_APP_BASE_URL;
