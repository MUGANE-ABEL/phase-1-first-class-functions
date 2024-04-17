function receivesAFunction (callback){
    return callback()
}


function returnsANamedFunction () {
    newShoes= function(){
        return "nike"
    }
    return newShoes
}


function returnsAnAnonymousFunction () {
    return function (){
        return "toys"
    }
}