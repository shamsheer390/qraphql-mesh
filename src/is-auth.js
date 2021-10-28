module.exports = {
    isAuth: next => (root, args, context, info) => {
        // Check if Authorization header is present
        // console.log(root, args, context, info);
        console.log('isAuth Context', context.authorization)
        context.headers.newThing = 'newThing';
        console.log(context.headers, 'fhj');
        if(!context.headers.authorization) {
            context.res.status(401);
            console.log('gdfg');
            throw new Error('unauthorized');
        }
        return next(root, args, context, info);
    }
  };