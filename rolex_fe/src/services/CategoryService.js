import axios from "axios"

export async function findAllCategory(){
    const res = await axios.get("http://localhost:8080/category");
    return res.data;
}

export async function findCategoryById(categoryId){
    const res = await axios.get("http://localhost:8080/category/"+ categoryId);
    return res.data;
}