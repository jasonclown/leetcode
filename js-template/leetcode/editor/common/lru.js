// 定义双链表节点类
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

// 定义 LRU 缓存类
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.cache = {};

        // 初始化虚拟头节点和尾节点
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    // 将节点移动到链表头部
    moveToHead(node) {
        this.removeNode(node);
        this.addToHead(node);
    }

    // 删除节点
    removeNode(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    // 添加节点到链表头部
    addToHead(node) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
    }

    // 删除链表尾部节点
    removeTail() {
        const lastNode = this.tail.prev;
        this.removeNode(lastNode);
        return lastNode;
    }

    // 获取缓存中的值
    get(key) {
        if (key in this.cache) {
            const node = this.cache[key];
            this.moveToHead(node);
            return node.value;
        }
        return -1;
    }

    // 向缓存中插入或更新值
    put(key, value) {
        if (key in this.cache) {
            const node = this.cache[key];
            node.value = value;
            this.moveToHead(node);
        } else {
            const newNode = new Node(key, value);
            this.cache[key] = newNode;
            this.addToHead(newNode);
            this.size++;

            if (this.size > this.capacity) {
                const removed = this.removeTail();
                delete this.cache[removed.key];
                this.size--;
            }
        }
    }
}

// 使用示例
const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // 返回 1
cache.put(3, 3); // 该操作会使得关键字 2 作废
console.log(cache.get(2)); // 返回 -1 (未找到)
cache.put(4, 4); // 该操作会使得关键字 1 作废
console.log(cache.get(1)); // 返回 -1 (未找到)
console.log(cache.get(3)); // 返回 3
console.log(cache.get(4)); // 返回 4