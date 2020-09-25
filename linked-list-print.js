//https://medium.com/@rylanbauermeister/understanding-data-structures-linked-lists-9ca06e2a711a

//This function moves through a linked list,
// and prints the value at each position. 
//The **read variable is repeatedly set to its own next property**, 
//moving it down the line until it is equal to null (and has therefore reached the end of the list). 
//Note that we do not use the value for head, but instead assign a new variable;
// if we were to reassign head, we could potentially lose it and destroy the entire list. Better by far to use a secondary variable.

linkedPrint(){
    let read = list.head
    while(read !== null){
      console.log(read.val)
      read = read.next
    }
  }


  
remove(val){
    if(this.head === null) {
        return -1;
      }
      else if(this.head.val === val) {
        this.head = this.head.next;
        return 1;
      }
      let read = this.head;
      while(read.next !== null){
        if(read.next.val === val){
          read.next = read.next.next;
          return 1;
        }
      }
      return -1;
    }