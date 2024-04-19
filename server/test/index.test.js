const server = require('../src/server');
const session = require('supertest');
const agent= session(server);

describe("Test de RUTAS", () =>{

    let character1 = { id: 1, name: "Rick"};
    let character2 = { id: 2, name: "Morty"}

    // Para /character/:id
    describe("GET /rickandmorty/character/:id", () => {
        it("Responde con status: 200", async () => {
            await agent.get('/rickandmorty/character/1').expect(200);
        })

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const { body } = await agent.get('/rickandmorty/character/2')

            expect(body).toHaveProperty("id")
            expect(body).toHaveProperty("name");
            expect(body).toHaveProperty("species");
            expect(body).toHaveProperty("gender");
            expect(body).toHaveProperty("status");
            expect(body).toHaveProperty("origin");
            expect(body).toHaveProperty("image");
        })

        it("Si hay un error responde con status: 500", async () => {
            await agent.get('/rickandmorty/character/1000').expect(404);
        })
    })

    // Para /login
    describe("GET /rickandmorty/login", () => {
        it("Si la info es correcta, devuelve access: true", async () => {
            const { body } = await agent.get('/rickandmorty/login?email=richrdpere321@gmail.com&password=pass123');

            expect(body).toEqual({access: true});
        })

        it("Si la info es incorrecta, devuelve access: false", async () => {
            const { body } = await agent.get('/rickandmorty/login?email=richrdpere321gmail.com&password=*');

            expect(body).toEqual({access: false});
        })
    })
    
    // Para /fav
    describe("POST /rickandmorty/fav", () => {

        it("Debe devolver la info en un array", async () => {
            const { body} = await agent.post("/rickandmorty/fav").send(character1);

            expect(body).toBeInstanceOf(Array);
            expect(body).toContainEqual(character1);
        })

        it("Al enviar un nuevo elemento por body, este debe ser devuelto en un arreglo que incluye un elemento enviado previamente", async () => {
            const {body} = await agent.post("/rickandmorty/fav").send(character2)

            expect(body).toContainEqual(character1);
            expect(body).toContainEqual(character2);
        })


    })

    // Para /fav/:id
    describe("DELETE /rickandmorty/fav/:id", () => {
        

        it("Debe devolver un array con los elementos sin modificar si el ID no existe", async () => {
            const { body } = await agent.delete("/rickandmorty/fav/3");

            expect(body).toContainEqual(character1);
            expect(body).toContainEqual(character2);
        })

        it("Si envio un ID valido se elimina correctamente", async () => {
            const { body } = await agent.delete("/rickandmorty/fav/2");

            expect(body).toContainEqual(character1);
            expect(body).not.toContainEqual(character2);
        })
    })
})