import React, { useRef, useState } from 'react'
import Grid from './Grid'




function BinaryTree() {
    const [binaryTree, setBinaryTree] = useState([
        [0],
        [0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]);

    const [grid, setGrid] = useState([
        // [2],
        // [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        // [2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2],
        // [2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2],
        // [2, 0, 2, 0, 2, 0, 0, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2]
    ])
    const [loading, setLoading] = useState(true);

    // const [operationList, setOperationList] = useState([
    //     [1, 15],
    //     [1, 25],
    //     [1, 10],
    //     [1, 7],
    //     [1, 22],
    //     [1, 17],
    //     [1, 13],
    // ])

    // console.log(binaryTree[2][0]);

    // const [BST, setBST] = useState(new BinarySearchTree());

    var BST = new BinarySearchTree();
    BST.insert(15); 
    BST.insert(25); 
    BST.insert(10); 
    BST.insert(7); 
    // BST.insert(22); 
    // BST.insert(17); 
    // BST.insert(13); 
    // console.log
    // BST.insert(5); 
    // BST.insert(9); 
    // BST.insert(27); 
    // BST.insert(4);
    // BST.insert(3);  
    // BST.insert(2); 
    // BST.insert(1); 

    const insertNode = (data) =>{
        BST.insert(data);
        // BST.inorder(BST.getRootNode());
        breathFT(BST.getRootNode());
        // setBinaryTree()
    }

    // const inser
    const makeVisualTree = () =>{
        var maxHeigth = treeHeight(BST.getRootNode());
        var noOfRows = maxHeigth + 1;

        var i, j, k;
        var myList = [];
        for(i = 0; i < noOfRows; i ++){
            // var noOfElements = Math.pow(2, i);
            var noOfZerosInMiddle = Math.pow(2, noOfRows-i) - 1;
            var tempList = [];
            for(j = 0; j < binaryTree[i].length; j ++){
                tempList.push(binaryTree[i][j]);
                if(j < binaryTree[i].length - 1){
                    for(k = 0; k < noOfZerosInMiddle; k++ ){
                        tempList.push(0);
                    }
                }
            }
            myList.push(tempList);

        }

        setGrid(a => {
            return setGrid(myList);
        });
        console.log("grid ", grid);

    }
    

    const treeHeight = (node) => {
        if (node == null)
            return -1;
        else
        {
            var lDepth = treeHeight(node.left);
            var rDepth = treeHeight(node.right);
  
            if (lDepth > rDepth)
                return (lDepth + 1);
            else
                return (rDepth + 1);
        }
    }


    const breathFT = (node) => {
        if(node == null){
            return;
        }

        var queue = [];
        queue.push(node);
        var maxHeigth = treeHeight(node);

        console.log(maxHeigth);
        console.log(binaryTree);
        var dummyNode = new Node(0);


        var myList = [...binaryTree]
        var i = 0, j = 0;
        while(i <= maxHeigth && i <= 6){
            let queueTop = queue.shift();
            myList[i][j] = parseInt(queueTop.data);
            
            

            if(queueTop.left === null){
                queue.push(dummyNode);
            }
            else{
                queue.push(queueTop.left);
            }

            if(queueTop.right === null){
                queue.push(dummyNode);
            }
            else{
                queue.push(queueTop.right);
            }

            j += 1;
            if(j === Math.pow(2, i)){
                i += 1;
                j = 0;
                // console.log("changed j i = " , i)
            }

        }

        setBinaryTree(myList);
        makeVisualTree();
        console.log(binaryTree);
    }

    const [treeOperation, setTreeOperation] = useState("Insert");
    const [input, setInput] = useState(null);
    const handleChange = e => {
        setInput(e.target.value);
    };
    const inputRef = useRef(null);

    const handleSubmit = e => {
        e.preventDefault();
        alert(treeOperation);
        if(treeOperation === "Insert"){
            insertNode(input);
        }
        setInput(null)
        // const newList = [...operationList, [1, input]];
        // setOperationList(a => {
        //     setOperationList( newList);
        // });
        
        // // if(!inserted){
        //     operationList.map((operation) => {
        //         insertNode(operation[1]);
        //     })
        //     makeVisualTree();
        //     // setInserted(tru/e);
        // // }
        // setLoading(true);
        
    } 

    return (
        <>
        
        <Grid grid={grid} setGrid={setGrid} makeVisualTree={makeVisualTree} loading={loading} setLoading={setLoading} />
        <button onClick={() => breathFT(BST.getRootNode())}>Click</button>
        <form className="todo-form" onSubmit={handleSubmit}>
            <input 
                type="number" 
                placeholder="Add a todo" 
                value={input}
                className="operation-input"
                onChange={handleChange}
                ref={inputRef}
            />
            <button onClick={handleSubmit}>HI</button>
            <select value={treeOperation} onChange={(e) => setTreeOperation(e.target.value) } class="buttonbox">
                <option value="Insert">Insert</option>
                <option value="Delete">Delete</option>
                <option value="Search">Search</option>
            </select>
        </form>
        </>
    )
}

export default BinaryTree




class Node { 
    constructor(data) 
    { 
        this.data = data; 
        this.left = null; 
        this.right = null; 
    } 
} 


class BinarySearchTree { 
    constructor(){ 
        this.root = null; 
        this.traversal = [];
    } 

    insert(data){ 
        var newNode = new Node(data); 
                        
        if(this.root === null) {
            this.root = newNode; 
        }
        else{
            this.insertNode(this.root, newNode); 
        }
    } 
    
    insertNode(node, newNode) { 
        if(newNode.data < node.data) { 
            if(node.left === null){ 
                node.left = newNode; 
            }
            else{
                this.insertNode(node.left, newNode);  
            }
        } 
        else{ 
            if(node.right === null) {
                node.right = newNode;
            } 
            else{
                this.insertNode(node.right,newNode); 
            }
        } 
    } 

    inorder(node) 
    { 
        if(node !== null) 
        { 
            this.inorder(node.left); 
            console.log(node.data); 
            this.inorder(node.right); 
        } 
    } 

    getRootNode() { 
        return this.root; 
    } 
  

} 