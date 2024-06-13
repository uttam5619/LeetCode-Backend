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



