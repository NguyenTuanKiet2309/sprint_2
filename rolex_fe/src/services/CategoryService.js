import axios from "axios"

export async function findAllCategory(){
    const res = await axios.get("http://localhost:8080/category");
    return res.data;
}

export async function findCategoryById(categoryName){
    const res = await axios.get("http://localhost:8080/category/"+ categoryName);
    return res.data;
}