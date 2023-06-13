function receivesAFunction(cb) {
    return cb();
}

function returnsANamedFunction() {
    return function named() {
        return named;
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        return anonymous;
    }
}