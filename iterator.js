/* 
the iterator should have next and hasNext methods  
*/
function iterator(data){
    var data = data;
          length = data.length;
          index = 0;
    
    return {
        next: function(){
            var element;
            
            if(!this.hasNext()){
                return null;
            }
            
            element = data[index];
            index += 1;
            return element;
        },
        
        hasNext: function(){
            return index < length;
        },
        
        current: function(){
            return data[index];
        }
    };
}


// example of charIterator
var charIterator = iterator("hello world!");

while(charIterator.hasNext()){
    console.log(charIterator.next());
}