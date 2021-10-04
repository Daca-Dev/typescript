(() => {

    const error = (msg: string): never => {
        throw error(msg);
    }

    error('No termino');
})()