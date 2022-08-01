import axios from "axios";
import Papa from 'papaparse';

const Api = {
    list: async () => {
        return axios.get("https://docs.google.com/spreadsheets/d/e/2PACX-1vS-Jut58KN7ugePcdCi1qagYrlNYpYfZsxN7z1TiNrK-NkvQO-FXZEH0bBXVjrjlloAws5b4n_PofB_/pub?gid=0&single=true&output=csv",
            {
                responseType: 'blob',
            })
            .then(response => new Promise((resolve, reject) => {
                Papa.parse(response.data, {
                    header: true,
                    complete: results => {

                        const products = results.data;
                        // resolve(results.data)
                        return resolve(products.map((product) => (
                            {
                                ...product,
                                price: Number(product.price)
                            }
                        )
                        ))
                    },
                    error: (error) => reject(error.message)
                })
            })
            )
    }
}

export default Api