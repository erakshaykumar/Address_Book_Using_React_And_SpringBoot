import axios from 'axios'

class AddressbookService{
    baseUrl = 'http://localhost:8080/addressbook'

    addPerson = (person) =>{
        console.log(person);
        return axios.post(`${this.baseUrl}`+"/create",person)
    }

    getAllContacts = () =>{
        return axios.get(`${this.baseUrl}`+"/get")
    }

    delete = (id) => {
        axios.delete(`${this.baseUrl}`+`/delete/${id}`)
    }

    getContactById = (id) =>{
        return axios.get(`${this.baseUrl}`+"/get/"+`${id}`)
    }

    updatePerson = (id,person) => {
        return axios.put(`${this.baseUrl}`+"/update/"+`${id}`,person)
    }
}

export default new AddressbookService();