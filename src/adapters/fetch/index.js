const urlAndOptionsToFetchData = async (url, options) => {
    try {
        const response = await fetch(url, options);
        if (response.ok) {
            return await response.json();
        }
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const getData = async (url) => {
    return urlAndOptionsToFetchData(url, { method: "GET" });
};

export const deleteData = async (url) => {
    return urlAndOptionsToFetchData(url, {
        method: "DELETE",
    });
};

export const updateData = async (url, bodyData) => {
    return urlAndOptionsToFetchData(url, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
    });
};

export const postData = async (url, headers, bodyData) => {
    return urlAndOptionsToFetchData(url, {
        method: "POST",
        headers,
        body: JSON.stringify(bodyData),
    });
};

// I think we will edit a little bit when we will use json web token (JWT) because we have to send a headers as parameter in each request
