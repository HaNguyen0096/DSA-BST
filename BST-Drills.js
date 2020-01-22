const BinarySearchTree = require('./BST');

//Find height of a BST
function main() {
    const BST = new BinarySearchTree();
    
    const inserts = [3, 1, 4, 6, 9, 2, 5, 7,8];
    inserts.forEach(element => BST.insert(element));
    return BST;
}

function BSTHeight(tree){
    let height=0;
    if(!tree){
        return 0;
    }
    if (!tree.left && !tree.right){
        return 1;
    }
    if (tree.left){
        let leftHeight = 1 + BSTHeight(tree.left);
        if (leftHeight > height){
            height = leftHeight;
        } 
    }
    if (tree.right){
        let rightHeight = 1 + BSTHeight(tree.right);
        if (rightHeight > height){
            height = rightHeight;
        }
    }

    return height;
}

console.log('height is: '+BSTHeight(main()));
//O(n) in worst case


//*Check if a tree is a BST
function is_BST(tree){
    if(!tree){
        return false;
    }
    if (!tree.left && !tree.right){
        return true;
    }
    if (tree.left){
        if(tree.left.key<tree.key){
            is_BST(tree.left);
        }
        else return false;
    }
    if (tree.right){
        if(tree.right.key>tree.key){
            is_BST(tree.right);
        }
        else return false;
    }
    return true;
}
console.log('is BST: '+is_BST(main()));


//*Find 3rd largest node
function ThirdLargest(tree){
    if(!tree){
        return null;
    }

}

//console.log(ThirdLargest(main()));


//*check balanced BST

function is_Balance(tree){
    if(!tree){
        return true;
    }
    let lh=BSTHeight(tree.left);
    let rh=BSTHeight(tree.right);
    if ((Math.abs(lh-rh)<=1) && is_Balance(tree.left) && is_Balance(tree.right)){
        return true;
    }
    else{
        return false;
    }
}

console.log('check Balance: '+is_Balance(main()));

function is_SameTree(arr1, arr2){
    if (arr1.length!==arr2.length || arr1[0]!==arr2[0]){
        return false;
    }
    if (arr1.length === 0 || arr2.length === 0) {
        return true;
    }
    let l=arr1.length;
    let left1=[];
    let right1=[];
    let left2=[];
    let right2=[];
    for (let i=1; i<l; i++){
        if(arr1[i]<arr1[0]){
            left1.push(arr1[i]);
        }
        else{
            right1.push(arr1[i]);
        }
    }

    for (let j=1; j<l; j++){
        if(arr2[j]<arr2[0]){
            left2.push(arr2[j]);
        }
        else{
            right2.push(arr2[j]);
        }
    }
    return (is_SameTree(left1,left2) && is_SameTree(right1,right2));

}

const arr1 = [3, 5, 4, 6, 1, 0, 2];
const arr2 = [3, 1, 5, 2, 4, 6, 0];
console.log('Same Tree: '+is_SameTree(arr1,arr2));

