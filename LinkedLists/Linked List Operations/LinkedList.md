# Introduction to Linked Lists

## What is a linked list?
- A linked list is a structure of linked nodes that are connected throughout memory via pointers. 

```javascript
class LinkedListNode{
    constructor(val){
     this.val = val
     this.next = null
    }
}
```

- This first article will go over the basic operations such as insertion, deletion and other was of modifying Singly Linked Lists

# Creating A Linked List Class
- This section will go over writing out our own linked list class

- Lets start by defining a simple class 
```javascript
class LinkedList{
    constructor(){
        this.head = null
    }
}
```
- this.head will reference our list. We will create a seperate node class that we will use to create nodes

```javascript
class LinkedListNode{
    constructor(val){
     this.val = val
     this.next = null
    }
}
```
- Now lets write some code to insert nodes 
- Lets write three methods to our linkedlist class
- [] Insert at head of linked list
- [] Insert and end of linked list
- [] Insert at the kth node

- inserting is very simple at the head. We just add the new val on the front and connect the new nodes pointer to the front of the list.

```javascript
    insertAtHead(val){
        let ref = this.head
        this.head = new LinkedListNode(val)
        this.head.next = ref
        return this.head
    }
```

- Now lets insert at the tail
- Loop through the list. Insert at the back
```javascript
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
```

