const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {

  constructor(){
      this.startNode = null;
  }

  root() {
      return this.startNode;
  }

  add(data) {

      this.startNode = newNode(this.startNode, data)
    
      function newNode(curNode, data) {
        if (!curNode) return new Node(data);
        if (curNode.data === data) return curNode;
        if (curNode.data < data) {
            curNode.right = newNode(curNode.right, data);
        } else {
            curNode.left  = newNode(curNode.left, data);
        }
        return curNode;
      }
  }

  has(data) {

      return searchNode(this.startNode, data);

      function searchNode(curNode, data){
          if (!curNode) return false;
          if (curNode.data === data) return true;
          if (curNode.data < data) {
            return searchNode(curNode.right, data);
          } else {
            return searchNode(curNode.left, data);
          }  
      }
  }

  find(data) {

      return findNode(this.startNode, data);

      function findNode(curNode, data){
          console.log(curNode, data);
          if (!curNode) return null;
          if (curNode.data === data) return curNode;
          if (curNode.data < data) {
            return findNode(curNode.right, data);
          } else {
            return findNode(curNode.left, data);
          }  
      }
}

  remove(data) {

      this.startNode = removeNode(this.startNode, data);

      function removeNode(curNode, data){
          // Ноды для удаления в дереве нет
          if (!curNode) return null;
          // Нода для удаления находится правее ищем ее справа
          if (curNode.data < data) {
              console.log(curNode, 'Идем влево');
              curNode.right = removeNode(curNode.right, data);
              return curNode;
          } 
          // Нода для удаления находится левее ищем ее слева
          else if (curNode.data > data) {
            console.log(curNode, 'Идем вправо');
            curNode.left = removeNode(curNode.left, data);
              return curNode;
          }
          // Нашли ноду для удаления, начинаем процесс удаления
          else {
              console.log(curNode, "Нашли ноду для удаления");
              // Это кончная нода, просто убиваем ее.
              if (!curNode.left&&!curNode.right) return null;
              // Слева нет ветки, поэтому всю правую ветку присоединяем на место удаленной ноды
              if (!curNode.left) {
                  console.log('Слева нет ветки. присоединяем правую ветку');
                  curNode = curNode.right;
                  return curNode;
              }    
              // Справа нет ветки, поэтому всю левую ветку присоединяем на место удаленной ноды
              if (!curNode.right) {
                console.log('Справа нет ветки. присоединяем левую ветку');
                curNode = curNode.left;
                return curNode;
              }
              // Ищем самое большое значение в левой стороне
              let maxFromLeftSide = curNode.left;
              console.log('И спава и слева есть ветки. Ищем max в левой части дерева');
              while (maxFromLeftSide.right) {
                maxFromLeftSide = maxFromLeftSide.right;
              }  
              // Найденое самое большое значение помещаем на место удаляемого, а ноду с этим значением удаляем, так как мы его забрали на место удаляемого
              console.log('Нашли max в левой части дерева', maxFromLeftSide.data);
              curNode.data = maxFromLeftSide.data;
              curNode.left = removeNode(curNode.left, curNode.data);
              return curNode;
          }
      }
  }

  min() {
      if (!this.startNode) return null;
      let curNode = this.startNode;
      while (curNode.left){
        curNode = curNode.left;
      }
      return curNode.data
  }

  max() {
    if (!this.startNode) return null;
    let curNode = this.startNode;
    while (curNode.right){
      curNode = curNode.right;
    }
    return curNode.data
  }
}

module.exports = {
  BinarySearchTree
};

// const tree = new BinarySearchTree();
// tree.add(12);
// tree.add(5);
// tree.add(4);
// tree.add(9);
// tree.add(3);
// tree.add(6);
// tree.add(8);
// tree.add(10);
// tree.add(7);
// tree.remove(5);
// tree.remove(8);
// tree.remove(9);
