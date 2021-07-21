import { createServer, Factory, Model, RestSerializer } from "miragejs";
import faker from "faker"
import { clearLine } from "readline";

type Continent = {
    id: string;
    country: string;
    cities: string;
}


export function makeServer() {
    let server = createServer({

        models: {
            continent: Model,//.extend<Partial<Continent>>({}),
        },
        /*
                factories: {
                    continent: Factory.extend([
                        {
                            country: "Brasil",
                            cities: "SãO Paulo"
                        },
                        {
                            country: "Chile",
                            cities: "Santiago"
                        }
                    ])
                },
        */

        routes() {
            this.namespace = 'api';
            this.timing = 750;
            this.get("/continents", (schema, request) => {
                let countryId = request.queryParams.continente
                return schema.continents.where({ conti: countryId })
            });
            /*
                        this.get("/continents", (schema, request) => {
                            return schema.continents.all();
                        });
            */
            this.post('/continents');

            this.namespace = '';
            this.passthrough();
        },

        seeds(server) {
            server.create("continent", { id: "1", country: "Brasil", cities: "São Paulo", foto: "americanorte.jpg", conti: "as" });
            server.create("continent", { id: "2", country: "Chile", cities: "Santiago", foto: "oceania.jpg", conti: "as" });
            server.create("continent", { id: "3", country: "Peru", cities: "Lima", foto: "africa.jpg", conti: "as" });
            server.create("continent", { id: "4", country: "Bolivia", cities: "La Paz", foto: "americanorte.jpg", conti: "as" });
            server.create("continent", { id: "5", country: "Paraguai", cities: "Assuncion", foto: "", conti: "as" });
            server.create("continent", { id: "6", country: "Uruguai", cities: "Montevideo", foto: "asia.jpg", conti: "as" });
            server.create("continent", { id: "7", country: "Alemanha", cities: "Berlin", foto: "berlin.jpg", conti: "eu" });
            server.create("continent", { id: "8", country: "Irlanda", cities: "Dublin", foto: "dublin.jpg", conti: "eu" });
            server.create("continent", { id: "9", country: "Russia", cities: "Moscow", foto: "moscow.png", conti: "eu" });
            server.create("continent", { id: "10", country: "Austria", cities: "Vienna", foto: "vienna_austria.jpg", conti: "eu" });
            server.create("continent", { id: "11", country: "Estados Unidos", cities: "Orlando", foto: "orlando.jpg", conti: "an" });
            server.create("continent", { id: "12", country: "Canada", cities: "Ottawa", foto: "ottawa.jpg", conti: "an" });
            server.create("continent", { id: "13", country: "México", cities: "Ciudad de mexico", foto: "cidade-do-mexico.jpg", conti: "an" });
            server.create("continent", { id: "14", country: "Egito", cities: "Cairo", foto: "cairo.jpg", conti: "asia" });
            server.create("continent", { id: "15", country: "Arabia Saudita", cities: "Riyadh", foto: "riyadh_arabia.jpg", conti: "asia" });
            server.create("continent", { id: "16", country: "Malasia", cities: "Johor Bahru", foto: "Malaysia_JohorBahru.jpg", conti: "asia" });
            server.create("continent", { id: "17", country: "Vietnam", cities: "Ha Long", foto: "Ha_Long_Vietnam.jpg", conti: "asia" });
            server.create("continent", { id: "18", country: "India", cities: "Chennai", foto: "chennai_india.jpeg", conti: "asia" });
            server.create("continent", { id: "19", country: "Oceania", cities: "Sidney", foto: "sydney.jpg", conti: "oceania" });
        },
    })

    return server;
}