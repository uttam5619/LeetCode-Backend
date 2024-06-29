#leetCode


try{

//1.opened a db connection
//2.Queried on db but an exception error
//3.Exception will be thrown

throw 'exception'

}catch(err){
    //console.log('thrown exception', err)
}finally(){
    //close the db connection
}



exception is a run time issue.
in try block we used to write the code which may rise in an exception,
we mention the exception and then catch it and sometimes we forcefully excutes a piece of code
written in finally block.

- can search for a user profile
- can search for a problem.
- when a user passes all the test cases then only add the problem id to `solvedProblem` section
as well as add the streak. 
- if a user solves more than one problem a day then count it and show it's number.
- if a user clikes on like button then to update the dashbord take the id of dashboard from params
and take user id from the request body.

v2
- contests at a particular date.
