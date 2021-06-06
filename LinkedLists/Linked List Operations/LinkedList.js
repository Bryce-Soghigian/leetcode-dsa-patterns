class LinkedList{
    constructor(){
        this.head = null
    }
    insertAtHead(val){
        let ref = this.head
        this.head = new LinkedListNode(val)
        this.head.next = ref
        return this.head
    }

    insertAtEnd(val){
        let curr = this.head
        while(curr){
        if(curr.next === null){
            curr.next = val
            break
        }
        curr = curr.next 
        }
    }
}
class LinkedListNode{
    constructor(val){
        this.val = val
        this.next = null
    }
}

let list = new LinkedList()
list.insertAtHead(1)
list.insertAtHead(2)
list.insertAtHead(3)
list.insertAtHead(4)
list.insertAtHead(5)
list.insertAtHead(19)
list.insertAtHead(143)
list.insertAtEnd("SHEESH")
console.log(list.head)