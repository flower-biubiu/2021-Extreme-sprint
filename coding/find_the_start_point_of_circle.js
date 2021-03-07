function findPoint(head) {
    let flagHead = new ListNode();
    flagHead.next = head;

    let fast = slow = flagHead;

    if(fast.next == null || fast.next.next == null){
        return false;
    }

    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
        
        if(fast == slow){
            let p = flagHead;
            while(p != slow){
                p = p.next;
                slow =slow.next;
            }
            return p;
        }
    }
    return null;
    
}

function ListNode(val) {
    this.val = val;
    this.next = next;  
}