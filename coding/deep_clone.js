//way 1 序列化和反序列化

let obj_clone = JSON.parse(JSON.stringify(obj));

//way 2 递归

var isObject=(obj)=>{ return(typeof(obj) == 'Object' || typeof(obj) == 'function') && obj != null; }

function deepClone(obj) {
    if(!isObject(obj)) return obj;

    let obj_clone = Array.isArray(obj)?[]:{};

    for(let key in obj){
        if(obj.hasOwnPrototype(key)){
            obj_clone = isObject(obj[i])? deepClone(obj[i]): obj[i];
        }
    }

    return obj_clone;  
}

//way3 不同对象不同处理方式

function  deepClone(obj) {
    if(!isObject(obj)) return obj;

    let obj_clone = {};

    switch (obj.constructor) {
        case Array:
            obj_clone = [...obj];
            break;
        case Map:
            obj_clone = new Map();
            for(let [key,item] of obj){
                obj_clone.set(key, isObject(item)?deepClone(item):item );
            }
            break;
        case Set:
            obj_clone = new Set();
            for(let item of obj){
                obj_clone.add(isObject(item)? deepClone(item): item);
            }
            break;
        case RegExp:
            obj_clone = new RegExp(obj.valueOf());
            break;
        case Date:
            obj_clone = new Date(obj.valueOf());
            break;
        case Object:
            for(let i in obj){
                obj_clone[i] = (isObject(obj[i])? deepClone(obj[i]): obj[i]);
            }
            break;
    
        default:
            break;
    }

    
}