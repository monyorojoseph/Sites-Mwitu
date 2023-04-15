import axiosInstance from "@/utils/axios";

export async function createSite(formData:any) {
    try{
        axiosInstance.defaults.headers.common['Content-Type'] = 'multipart/form-data';
        const response = await axiosInstance.post('/mwitu/create-site/', formData);
        return response
    }catch(e){
        console.log(e)
    } 
}