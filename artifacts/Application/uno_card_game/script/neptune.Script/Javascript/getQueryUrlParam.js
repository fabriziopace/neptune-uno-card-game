function getQueryUrlParam(paramName) {
    // get query url parameter
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    return params[paramName];
}
